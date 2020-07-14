export const CharCodes = {
  openParen: 0x28,
  closeParen: 0x29,
  openBracket: 0x5b,
  closeBracket: 0x5d,
  openBrace: 0x7b,
  closeBrace: 0x7d,
  A: 0x41,
  E: 0x45,
  Z: 0x5a,
  a: 0x61,
  e: 0x65,
  z: 0x7a,
  _0: 0x30,
  _1: 0x31,
  _2: 0x32,
  _3: 0x33,
  _4: 0x34,
  _5: 0x35,
  _6: 0x36,
  _7: 0x37,
  _8: 0x38,
  _9: 0x39,
  lineFeed: 0x0a, // \n
  carriageReturn: 0x0d, // \r
  space: 0x20,
  tab: 0x09,
  asterisk: 0x2a,
  plus: 0x2b,
  minus: 0x2d,
  ampersand: 0x26,
  bar: 0x7c,
  caret: 0x5e,
  slash: 0x2f,
  backslash: 0x5c,
  equals: 0x3d,
  greaterThan: 0x3e,
  lessThan: 0x3c,
  percent: 0x25,
  bang: 0x21,
  tilde: 0x7e,
  singleQuote: 0x27,
  doubleQuote: 0x22,
  dot: 0x2e,
  comma: 0x2c,
  question: 0x3f,
  colon: 0x3a,
};

export enum TokenKind {
  openParen,
  closeParen,
  openBracket,
  closeBracket,
  openBrace,
  closeBrace,
  colon,
  keyword,
  identifier,
  whitespace,
  star,
  plus,
  minus,
  ampersand,
  pipe,
  caret,
  slash,
  equals,
  greaterThan,
  greaterThanOrEquals,
  lessThan,
  lessThanOrEquals,
  notEquals,
  doublePipe,
  percent,
  bang,
  tilde,
  dot,
  comma,
  question,
  doubleQuestion,
  stringLiteral,
  numericLiteral,
  andKeyword,
  arrayKeyword,
  asKeyword,
  ascKeyword,
  betweenKeyword,
  byKeyword,
  descKeyword,
  distinctKeyword,
  existsKeyword,
  falseKeyword,
  fromKeyword,
  groupKeyword,
  inKeyword,
  joinKeyword,
  limitKeyword,
  notKeyword,
  nullKeyword,
  offsetKeyword,
  orKeyword,
  orderKeyword,
  selectKeyword,
  topKeyword,
  trueKeyword,
  udfKeyword,
  undefinedKeyword,
  valueKeyword,
  whereKeyword,
  unknown,
  EOF,
}
export const keywords = [
  ["and", TokenKind.andKeyword],
  ["array", TokenKind.arrayKeyword],
  ["as", TokenKind.asKeyword],
  ["asc", TokenKind.ascKeyword],
  ["between", TokenKind.betweenKeyword],
  ["by", TokenKind.byKeyword],
  ["desc", TokenKind.descKeyword],
  ["distinct", TokenKind.distinctKeyword],
  ["exists", TokenKind.existsKeyword],
  ["false", TokenKind.falseKeyword, true],
  ["from", TokenKind.fromKeyword],
  ["group", TokenKind.groupKeyword],
  ["in", TokenKind.inKeyword],
  ["join", TokenKind.joinKeyword],
  ["limit", TokenKind.limitKeyword],
  ["not", TokenKind.notKeyword],
  ["null", TokenKind.nullKeyword, true],
  ["offset", TokenKind.offsetKeyword],
  ["or", TokenKind.orKeyword],
  ["order", TokenKind.orderKeyword],
  ["select", TokenKind.selectKeyword],
  ["top", TokenKind.topKeyword],
  ["true", TokenKind.trueKeyword, true],
  ["udf", TokenKind.udfKeyword],
  ["undefined", TokenKind.undefinedKeyword, true],
  ["value", TokenKind.valueKeyword],
  ["where", TokenKind.whereKeyword],
] as const;

export const binops = [
  TokenKind.plus,
  TokenKind.andKeyword,
  TokenKind.ampersand,
  TokenKind.pipe,
  TokenKind.caret,
  TokenKind.slash,
  TokenKind.equals,
  TokenKind.greaterThan,
  TokenKind.greaterThanOrEquals,
  TokenKind.lessThan,
  TokenKind.lessThanOrEquals,
  TokenKind.percent,
  TokenKind.star,
  TokenKind.notEquals,
  TokenKind.orKeyword,
  TokenKind.doublePipe,
  TokenKind.minus,
].reverse(); // higher precedence = higher array index

export interface SQLQueryNode {
  kind: "SqlQueryNode";
  select: SelectClauseNode;
  from?: FromClauseNode;
  where?: WhereClauseNode;
  groupBy?: GroupByNode;
  orderBy?: OrderByNode;
  offsetLimit?: OffsetLimitNode;
}

export interface GroupByNode {
  kind: "GroupByNode";
  exprs: ScalarExpression[];
}

export interface OrderByNode {
  kind: "OrderByNode";
  items: OrderByItemNode[];
}

