import { CharCodes, TokenKind, keywords, binops, QueryNode, SelectStarNode, SelectListNode, SelectValueNode, SelectItemNode, ScalarExpression, ExistsScalarExpression, IdentifierNode, PropertyRefScalarExpression, ObjectCreateScalarExpression, LiteralScalarExpression, ArrayScalarExpression, ArrayCreateScalarExpression } from "./defs";

function isIdStart(ch: number) {
  return (
    (ch >= CharCodes.A && ch <= CharCodes.Z) ||
    (ch >= CharCodes.a && ch <= CharCodes.z)
  );
}

function isIdContinue(ch: number) {
  return isIdStart(ch) || (ch >= CharCodes._0 && ch <= CharCodes._9);
}

function scanner(str: string) {
  let pos = 0, tokenStart = 0;
  const end = str.length;
  let token: TokenKind;
  let tokenValue = '';

  return {
    getToken: () => token,
    getTokenText: () => str.substring(tokenStart, pos),
    getTokenValue: () => tokenValue,
    lookAhead(cb: () => void) {
      const oldPos = pos, oldTokenStart = tokenStart, oldToken = token, oldTokenValue = tokenValue;
      cb();
      pos = oldPos; tokenStart = oldTokenStart, token = oldToken, tokenValue = oldTokenValue;
    },
    scan(): TokenKind {
      tokenStart = pos;
      while (true) {
        if (pos >= end) return token = TokenKind.EOF;

        let ch = str.charCodeAt(tokenStart);
        switch (ch) {
          case CharCodes.space:
          case CharCodes.tab:
          case CharCodes.lineFeed:
          case CharCodes.carriageReturn:
            while (ch === CharCodes.space || ch === CharCodes.tab ||
              ch === CharCodes.lineFeed || ch === CharCodes.carriageReturn) {
              pos++;
              ch = str.charCodeAt(pos);
            }
            tokenStart = pos;

            continue;
          case CharCodes.openParen: pos++; return token = TokenKind.openParen;
          case CharCodes.closeParen: pos++; return token = TokenKind.closeParen;
          case CharCodes.openBracket: pos++; return token = TokenKind.openBracket;
          case CharCodes.closeBracket: pos++; return token = TokenKind.closeBracket;
          case CharCodes.openBrace: pos++; return token = TokenKind.openBrace;
          case CharCodes.closeBrace: pos++; return token = TokenKind.closeBrace;
          case CharCodes.colon: pos++; return token = TokenKind.colon;
          case CharCodes.asterisk: pos++; return token = TokenKind.star;
          case CharCodes.equals: pos++; return token = TokenKind.equals;
          case CharCodes.plus:
            if (isDigit(str.charCodeAt(pos + 1)) || str.charCodeAt(pos + 1) === CharCodes.dot) {
              return scanNumberLiteral();
            }
            pos++;
            return token = TokenKind.plus;
          case CharCodes.minus:
            if (isDigit(str.charCodeAt(pos + 1)) || str.charCodeAt(pos + 1) === CharCodes.dot) {
              return scanNumberLiteral();
            }
            pos++;
            return token = TokenKind.minus;
          case CharCodes.ampersand: pos++; return token = TokenKind.ampersand;
          case CharCodes.bar:
            pos++;
            if (str.charCodeAt(pos) === CharCodes.bar) {
              pos++;
              return token = TokenKind.doublePipe;
            }
            return token = TokenKind.pipe;
          case CharCodes.caret: pos++; return token = TokenKind.caret;
          case CharCodes.slash: pos++; return token = TokenKind.slash;
          case CharCodes.equals: pos++; return token = TokenKind.equals;
          case CharCodes.greaterThan:
            pos++;
            if (str.charCodeAt(pos) === CharCodes.equals) {
              pos++;
              return token = TokenKind.greaterThanOrEquals
            }
            return token = TokenKind.greaterThan
          case CharCodes.lessThan:
            pos++;
            if (str.charCodeAt(pos) === CharCodes.equals) {
              pos++;
              return token = TokenKind.lessThanOrEquals
            }
            return token = TokenKind.lessThan
          case CharCodes.percent: pos++; return token = TokenKind.percent;
          case CharCodes.bang: pos++; return token = TokenKind.bang;
          case CharCodes.tilde: pos++; return token = TokenKind.tilde;
          case CharCodes.comma: pos++; return token = TokenKind.comma;
          case CharCodes.singleQuote:
          case CharCodes.doubleQuote:
            tokenValue = '';
            const quote = ch;
            pos++;

            while (pos < end && str.charCodeAt(pos) !== quote) {
              if (str.charCodeAt(pos) === CharCodes.backslash) {
                if (str.charCodeAt(pos + 1) === quote) {
                  pos += 2
                  tokenValue += String.fromCharCode(quote);
                  continue;
                }
              }
              tokenValue += str[pos];
              pos++;
            }

            // consume the end string
            pos++;
            return token = TokenKind.stringLiteral;
          case CharCodes.dot:
            if (isDigit(str.charCodeAt(pos + 1))) {
              return scanNumberLiteral();
            }
            pos++;
            return token = TokenKind.dot;
          case CharCodes.question:
            pos++;
            if (str.charCodeAt(pos) === CharCodes.question) {
              pos++;

              return token = TokenKind.doubleQuestion;
            }

            return token = TokenKind.question;
          default:
            if (ch >= CharCodes._0 && ch <= CharCodes._9) {
              return scanNumberLiteral();
            } else if (isIdStart(ch)) {
              pos++;
              while (pos < end && isIdContinue(str.charCodeAt(pos))) pos++;
              for (let i = 0; i < keywords.length; i++) {
                if (
                  str.substring(tokenStart, pos).match(
                    new RegExp(
                      "^" + keywords[i][0] + "$",
                      keywords[i][2] ? "" : "i"
                    )
                  )
                ) {
                  return token = keywords[i][1];
                }
              }
              return token = TokenKind.identifier;
            }
            pos++;
            return TokenKind.unknown;
        }
      }
    },
  };

  function isDigit(ch: number) {
    return ch >= CharCodes._0 && ch <= CharCodes._9;
  }

  function scanNumberLiteral(): TokenKind.numericLiteral {
    const startPos = pos;
    if (str.charCodeAt(pos) === CharCodes.plus || str.charCodeAt(pos) === CharCodes.minus) {
      pos++;
    }
    const startChar = str.charCodeAt(pos);

    while (pos < end && str.charCodeAt(pos) >= CharCodes._0 && str.charCodeAt(pos) <= CharCodes._9) {
      pos++;
    }

    if (str.charCodeAt(pos) === CharCodes.dot && startChar !== CharCodes.dot) {
      pos++;
      while (pos < end && str.charCodeAt(pos) >= CharCodes._0 && str.charCodeAt(pos) <= CharCodes._9) {
        pos++;
      }
    }

    if (str.charCodeAt(pos) === CharCodes.e || str.charCodeAt(pos) === CharCodes.E) {
      pos++;

      if (str.charCodeAt(pos) === CharCodes.plus || str.charCodeAt(pos) === CharCodes.minus) {
        pos++;
      }

      while (pos < end && str.charCodeAt(pos) >= CharCodes._0 && str.charCodeAt(pos) <= CharCodes._9) {
        pos++;
      }
    }

    tokenValue = str.substring(startPos, pos);
    token = TokenKind.numericLiteral;

    return token;
  }
}

