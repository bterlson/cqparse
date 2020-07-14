import { scanner } from "./scanner";
import {
  SelectClauseNode,
  TokenKind,
  SelectStarNode,
  SelectListNode,
  SelectValueNode,
  SelectItemNode,
  ScalarExpression,
  ExistsScalarExpression,
  binops,
  IdentifierNode,
  PropertyRefScalarExpression,
  ObjectCreateScalarExpression,
  LiteralScalarExpression,
  ArrayScalarExpression,
  ArrayCreateScalarExpression,
  SQLQueryNode,
  FromClauseNode,
  SubqueryCollectionNode,
  CollectionExpressionNode,
  CollectionNode,
  JoinExpressionNode,
  WhereClauseNode,
  GroupByNode,
  OrderByNode,
  OrderByItemNode,
  OffsetLimitNode,
} from "./defs";

export function parse(q: string) {
  const s = scanner(q);
  s.scan();
  return parseSQLQuery();

  function parseSQLQuery(): SQLQueryNode {
    let select = parseSelectClause();
    let from, where, groupBy, orderBy, offsetLimit;

    if (s.getToken() === TokenKind.fromKeyword) {
      from = parseFromClause();
    }

    if (s.getToken() === TokenKind.whereKeyword) {
      where = parseWhereClause();
    }

    if (s.getToken() === TokenKind.groupKeyword) {
      groupBy = parseGroupByClause();
    }

    if (s.getToken() === TokenKind.orderKeyword) {
      orderBy = parseOrderByClause();
    }

    if (s.getToken() === TokenKind.offsetKeyword) {
      offsetLimit = parseOffsetLimitClause();
    }

    parseExpected(TokenKind.EOF);

    return {
      kind: "SqlQueryNode",
      select,
      from,
      where,
      groupBy,
      orderBy,
      offsetLimit,
    };
  }

  function parseOffsetLimitClause(): OffsetLimitNode {
    parseExpected(TokenKind.offsetKeyword);
    const offset = parseLiteralScalarExpression();
    parseExpected(TokenKind.limitKeyword);
    const limit = parseLiteralScalarExpression();

    return {
      kind: "OffsetLimitNode",
      offset: Number(offset.value),
      limit: Number(limit.value),
    };
  }

  function parseOrderByClause(): OrderByNode {
    parseExpected(TokenKind.orderKeyword);
    parseExpected(TokenKind.byKeyword);
    return {
      kind: "OrderByNode",
      items: parseOrderByList(),
    };
  }

  function parseOrderByList(): OrderByItemNode[] {
    const expr = parseOrderByItem();
    const items = [expr];

    while (s.getToken() === TokenKind.comma) {
      s.scan();
      items.push(parseOrderByItem());
    }
    return items;
  }

  function parseOrderByItem(): OrderByItemNode {
    const expr = parseScalarExpression();
    let order: "desc" | "asc" | undefined;

    if (
      s.getToken() === TokenKind.ascKeyword ||
      s.getToken() === TokenKind.descKeyword
    ) {
      s.scan();
      order = s.getTokenText() as "asc" | "desc";
    }

    return {
      kind: "OrderByItemNode",
      expr,
      order,
    };
  }

  function parseGroupByClause(): GroupByNode {
    parseExpected(TokenKind.groupKeyword);
    parseExpected(TokenKind.byKeyword);
    return {
      kind: "GroupByNode",
      exprs: parseScalarExpressionList(),
    };
  }

  function parseWhereClause(): WhereClauseNode {
    parseExpected(TokenKind.whereKeyword);
    return {
      kind: "WhereClauseNode",
      expr: parseScalarExpression(),
    };
  }

  function parseFromClause(): FromClauseNode {
    parseExpected(TokenKind.fromKeyword);

    return {
      kind: "FromClauseNode",
      collection: parseJoinCollectionExpression(),
    };
  }

  function parseJoinCollectionExpression():
    | JoinExpressionNode
    | CollectionExpressionNode {
    let expr:
      | JoinExpressionNode
      | CollectionExpressionNode = parseCollectionExpression();

    while (s.getToken() === TokenKind.joinKeyword) {
      s.scan();
      expr = {
        kind: "JoinExpressionNode",
        lhs: expr,
        rhs: parseCollectionExpression(),
      };
    }

    return expr;
  }

  function parseCollectionExpression(): CollectionExpressionNode {
    const collection = parseCollection();

    let expr: CollectionExpressionNode = {
      kind: "CollectionExpressionNode",
      collection,
    };

    if (s.getToken() === TokenKind.asKeyword) {
      s.scan();
      expr.as = parseIdentifier();
    }

    if (s.getToken() === TokenKind.inKeyword) {
      if (collection.kind !== "IdentifierNode") {
        throw new Error(
          "Expected identifier before `in`, got " + collection.kind
        );
      }

      s.scan();
      expr.in = parseCollection();
    }

    return expr;
  }

  function parseCollection(): CollectionNode {
    if (s.getToken() === TokenKind.openParen) {
      return parseSubqueryCollection();
    }

    let expr: CollectionNode = parseIdentifier();
    while (true) {
      if (s.getToken() === TokenKind.dot) {
        s.scan();
        expr = {
          kind: "InputPathCollectionNode",
          base: expr,
          member: parseIdentifier(),
        };
      } else if (s.getToken() === TokenKind.openBracket) {
        s.scan();
        expr = {
          kind: "InputPathCollectionNode",
          base: expr,
          member: parseLiteralScalarExpression(),
        };
        parseExpected(TokenKind.closeBracket);
      } else {
        break;
      }
    }

    return expr;
  }

  function parseSubqueryCollection(): SubqueryCollectionNode {
    parseExpected(TokenKind.openParen);
    const query = parseSQLQuery();
    parseExpected(TokenKind.closeParen);
    return {
      kind: "SubqueryCollectionNode",
      query,
    };
  }
  function parseSelectClause(): SelectClauseNode {
    if (s.getToken() !== TokenKind.selectKeyword)
      throw new Error("Invalid query - must start with `select`");

    const node: Partial<SelectClauseNode> = {
      kind: "SelectClauseNode",
      type: "select",
      distinct: false,
    };

    s.scan();

    if (s.getToken() === TokenKind.distinctKeyword) {
      node.distinct = true;
      s.scan();
    }

    if (s.getToken() === TokenKind.topKeyword) {
      s.scan();

      if (s.getToken() !== TokenKind.numericLiteral) {
        throw new Error(
          "The TOP clause requires a number, e.g. `SELECT TOP 10`"
        );
      }

      node.top = Number(s.getTokenText());
    }

    node.selection = parseSelection();

    return node as SelectClauseNode;
  }

  function parseSelection(): SelectStarNode | SelectListNode | SelectValueNode {
    if (s.getToken() === TokenKind.star) {
      s.scan();
      return {
        kind: "SelectStarNode",
      };
    } else if (s.getToken() === TokenKind.valueKeyword) {
      s.scan();
      return {
        kind: "SelectValueNode",
        value: parseScalarExpression(),
      };
    } else {
      return parseSelectList();
    }
  }

  function parseSelectList(): SelectListNode {
    const node: SelectListNode = {
      kind: "SelectListNode",
      items: [parseSelectItem()],
    };

    while (s.getToken() === TokenKind.comma) {
      s.scan();
      node.items.push(parseSelectItem());
    }

    return node;
  }

  function parseSelectItem(): SelectItemNode {
    const node: SelectItemNode = {
      kind: "SelectItemNode",
      value: parseScalarExpression(),
    };

    if (s.getToken() === TokenKind.asKeyword) {
      s.scan();
      node.as = parseIdentifier();
    }

    return node;
  }

  function parseScalarExpression(): ScalarExpression {
    return parseConditionalScalarExpression();
  }

  function parseConditionalScalarExpression(): ScalarExpression {
    const expr = parseBetweenOrInScalarExpression();

    if (s.getToken() === TokenKind.question) {
      s.scan();
      const consequent = parseScalarExpression();
      parseExpected(TokenKind.colon);
      const alternate = parseScalarExpression();
      return {
        kind: "ConditionalScalarExpression",
        test: expr,
        consequent,
        alternate,
      };
    }

    return expr;
  }

  function parseBetweenOrInScalarExpression(): ScalarExpression {
    const expr = parseBinaryScalarExpression();
    let isIn = false,
      isBetween = false;

    s.lookAhead(() => {
      if (s.getToken() === TokenKind.notKeyword) s.scan();
      isIn = s.getToken() === TokenKind.inKeyword;
      isBetween = s.getToken() === TokenKind.betweenKeyword;
    });

    if (isIn) {
      return parseInScalarExpression(expr);
    }

    if (isBetween) {
      return parseBetweenScalarExpression(expr);
    }

    return expr;
  }

  function parseInScalarExpression(expr: ScalarExpression): ScalarExpression {
    let inverted = false;

    if (s.getToken() === TokenKind.notKeyword) {
      s.scan();
      inverted = true;
    }

    parseExpected(TokenKind.inKeyword);
    parseExpected(TokenKind.openParen);
    const exprs = parseScalarExpressionList();
    parseExpected(TokenKind.closeParen);

    return {
      kind: "InScalarExpression",
      inverted,
      test: expr,
      values: exprs,
    };
  }

  function parseBetweenScalarExpression(
    expr: ScalarExpression
  ): ScalarExpression {
    let inverted = false;

    if (s.getToken() === TokenKind.notKeyword) {
      s.scan();
      inverted = true;
    }

    parseExpected(TokenKind.betweenKeyword);
    const low = parseBinaryScalarExpression();
    parseExpected(TokenKind.andKeyword);
    const high = parseBinaryScalarExpression();

    return {
      kind: "BetweenScalarExpression",
      inverted,
      high,
      low,
      test: expr,
    };
  }

  function parseBinaryScalarExpression(precedence = 0): ScalarExpression {
    let expr: ScalarExpression = parseUnaryScalarExpression();

    while (true) {
      const opPrecedence = getBinaryOpPrecedence(s.getToken());
      if (opPrecedence < precedence) {
        break;
      }

      const op = s.getTokenText();
      s.scan();

      expr = {
        kind: "BinaryScalarExpression",
        lhs: expr,
        rhs: parseBinaryScalarExpression(opPrecedence),
        op,
      };
    }

    return expr;
  }

  function parseUnaryScalarExpression(): ScalarExpression {
    const nextTok = s.getToken();
    if (
      nextTok === TokenKind.plus ||
      nextTok === TokenKind.minus ||
      nextTok === TokenKind.tilde ||
      nextTok === TokenKind.notKeyword
    ) {
      const op = s.getTokenText();
      s.scan();
      return {
        kind: "UnaryScalarExpression",
        op,
        operand: parseMemberExpression(),
      };
    }

    return parseMemberExpression();
  }

  function parseMemberExpression(): ScalarExpression {
    let expr = parsePrimaryExpression();

    while (true) {
      if (s.getToken() === TokenKind.openBracket) {
        s.scan();
        const value = parseScalarExpression();
        expr = {
          kind: "PropertyRefScalarExpression",

          base: expr,
          member: value,
        };
        parseExpected(TokenKind.closeBracket);
      }

      if (s.getToken() === TokenKind.dot) {
        s.scan();
        const id = parseIdentifier();

        expr = {
          kind: "PropertyRefScalarExpression",
          base: expr,
          member: id,
        };
      }

      break;
    }

    return expr;
  }

  function parsePrimaryExpression() {
    switch (s.getToken()) {
      case TokenKind.openBracket:
        return parseArrayCreateScalarExpression();
      case TokenKind.arrayKeyword:
        return parseArrayScalarExpression();
      case TokenKind.stringLiteral:
      case TokenKind.numericLiteral:
      case TokenKind.nullKeyword:
      case TokenKind.undefinedKeyword:
      case TokenKind.trueKeyword:
      case TokenKind.falseKeyword:
        return parseLiteralScalarExpression();
      case TokenKind.existsKeyword:
        return parseExistsScalarExpression();
      case TokenKind.openBrace:
        return parseObjectCreateScalarExpression();
      case TokenKind.openParen:
        return parseSQLQueryOrParenthesizedScalarExpression();
      default:
        return parseFunctionCallScalarExpression();
    }
  }

  function parseSQLQueryOrParenthesizedScalarExpression(): ScalarExpression {
    parseExpected(TokenKind.openParen);
    if (s.getToken() === TokenKind.selectKeyword) {
      const query = parseSQLQuery();
      parseExpected(TokenKind.closeParen);

      return {
        kind: "SubqueryScalarExpression",
        query,
      };
    }

    const expr = parseScalarExpression();
    parseExpected(TokenKind.closeParen);
    return expr;
  }

  function parseExistsScalarExpression(): ScalarExpression {
    if (s.getToken() === TokenKind.existsKeyword) {
      s.scan();
      parseExpected(TokenKind.openParen);
      const node: ExistsScalarExpression = {
        kind: "ExistsScalarExpression",
        query: parseSelectClause(),
      };

      parseExpected(TokenKind.closeParen);
      return node;
    }

    return parseConditionalScalarExpression();
  }

  function parseFunctionCallScalarExpression(): ScalarExpression {
    let hadUdf = false;

    if (s.getToken() === TokenKind.udfKeyword) {
      hadUdf = true;
      parseExpected(TokenKind.udfKeyword);
      parseExpected(TokenKind.dot);
    }

    const expr = parsePropertyRefScalarExpression();

    if (hadUdf && expr.kind !== "IdentifierNode") {
      throw new Error("Expected identifier to follow `udf.`");
    }

    if (s.getToken() === TokenKind.openParen) {
      s.scan();
      if (expr.kind !== "IdentifierNode") {
        throw new Error("Can't call a dotted member expression");
      }

      let args: ScalarExpression[];

      if (s.getToken() === TokenKind.closeParen) {
        s.scan();
        args = [];
      } else {
        args = parseScalarExpressionList();
        parseExpected(TokenKind.closeParen);
      }

      return {
        kind: "FunctionCallScalarExpression",
        udf: hadUdf,
        base: expr,
        args: args,
      };
    }

    if (hadUdf) {
      throw new Error("Missing call to udf");
    }

    return expr;
  }

  function parsePropertyRefScalarExpression(): ScalarExpression {
    let expr: IdentifierNode | PropertyRefScalarExpression = parseIdentifier();

    while (s.getToken() === TokenKind.dot) {
      parseExpected(TokenKind.dot);
      expr = {
        kind: "PropertyRefScalarExpression",
        base: expr,
        member: parseIdentifier(),
      };
    }

    return expr;
  }

  function parseObjectCreateScalarExpression() {
    s.scan(); // consume open brace

    const node: ObjectCreateScalarExpression = {
      kind: "ObjectCreateScalarExpression",
      properties: [],
    };

    while (s.getToken() !== TokenKind.closeBrace) {
      const literal = parseLiteralScalarExpression();
      parseExpected(TokenKind.colon);
      node.properties.push({
        key: literal.value,
        value: parseScalarExpression(),
      });

      // allows trailing commas.
      if (s.getToken() === TokenKind.comma) s.scan();
    }

    return node;
  }

  function parseLiteralScalarExpression(): LiteralScalarExpression {
    if (
      s.getToken() !== TokenKind.stringLiteral &&
      s.getToken() !== TokenKind.numericLiteral &&
      s.getToken() !== TokenKind.nullKeyword &&
      s.getToken() !== TokenKind.trueKeyword &&
      s.getToken() !== TokenKind.falseKeyword &&
      s.getToken() !== TokenKind.undefinedKeyword
    ) {
      throw new Error("Expected literal, got " + TokenKind[s.getToken()]);
    }

    const node = {
      kind: "LiteralScalarExpression",
      value: s.getTokenValue() || s.getTokenText(),
    } as const;

    s.scan();

    return node;
  }

  function parseArrayScalarExpression(): ArrayScalarExpression {
    parseExpected(TokenKind.arrayKeyword);
    parseExpected(TokenKind.openParen);

    const query = parseSelectClause();

    parseExpected(TokenKind.closeParen);

    return {
      kind: "ArrayScalarExpression",
      value: query,
    };
  }

  function parseArrayCreateScalarExpression(): ArrayCreateScalarExpression {
    const node: ArrayCreateScalarExpression = {
      kind: "ArrayCreateScalarExpression",
      values: [],
    };
    parseExpected(TokenKind.openBracket);

    if (s.getToken() === TokenKind.closeBracket) {
      s.scan();
      return node;
    }

    node.values = parseScalarExpressionList();

    parseExpected(TokenKind.closeBracket);

    return node;
  }

  function parseScalarExpressionList(): ScalarExpression[] {
    const nodes: ScalarExpression[] = [];

    nodes.push(parseScalarExpression());

    while (s.getToken() === TokenKind.comma) {
      s.scan();
      nodes.push(parseScalarExpression());
    }

    return nodes;
  }

  function parseIdentifier(): IdentifierNode {
    if (s.getToken() !== TokenKind.identifier) {
      throw new Error(
        "Expected identifier, got " +
          TokenKind[s.getToken()] +
          "/" +
          s.getTokenText()
      );
    }

    const node = {
      kind: "IdentifierNode",
      value: s.getTokenText(),
    } as const;

    s.scan();

    return node;
  }

  function parseExpected(t: TokenKind, message?: string): boolean {
    if (s.getToken() === t) {
      s.scan();
      return true;
    }

    throw new Error("Parse error: expected " + TokenKind[t]);
  }
}

function getBinaryOpPrecedence(op: TokenKind) {
  switch (op) {
    case TokenKind.star:
    case TokenKind.slash:
    case TokenKind.percent:
      return 100;
    case TokenKind.plus:
    case TokenKind.minus:
      return 90;
    case TokenKind.greaterThan:
    case TokenKind.greaterThanOrEquals:
    case TokenKind.lessThan:
    case TokenKind.lessThanOrEquals:
      return 80;
    case TokenKind.equals:
    case TokenKind.notEquals:
      return 70;
    case TokenKind.ampersand:
    case TokenKind.pipe:
      return 60;
    case TokenKind.andKeyword:
    case TokenKind.orKeyword:
    case TokenKind.doubleQuestion:
      return 50;
  }

  return -1;
}
