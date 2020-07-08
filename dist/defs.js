"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binops = exports.keywords = exports.TokenKind = exports.CharCodes = void 0;
exports.CharCodes = {
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
    lineFeed: 0x0a,
    carriageReturn: 0x0d,
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
    colon: 0x3a
};
var TokenKind;
(function (TokenKind) {
    TokenKind[TokenKind["openParen"] = 0] = "openParen";
    TokenKind[TokenKind["closeParen"] = 1] = "closeParen";
    TokenKind[TokenKind["openBracket"] = 2] = "openBracket";
    TokenKind[TokenKind["closeBracket"] = 3] = "closeBracket";
    TokenKind[TokenKind["openBrace"] = 4] = "openBrace";
    TokenKind[TokenKind["closeBrace"] = 5] = "closeBrace";
    TokenKind[TokenKind["colon"] = 6] = "colon";
    TokenKind[TokenKind["keyword"] = 7] = "keyword";
    TokenKind[TokenKind["identifier"] = 8] = "identifier";
    TokenKind[TokenKind["whitespace"] = 9] = "whitespace";
    TokenKind[TokenKind["star"] = 10] = "star";
    TokenKind[TokenKind["plus"] = 11] = "plus";
    TokenKind[TokenKind["minus"] = 12] = "minus";
    TokenKind[TokenKind["ampersand"] = 13] = "ampersand";
    TokenKind[TokenKind["pipe"] = 14] = "pipe";
    TokenKind[TokenKind["caret"] = 15] = "caret";
    TokenKind[TokenKind["slash"] = 16] = "slash";
    TokenKind[TokenKind["equals"] = 17] = "equals";
    TokenKind[TokenKind["greaterThan"] = 18] = "greaterThan";
    TokenKind[TokenKind["greaterThanOrEquals"] = 19] = "greaterThanOrEquals";
    TokenKind[TokenKind["lessThan"] = 20] = "lessThan";
    TokenKind[TokenKind["lessThanOrEquals"] = 21] = "lessThanOrEquals";
    TokenKind[TokenKind["notEquals"] = 22] = "notEquals";
    TokenKind[TokenKind["doublePipe"] = 23] = "doublePipe";
    TokenKind[TokenKind["percent"] = 24] = "percent";
    TokenKind[TokenKind["bang"] = 25] = "bang";
    TokenKind[TokenKind["tilde"] = 26] = "tilde";
    TokenKind[TokenKind["dot"] = 27] = "dot";
    TokenKind[TokenKind["comma"] = 28] = "comma";
    TokenKind[TokenKind["question"] = 29] = "question";
    TokenKind[TokenKind["doubleQuestion"] = 30] = "doubleQuestion";
    TokenKind[TokenKind["stringLiteral"] = 31] = "stringLiteral";
    TokenKind[TokenKind["numericLiteral"] = 32] = "numericLiteral";
    TokenKind[TokenKind["andKeyword"] = 33] = "andKeyword";
    TokenKind[TokenKind["arrayKeyword"] = 34] = "arrayKeyword";
    TokenKind[TokenKind["asKeyword"] = 35] = "asKeyword";
    TokenKind[TokenKind["ascKeyword"] = 36] = "ascKeyword";
    TokenKind[TokenKind["betweenKeyword"] = 37] = "betweenKeyword";
    TokenKind[TokenKind["byKeyword"] = 38] = "byKeyword";
    TokenKind[TokenKind["descKeyword"] = 39] = "descKeyword";
    TokenKind[TokenKind["distinctKeyword"] = 40] = "distinctKeyword";
    TokenKind[TokenKind["existsKeyword"] = 41] = "existsKeyword";
    TokenKind[TokenKind["falseKeyword"] = 42] = "falseKeyword";
    TokenKind[TokenKind["fromKeyword"] = 43] = "fromKeyword";
    TokenKind[TokenKind["groupKeyword"] = 44] = "groupKeyword";
    TokenKind[TokenKind["inKeyword"] = 45] = "inKeyword";
    TokenKind[TokenKind["joinKeyword"] = 46] = "joinKeyword";
    TokenKind[TokenKind["limitKeyword"] = 47] = "limitKeyword";
    TokenKind[TokenKind["notKeyword"] = 48] = "notKeyword";
    TokenKind[TokenKind["nullKeyword"] = 49] = "nullKeyword";
    TokenKind[TokenKind["offsetKeyword"] = 50] = "offsetKeyword";
    TokenKind[TokenKind["orKeyword"] = 51] = "orKeyword";
    TokenKind[TokenKind["orderKeyword"] = 52] = "orderKeyword";
    TokenKind[TokenKind["selectKeyword"] = 53] = "selectKeyword";
    TokenKind[TokenKind["topKeyword"] = 54] = "topKeyword";
    TokenKind[TokenKind["trueKeyword"] = 55] = "trueKeyword";
    TokenKind[TokenKind["udfKeyword"] = 56] = "udfKeyword";
    TokenKind[TokenKind["undefinedKeyword"] = 57] = "undefinedKeyword";
    TokenKind[TokenKind["valueKeyword"] = 58] = "valueKeyword";
    TokenKind[TokenKind["whereKeyword"] = 59] = "whereKeyword";
    TokenKind[TokenKind["unknown"] = 60] = "unknown";
    TokenKind[TokenKind["EOF"] = 61] = "EOF";
})(TokenKind = exports.TokenKind || (exports.TokenKind = {}));
exports.keywords = [
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
];
exports.binops = [
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
    TokenKind.minus
].reverse(); // higher precedence = higher array index
//# sourceMappingURL=defs.js.map