export interface OrderByItemNode {
  kind: "OrderByItemNode";
  expr: ScalarExpression;
  order?: "asc" | "desc";
}

export interface OffsetLimitNode {
  kind: "OffsetLimitNode";
  offset: number;
  limit: number;
}

export interface FromClauseNode {
  kind: "FromClauseNode";
  collection: CollectionExpressionNode | JoinExpressionNode;
}

export type CollectionNode =
  | InputPathCollectionNode
  | SubqueryCollectionNode
  | IdentifierNode;

export interface JoinExpressionNode {
  kind: "JoinExpressionNode";
  lhs: JoinExpressionNode | CollectionExpressionNode;
  rhs: CollectionExpressionNode;
}
export interface CollectionExpressionNode {
  kind: "CollectionExpressionNode";
  collection: CollectionNode;
  in?: CollectionNode;
  as?: IdentifierNode;
}

export interface AliasedCollectionExpressionNode {
  kind: "AliasedCollectionExpressionNode";
  as: IdentifierNode;
}

export interface ArrayIteratorCollectionExpressionNode {
  kind: "ArrayIteratorCollectionExpressionNode";
  in: CollectionNode;
}

export interface SubqueryCollectionNode {
  kind: "SubqueryCollectionNode";
  query: SQLQueryNode;
}
export interface InputPathCollectionNode {
  kind: "InputPathCollectionNode";
  base: InputPathCollectionNode | IdentifierNode;
  member: IdentifierNode | LiteralScalarExpression;
}

export interface CollectionExpressionNode {
  kind: "CollectionExpressionNode";
}

export interface SelectClauseNode {
  kind: "SelectClauseNode";
  type: "select";
  distinct: boolean;
  top?: number;
  selection: SelectStarNode | SelectValueNode | SelectListNode;
}

export interface WhereClauseNode {
  kind: "WhereClauseNode";
  expr: ScalarExpression;
}

export interface SelectStarNode {
  kind: "SelectStarNode";
}

export interface SelectValueNode {
  kind: "SelectValueNode";
  value: ScalarExpression;
}

export interface SelectListNode {
  kind: "SelectListNode";
  items: SelectItemNode[];
}

export interface SelectItemNode {
  kind: "SelectItemNode";
  value: ScalarExpression;
  as?: IdentifierNode;
}

export interface IdentifierNode {
  kind: "IdentifierNode";
  value: string;
}

export interface PropertyRefScalarExpression {
  kind: "PropertyRefScalarExpression";
  base: ScalarExpression;
  member: ScalarExpression;
}

export interface ArrayScalarExpression {
  kind: "ArrayScalarExpression";
  value: SelectClauseNode;
}

export type ScalarExpression =
  | ArrayCreateScalarExpression
  | ArrayScalarExpression
  | LiteralScalarExpression
  | PropertyRefScalarExpression
  | BetweenScalarExpression
  | InScalarExpression
  | BinaryScalarExpression
  | CoalesceScalarExpression
  | ConditionalScalarExpression
  | ObjectCreateScalarExpression
  | IdentifierNode
  | ExistsScalarExpression
  | FunctionCallScalarExpression
  | UnaryScalarExpression
  | SubqueryScalarExpression;

export interface FunctionCallScalarExpression {
  kind: "FunctionCallScalarExpression";
  udf: boolean;
  base: IdentifierNode;
  args: ScalarExpression[];
}

export interface SubqueryScalarExpression {
  kind: "SubqueryScalarExpression";
  query: SQLQueryNode;
}

export interface ExistsScalarExpression {
  kind: "ExistsScalarExpression";
  query: SelectClauseNode;
}

export interface ObjectCreateScalarExpression {
  kind: "ObjectCreateScalarExpression";
  properties: { key: string; value: ScalarExpression }[];
}
export interface CoalesceScalarExpression {
  kind: "CoalesceScalarExpression";
  lhs: ScalarExpression;
  rhs: ScalarExpression;
}

export interface ConditionalScalarExpression {
  kind: "ConditionalScalarExpression";
  test: ScalarExpression;
  consequent: ScalarExpression;
  alternate: ScalarExpression;
}

export interface BinaryScalarExpression {
  kind: "BinaryScalarExpression";
  lhs: ScalarExpression;
  rhs: ScalarExpression;
  op: string;
}

export interface InScalarExpression {
  kind: "InScalarExpression";
  inverted: boolean;
  test: ScalarExpression;
  values: ScalarExpression[];
}
export interface BetweenScalarExpression {
  kind: "BetweenScalarExpression";
  inverted: boolean;
  test: ScalarExpression;
  low: ScalarExpression;
  high: ScalarExpression;
}
export interface ArrayCreateScalarExpression {
  kind: "ArrayCreateScalarExpression";
  values: ScalarExpression[];
}

export interface LiteralScalarExpression {
  kind: "LiteralScalarExpression";
  value: string;
}

export interface UnaryScalarExpression {
  kind: "UnaryScalarExpression";
  operand: ScalarExpression;
  op: string;
}
