"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defs_1 = require("./defs");
function isIdStart(ch) {
    return ((ch >= defs_1.CharCodes.A && ch <= defs_1.CharCodes.Z) ||
        (ch >= defs_1.CharCodes.a && ch <= defs_1.CharCodes.z));
}
function isIdContinue(ch) {
    return isIdStart(ch) || (ch >= defs_1.CharCodes._0 && ch <= defs_1.CharCodes._9);
}
function scanner(str) {
    var pos = 0, tokenStart = 0;
    var end = str.length;
    var token;
    var tokenValue = '';
    return {
        getToken: function () { return token; },
        getTokenText: function () { return str.substring(tokenStart, pos); },
        getTokenValue: function () { return tokenValue; },
        lookAhead: function (cb) {
            var oldPos = pos, oldTokenStart = tokenStart, oldToken = token, oldTokenValue = tokenValue;
            cb();
            pos = oldPos;
            tokenStart = oldTokenStart, token = oldToken, tokenValue = oldTokenValue;
        },
        scan: function () {
            tokenStart = pos;
            while (true) {
                if (pos >= end)
                    return token = defs_1.TokenKind.EOF;
                var ch = str.charCodeAt(tokenStart);
                switch (ch) {
                    case defs_1.CharCodes.space:
                    case defs_1.CharCodes.tab:
                    case defs_1.CharCodes.lineFeed:
                    case defs_1.CharCodes.carriageReturn:
                        while (ch === defs_1.CharCodes.space || ch === defs_1.CharCodes.tab ||
                            ch === defs_1.CharCodes.lineFeed || ch === defs_1.CharCodes.carriageReturn) {
                            pos++;
                            ch = str.charCodeAt(pos);
                        }
                        tokenStart = pos;
                        continue;
                    case defs_1.CharCodes.openParen:
                        pos++;
                        return token = defs_1.TokenKind.openParen;
                    case defs_1.CharCodes.closeParen:
                        pos++;
                        return token = defs_1.TokenKind.closeParen;
                    case defs_1.CharCodes.openBracket:
                        pos++;
                        return token = defs_1.TokenKind.openBracket;
                    case defs_1.CharCodes.closeBracket:
                        pos++;
                        return token = defs_1.TokenKind.closeBracket;
                    case defs_1.CharCodes.openBrace:
                        pos++;
                        return token = defs_1.TokenKind.openBrace;
                    case defs_1.CharCodes.closeBrace:
                        pos++;
                        return token = defs_1.TokenKind.closeBrace;
                    case defs_1.CharCodes.colon:
                        pos++;
                        return token = defs_1.TokenKind.colon;
                    case defs_1.CharCodes.asterisk:
                        pos++;
                        return token = defs_1.TokenKind.star;
                    case defs_1.CharCodes.equals:
                        pos++;
                        return token = defs_1.TokenKind.equals;
                    case defs_1.CharCodes.plus:
                        if (isDigit(str.charCodeAt(pos + 1)) || str.charCodeAt(pos + 1) === defs_1.CharCodes.dot) {
                            return scanNumberLiteral();
                        }
                        pos++;
                        return token = defs_1.TokenKind.plus;
                    case defs_1.CharCodes.minus:
                        if (isDigit(str.charCodeAt(pos + 1)) || str.charCodeAt(pos + 1) === defs_1.CharCodes.dot) {
                            return scanNumberLiteral();
                        }
                        pos++;
                        return token = defs_1.TokenKind.minus;
                    case defs_1.CharCodes.ampersand:
                        pos++;
                        return token = defs_1.TokenKind.ampersand;
                    case defs_1.CharCodes.bar:
                        pos++;
                        if (str.charCodeAt(pos) === defs_1.CharCodes.bar) {
                            pos++;
                            return token = defs_1.TokenKind.doublePipe;
                        }
                        return token = defs_1.TokenKind.pipe;
                    case defs_1.CharCodes.caret:
                        pos++;
                        return token = defs_1.TokenKind.caret;
                    case defs_1.CharCodes.slash:
                        pos++;
                        return token = defs_1.TokenKind.slash;
                    case defs_1.CharCodes.equals:
                        pos++;
                        return token = defs_1.TokenKind.equals;
                    case defs_1.CharCodes.greaterThan:
                        pos++;
                        if (str.charCodeAt(pos) === defs_1.CharCodes.equals) {
                            pos++;
                            return token = defs_1.TokenKind.greaterThanOrEquals;
                        }
                        return token = defs_1.TokenKind.greaterThan;
                    case defs_1.CharCodes.lessThan:
                        pos++;
                        if (str.charCodeAt(pos) === defs_1.CharCodes.equals) {
                            pos++;
                            return token = defs_1.TokenKind.lessThanOrEquals;
                        }
                        return token = defs_1.TokenKind.lessThan;
                    case defs_1.CharCodes.percent:
                        pos++;
                        return token = defs_1.TokenKind.percent;
                    case defs_1.CharCodes.bang:
                        pos++;
                        return token = defs_1.TokenKind.bang;
                    case defs_1.CharCodes.tilde:
                        pos++;
                        return token = defs_1.TokenKind.tilde;
                    case defs_1.CharCodes.comma:
                        pos++;
                        return token = defs_1.TokenKind.comma;
                    case defs_1.CharCodes.singleQuote:
                    case defs_1.CharCodes.doubleQuote:
                        tokenValue = '';
                        var quote = ch;
                        pos++;
                        while (pos < end && str.charCodeAt(pos) !== quote) {
                            if (str.charCodeAt(pos) === defs_1.CharCodes.backslash) {
                                if (str.charCodeAt(pos + 1) === quote) {
                                    pos += 2;
                                    tokenValue += String.fromCharCode(quote);
                                    continue;
                                }
                            }
                            tokenValue += str[pos];
                            pos++;
                        }
                        // consume the end string
                        pos++;
                        return token = defs_1.TokenKind.stringLiteral;
                    case defs_1.CharCodes.dot:
                        if (isDigit(str.charCodeAt(pos + 1))) {
                            return scanNumberLiteral();
                        }
                        pos++;
                        return token = defs_1.TokenKind.dot;
                    case defs_1.CharCodes.question:
                        pos++;
                        if (str.charCodeAt(pos) === defs_1.CharCodes.question) {
                            pos++;
                            return token = defs_1.TokenKind.doubleQuestion;
                        }
                        return token = defs_1.TokenKind.question;
                    default:
                        if (ch >= defs_1.CharCodes._0 && ch <= defs_1.CharCodes._9) {
                            return scanNumberLiteral();
                        }
                        else if (isIdStart(ch)) {
                            pos++;
                            while (pos < end && isIdContinue(str.charCodeAt(pos)))
                                pos++;
                            for (var i = 0; i < defs_1.keywords.length; i++) {
                                if (str.substring(tokenStart, pos).match(new RegExp("^" + defs_1.keywords[i][0] + "$", defs_1.keywords[i][2] ? "" : "i"))) {
                                    return token = defs_1.keywords[i][1];
                                }
                            }
                            return token = defs_1.TokenKind.identifier;
                        }
                        pos++;
                        return defs_1.TokenKind.unknown;
                }
            }
        },
    };
    function isDigit(ch) {
        return ch >= defs_1.CharCodes._0 && ch <= defs_1.CharCodes._9;
    }
    function scanNumberLiteral() {
        var startPos = pos;
        if (str.charCodeAt(pos) === defs_1.CharCodes.plus || str.charCodeAt(pos) === defs_1.CharCodes.minus) {
            pos++;
        }
        var startChar = str.charCodeAt(pos);
        while (pos < end && str.charCodeAt(pos) >= defs_1.CharCodes._0 && str.charCodeAt(pos) <= defs_1.CharCodes._9) {
            pos++;
        }
        if (str.charCodeAt(pos) === defs_1.CharCodes.dot && startChar !== defs_1.CharCodes.dot) {
            pos++;
            while (pos < end && str.charCodeAt(pos) >= defs_1.CharCodes._0 && str.charCodeAt(pos) <= defs_1.CharCodes._9) {
                pos++;
            }
        }
        if (str.charCodeAt(pos) === defs_1.CharCodes.e || str.charCodeAt(pos) === defs_1.CharCodes.E) {
            pos++;
            if (str.charCodeAt(pos) === defs_1.CharCodes.plus || str.charCodeAt(pos) === defs_1.CharCodes.minus) {
                pos++;
            }
            while (pos < end && str.charCodeAt(pos) >= defs_1.CharCodes._0 && str.charCodeAt(pos) <= defs_1.CharCodes._9) {
                pos++;
            }
        }
        tokenValue = str.substring(startPos, pos);
        token = defs_1.TokenKind.numericLiteral;
        return token;
    }
}
function parse(q) {
    var s = scanner(q);
    s.scan();
    return parseSqlQuery();
    function parseSqlQuery() {
        if (s.getToken() !== defs_1.TokenKind.selectKeyword)
            throw new Error("Invalid query - must start with `select`");
        var node = {
            kind: 'QueryNode',
            type: 'select',
            distinct: false
        };
        s.scan();
        if (s.getToken() === defs_1.TokenKind.distinctKeyword) {
            node.distinct = true;
            s.scan();
        }
        if (s.getToken() === defs_1.TokenKind.topKeyword) {
            s.scan();
            if (s.getToken() !== defs_1.TokenKind.numericLiteral) {
                throw new Error("The TOP clause requires a number, e.g. `SELECT TOP 10`");
            }
            node.top = Number(s.getTokenText());
        }
        node.selection = parseSelection();
        return node;
    }
    function parseSelection() {
        if (s.getToken() === defs_1.TokenKind.star) {
            s.scan();
            return {
                kind: 'SelectStarNode'
            };
        }
        else if (s.getToken() === defs_1.TokenKind.valueKeyword) {
            s.scan();
            return {
                kind: 'SelectValueNode',
                value: parseScalarExpression()
            };
        }
        else {
            return parseSelectList();
        }
    }
    function parseSelectList() {
        var node = {
            kind: 'SelectListNode',
            items: [parseSelectItem()]
        };
        while (s.getToken() === defs_1.TokenKind.comma) {
            s.scan();
            node.items.push(parseSelectItem());
        }
        return node;
    }
    function parseSelectItem() {
        var node = {
            kind: 'SelectItemNode',
            value: parseScalarExpression()
        };
        if (s.getToken() === defs_1.TokenKind.asKeyword) {
            s.scan();
            node.as = parseIdentifier();
        }
        return node;
    }
    function parseScalarExpression() {
        return parseInScalarExpression();
    }
    function parseInScalarExpression() {
        var expr = parseExistsScalarExpression();
        var inverted = false;
        var isIn = false;
        s.lookAhead(function () {
            if (s.getToken() === defs_1.TokenKind.notKeyword)
                s.scan();
            isIn = s.getToken() === defs_1.TokenKind.inKeyword;
        });
        if (!isIn)
            return expr;
        if (s.getToken() === defs_1.TokenKind.notKeyword) {
            s.scan();
            inverted = true;
        }
        parseExpected(defs_1.TokenKind.inKeyword);
        parseExpected(defs_1.TokenKind.openParen);
        var exprs = parseScalarExpressionList();
        parseExpected(defs_1.TokenKind.closeParen);
        return {
            kind: "InScalarExpression",
            inverted: inverted,
            test: expr,
            values: exprs
        };
    }
    function parseExistsScalarExpression() {
        if (s.getToken() === defs_1.TokenKind.existsKeyword) {
            s.scan();
            parseExpected(defs_1.TokenKind.openParen);
            var node = {
                kind: 'ExistsScalarExpression',
                query: parseSqlQuery()
            };
            parseExpected(defs_1.TokenKind.closeParen);
            return node;
        }
        return parseConditionalScalarExpression();
    }
    function parseConditionalScalarExpression() {
        var expr = parseCoalesceScalarExpression();
        if (s.getToken() === defs_1.TokenKind.question) {
            s.scan();
            return {
                kind: 'ConditionalScalarExpression',
                lhs: expr,
                rhs: parseConditionalScalarExpression()
            };
        }
        return expr;
    }
    function parseBinaryScalarExpression(precedence) {
        if (precedence === void 0) { precedence = 0; }
        var expr = parseBetweenScalarExpression();
        while (true) {
            var opPrecedence = defs_1.binops.indexOf(s.getToken());
            if (opPrecedence < precedence) {
                break;
            }
            var op = s.getTokenText();
            s.scan();
            expr = {
                kind: "BinaryScalarExpression",
                lhs: expr,
                rhs: parseBinaryScalarExpression(opPrecedence),
                op: op
            };
        }
        return expr;
    }
    function parseBetweenScalarExpression() {
        var expr = parsePrimaryExpression();
        var inverted = false;
        var isBetween = false;
        s.lookAhead(function () {
            if (s.getToken() === defs_1.TokenKind.notKeyword)
                s.scan();
            isBetween = s.getToken() === defs_1.TokenKind.betweenKeyword;
        });
        if (!isBetween)
            return expr;
        if (s.getToken() === defs_1.TokenKind.notKeyword) {
            s.scan();
            inverted = true;
        }
        parseExpected(defs_1.TokenKind.betweenKeyword);
        // seems like we can parse a general scalar expression
        // in this position.
        var low = parseScalarExpression();
        parseExpected(defs_1.TokenKind.andKeyword);
        var high = parseBetweenScalarExpression();
        return {
            kind: "BetweenScalarExpression",
            inverted: inverted,
            high: high,
            low: low,
            test: expr
        };
    }
    function parseCoalesceScalarExpression() {
        var expr = parseBinaryScalarExpression();
        if (s.getToken() === defs_1.TokenKind.doubleQuestion) {
            s.scan();
            return {
                kind: 'CoalesceScalarExpression',
                lhs: expr,
                rhs: parseCoalesceScalarExpression()
            };
        }
        return expr;
    }
    function parsePrimaryExpression() {
        switch (s.getToken()) {
            case defs_1.TokenKind.openBracket: return parseArrayCreateScalarExpression();
            case defs_1.TokenKind.arrayKeyword: return parseArrayScalarExpression();
            case defs_1.TokenKind.stringLiteral:
            case defs_1.TokenKind.numericLiteral:
                return parseLiteralScalarExpression();
            case defs_1.TokenKind.openBrace:
                return parseObjectCreateScalarExpression();
            default:
                return parseFunctionCallScalarExpression();
        }
    }
    function parseFunctionCallScalarExpression() {
        var hadUdf = false;
        if (s.getToken() === defs_1.TokenKind.udfKeyword) {
            hadUdf = true;
            parseExpected(defs_1.TokenKind.udfKeyword);
            parseExpected(defs_1.TokenKind.dot);
        }
        var expr = parsePropertyRefScalarExpression();
        if (hadUdf && expr.kind !== 'IdentifierNode') {
            throw new Error('Expected identifier to follow `udf.`');
        }
        if (s.getToken() === defs_1.TokenKind.openParen) {
            s.scan();
            if (expr.kind !== 'IdentifierNode') {
                throw new Error("Can't call a dotted member expression");
            }
            var args = parseScalarExpressionList();
            parseExpected(defs_1.TokenKind.closeParen);
            return {
                kind: "FunctionCallScalarExpression",
                udf: hadUdf,
                base: expr,
                args: args
            };
        }
        if (hadUdf) {
            throw new Error("Missing call to udf");
        }
        return expr;
    }
    function parsePropertyRefScalarExpression() {
        var expr = parseIdentifier();
        if (s.getToken() === defs_1.TokenKind.dot) {
            parseExpected(defs_1.TokenKind.dot);
            return {
                kind: "PropertyRefScalarExpression",
                base: expr,
                member: parseIdentifier()
            };
        }
        return expr;
    }
    function parseObjectCreateScalarExpression() {
        s.scan(); // consume open brace
        var node = {
            kind: 'ObjectCreateScalarExpression',
            properties: []
        };
        while (s.getToken() !== defs_1.TokenKind.closeBrace) {
            var literal = parseLiteralScalarExpression();
            parseExpected(defs_1.TokenKind.colon);
            node.properties.push({
                key: literal.value,
                value: parseScalarExpression()
            });
            // allows trailing commas.
            if (s.getToken() === defs_1.TokenKind.comma)
                s.scan();
        }
        return node;
    }
    function parseLiteralScalarExpression() {
        if (s.getToken() !== defs_1.TokenKind.stringLiteral && s.getToken() !== defs_1.TokenKind.numericLiteral) {
            throw new Error('Expected literal, got ' + defs_1.TokenKind[s.getToken()]);
        }
        var node = {
            kind: "LiteralScalarExpression",
            value: s.getTokenValue()
        };
        s.scan();
        return node;
    }
    function parseArrayScalarExpression() {
        parseExpected(defs_1.TokenKind.arrayKeyword);
        parseExpected(defs_1.TokenKind.openParen);
        var query = parseSqlQuery();
        parseExpected(defs_1.TokenKind.closeParen);
        return {
            kind: "ArrayScalarExpression",
            value: query
        };
    }
    function parseArrayCreateScalarExpression() {
        var node = {
            kind: "ArrayCreateScalarExpression",
            values: []
        };
        parseExpected(defs_1.TokenKind.openBracket);
        if (s.getToken() === defs_1.TokenKind.closeBracket) {
            s.scan();
            return node;
        }
        node.values = parseScalarExpressionList();
        parseExpected(defs_1.TokenKind.closeBracket);
        return node;
    }
    function parseScalarExpressionList() {
        var nodes = [];
        nodes.push(parseScalarExpression());
        while (s.getToken() === defs_1.TokenKind.comma) {
            s.scan();
            nodes.push(parseScalarExpression());
        }
        return nodes;
    }
    function parseIdentifier() {
        if (s.getToken() !== defs_1.TokenKind.identifier) {
            throw new Error('Expected identifier, got ' + defs_1.TokenKind[s.getToken()] + "/" + s.getTokenText());
        }
        var node = {
            kind: "IdentifierNode",
            value: s.getTokenText()
        };
        s.scan();
        return node;
    }
    function parseExpected(t, message) {
        if (s.getToken() === t) {
            s.scan();
            return true;
        }
        throw new Error("Parse error: expected " + defs_1.TokenKind[t]);
    }
}
var test = "select udf.foo()";
console.log(test);
var d = Date.now();
var q = parse(test);
console.log(JSON.stringify(q, null, 4));
console.log(Date.now() - d);
function debugToken(t) {
    console.log("Token{" + defs_1.TokenKind[t] + "}");
}
//# sourceMappingURL=index.js.map