function parse(q: string) {
  const s = scanner(q);
  s.scan();
  return parseSqlQuery();

  function parseSqlQuery(): QueryNode {
    if (s.getToken() !== TokenKind.selectKeyword) throw new Error("Invalid query - must start with `select`");

    const node: Partial<QueryNode> = {
      kind: 'QueryNode',
      type: 'select',
      distinct: false
    }

    s.scan();

    if (s.getToken() === TokenKind.distinctKeyword) {
      node.distinct = true;
      s.scan();
    }

    if (s.getToken() === TokenKind.topKeyword) {
      s.scan();

      if (s.getToken() !== TokenKind.numericLiteral) {
        throw new Error("The TOP clause requires a number, e.g. `SELECT TOP 10`");
      }

      node.top = Number(s.getTokenText());
    }

    node.selection = parseSelection();

    return node as QueryNode;
  }

  function parseSelection(): SelectStarNode | SelectListNode | SelectValueNode {
    if (s.getToken() === TokenKind.star) {
      s.scan();
      return {
        kind: 'SelectStarNode'
      }
    } else if (s.getToken() === TokenKind.valueKeyword) {
      s.scan();
      return {
        kind: 'SelectValueNode',
        value: parseScalarExpression()
      }
    } else {
      return parseSelectList();
    }
  }

  function parseSelectList(): SelectListNode {
    const node: SelectListNode = {
      kind: 'SelectListNode',
      items: [parseSelectItem()]
    }

    while (s.getToken() === TokenKind.comma) {
      s.scan();
      node.items.push(parseSelectItem())
    }

    return node;
  }

  function parseSelectItem(): SelectItemNode {
    const node: SelectItemNode = {
      kind: 'SelectItemNode',
      value: parseScalarExpression()
    }

    if (s.getToken() === TokenKind.asKeyword) {
      s.scan();
      node.as = parseIdentifier();
    }

    return node;
  }

  function parseScalarExpression(): ScalarExpression {
    return parseInScalarExpression();
  }

  function parseInScalarExpression(): ScalarExpression {
    const expr = parseExistsScalarExpression();
    let inverted = false;
    let isIn = false;

    s.lookAhead(() => {
      if (s.getToken() === TokenKind.notKeyword) s.scan()
      isIn = s.getToken() === TokenKind.inKeyword;
    })

    if (!isIn) return expr;

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
      values: exprs
    }
  }

  function parseExistsScalarExpression(): ScalarExpression {
    if (s.getToken() === TokenKind.existsKeyword) {
      s.scan();
      parseExpected(TokenKind.openParen);
      const node: ExistsScalarExpression = {
        kind: 'ExistsScalarExpression',
        query: parseSqlQuery()
      }

      parseExpected(TokenKind.closeParen);
      return node;
    }

    return parseConditionalScalarExpression();
  }

  function parseConditionalScalarExpression(): ScalarExpression {
    const expr = parseCoalesceScalarExpression();

    if (s.getToken() === TokenKind.question) {
      s.scan();

      return {
        kind: 'ConditionalScalarExpression',
        lhs: expr,
        rhs: parseConditionalScalarExpression()
      }
    }

    return expr;
  }

  function parseBinaryScalarExpression(precedence = 0): ScalarExpression {
    let expr: ScalarExpression = parseBetweenScalarExpression();

    while (true) {
      const opPrecedence = binops.indexOf(s.getToken());
      if (opPrecedence < precedence) {
        break;
      }

      const op = s.getTokenText();
      s.scan()

      expr = {
        kind: "BinaryScalarExpression",
        lhs: expr,
        rhs: parseBinaryScalarExpression(opPrecedence),
        op
      }
    }

    return expr;
  }

  function parseBetweenScalarExpression(): ScalarExpression {
    const expr = parsePrimaryExpression();
    let inverted = false;
    let isBetween = false;

    s.lookAhead(() => {
      if (s.getToken() === TokenKind.notKeyword) s.scan()
      isBetween = s.getToken() === TokenKind.betweenKeyword;
    })

    if (!isBetween) return expr;

    if (s.getToken() === TokenKind.notKeyword) {
      s.scan();
      inverted = true;
    }

    parseExpected(TokenKind.betweenKeyword);
    // seems like we can parse a general scalar expression
    // in this position.
    const low = parseScalarExpression();
    parseExpected(TokenKind.andKeyword);
    const high = parseBetweenScalarExpression();

    return {
      kind: "BetweenScalarExpression",
      inverted,
      high,
      low,
      test: expr
    }
  }

  function parseCoalesceScalarExpression(): ScalarExpression {
    const expr = parseBinaryScalarExpression();

    if (s.getToken() === TokenKind.doubleQuestion) {
      s.scan();

      return {
        kind: 'CoalesceScalarExpression',
        lhs: expr,
        rhs: parseCoalesceScalarExpression()
      }
    }

    return expr;
  }

  function parsePrimaryExpression() {
    switch (s.getToken()) {
      case TokenKind.openBracket: return parseArrayCreateScalarExpression();
      case TokenKind.arrayKeyword: return parseArrayScalarExpression();
      case TokenKind.stringLiteral:
      case TokenKind.numericLiteral:
        return parseLiteralScalarExpression();
      case TokenKind.openBrace:
        return parseObjectCreateScalarExpression();
      default:
        return parseFunctionCallScalarExpression();
    }
  }

  function parseFunctionCallScalarExpression(): ScalarExpression {
    let hadUdf = false;

    if (s.getToken() === TokenKind.udfKeyword) {
      hadUdf = true;
      parseExpected(TokenKind.udfKeyword);
      parseExpected(TokenKind.dot);
    }

    const expr = parsePropertyRefScalarExpression();

    if (hadUdf && expr.kind !== 'IdentifierNode') {
      throw new Error('Expected identifier to follow `udf.`');
    }

    if (s.getToken() === TokenKind.openParen) {
      s.scan();
      if (expr.kind !== 'IdentifierNode') {
        throw new Error("Can't call a dotted member expression");
      }

      let args: ScalarExpression[];

      if (s.getToken() === TokenKind.closeParen) {
        s.scan();
        args = [];
      } else {
        args = parseScalarExpressionList();
        parseExpected(TokenKind.closeParen)
      }

      return {
        kind: "FunctionCallScalarExpression",
        udf: hadUdf,
        base: expr,
        args: args
      }
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
        member: parseIdentifier()
      }
    }

    return expr;
  }

  function parseObjectCreateScalarExpression() {
    s.scan(); // consume open brace

    const node: ObjectCreateScalarExpression = {
      kind: 'ObjectCreateScalarExpression',
      properties: []
    }

    while (s.getToken() !== TokenKind.closeBrace) {
      const literal = parseLiteralScalarExpression();
      parseExpected(TokenKind.colon);
      node.properties.push({
        key: literal.value,
        value: parseScalarExpression()
      })

      // allows trailing commas.
      if (s.getToken() === TokenKind.comma) s.scan();
    }

    return node;
  }



  function parseLiteralScalarExpression(): LiteralScalarExpression {
    if (s.getToken() !== TokenKind.stringLiteral && s.getToken() !== TokenKind.numericLiteral) {
      throw new Error('Expected literal, got ' + TokenKind[s.getToken()]);
    }

    const node = {
      kind: "LiteralScalarExpression",
      value: s.getTokenValue()
    } as const;

    s.scan();

    return node;
  }

  function parseArrayScalarExpression(): ArrayScalarExpression {
    parseExpected(TokenKind.arrayKeyword);
    parseExpected(TokenKind.openParen);

    const query = parseSqlQuery();

    parseExpected(TokenKind.closeParen);

    return {
      kind: "ArrayScalarExpression",
      value: query
    }
  }

  function parseArrayCreateScalarExpression(): ArrayCreateScalarExpression {

    const node: ArrayCreateScalarExpression = {
      kind: "ArrayCreateScalarExpression",
      values: []
    }
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
      throw new Error('Expected identifier, got ' + TokenKind[s.getToken()] + "/" + s.getTokenText());
    }

    const node = {
      kind: "IdentifierNode",
      value: s.getTokenText()
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

const test = `select x + 1 .y`;

console.log(test);
var d = Date.now();

const q = parse(test);

console.log(JSON.stringify(q, null, 4));
console.log(Date.now() - d);
function debugToken(t: TokenKind) {
  console.log(`Token{${TokenKind[t]}}`);
}