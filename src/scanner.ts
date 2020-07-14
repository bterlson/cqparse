import { CharCodes, TokenKind, keywords } from "./defs";

function isIdStart(ch: number) {
  return (
    (ch >= CharCodes.A && ch <= CharCodes.Z) ||
    (ch >= CharCodes.a && ch <= CharCodes.z)
  );
}

function isIdContinue(ch: number) {
  return isIdStart(ch) || (ch >= CharCodes._0 && ch <= CharCodes._9);
}

export function scanner(str: string) {
  let pos = 0,
    tokenStart = 0;
  const end = str.length;
  let token: TokenKind;
  let tokenValue = "";

  return {
    getToken: () => token,
    getTokenText: () => str.substring(tokenStart, pos),
    getTokenValue: () => tokenValue,
    lookAhead(cb: () => void) {
      const oldPos = pos,
        oldTokenStart = tokenStart,
        oldToken = token,
        oldTokenValue = tokenValue;
      cb();
      pos = oldPos;
      (tokenStart = oldTokenStart),
        (token = oldToken),
        (tokenValue = oldTokenValue);
    },
    scan(): TokenKind {
      tokenStart = pos;
      while (true) {
        if (pos >= end) return (token = TokenKind.EOF);

        let ch = str.charCodeAt(tokenStart);
        switch (ch) {
          case CharCodes.space:
          case CharCodes.tab:
          case CharCodes.lineFeed:
          case CharCodes.carriageReturn:
            while (
              ch === CharCodes.space ||
              ch === CharCodes.tab ||
              ch === CharCodes.lineFeed ||
              ch === CharCodes.carriageReturn
            ) {
              pos++;
              ch = str.charCodeAt(pos);
            }
            tokenStart = pos;

            continue;
          case CharCodes.openParen:
            pos++;
            return (token = TokenKind.openParen);
          case CharCodes.closeParen:
            pos++;
            return (token = TokenKind.closeParen);
          case CharCodes.openBracket:
            pos++;
            return (token = TokenKind.openBracket);
          case CharCodes.closeBracket:
            pos++;
            return (token = TokenKind.closeBracket);
          case CharCodes.openBrace:
            pos++;
            return (token = TokenKind.openBrace);
          case CharCodes.closeBrace:
            pos++;
            return (token = TokenKind.closeBrace);
          case CharCodes.colon:
            pos++;
            return (token = TokenKind.colon);
          case CharCodes.asterisk:
            pos++;
            return (token = TokenKind.star);
          case CharCodes.equals:
            pos++;
            return (token = TokenKind.equals);
          case CharCodes.plus:
            if (
              isDigit(str.charCodeAt(pos + 1)) ||
              str.charCodeAt(pos + 1) === CharCodes.dot
            ) {
              return scanNumberLiteral();
            }
            pos++;
            return (token = TokenKind.plus);
          case CharCodes.minus:
            if (
              isDigit(str.charCodeAt(pos + 1)) ||
              str.charCodeAt(pos + 1) === CharCodes.dot
            ) {
              return scanNumberLiteral();
            }
            pos++;
            return (token = TokenKind.minus);
          case CharCodes.ampersand:
            pos++;
            return (token = TokenKind.ampersand);
          case CharCodes.bar:
            pos++;
            if (str.charCodeAt(pos) === CharCodes.bar) {
              pos++;
              return (token = TokenKind.doublePipe);
            }
            return (token = TokenKind.pipe);
          case CharCodes.caret:
            pos++;
            return (token = TokenKind.caret);
          case CharCodes.slash:
            pos++;
            return (token = TokenKind.slash);
          case CharCodes.equals:
            pos++;
            return (token = TokenKind.equals);
          case CharCodes.greaterThan:
            pos++;
            if (str.charCodeAt(pos) === CharCodes.equals) {
              pos++;
              return (token = TokenKind.greaterThanOrEquals);
            }
            return (token = TokenKind.greaterThan);
          case CharCodes.lessThan:
            pos++;
            if (str.charCodeAt(pos) === CharCodes.equals) {
              pos++;
              return (token = TokenKind.lessThanOrEquals);
            }
            return (token = TokenKind.lessThan);
          case CharCodes.percent:
            pos++;
            return (token = TokenKind.percent);
          case CharCodes.bang:
            pos++;
            if (str.charCodeAt(pos) === CharCodes.equals) {
              pos++;
              return (token = TokenKind.notEquals);
            }
            return (token = TokenKind.bang);
          case CharCodes.tilde:
            pos++;
            return (token = TokenKind.tilde);
          case CharCodes.comma:
            pos++;
            return (token = TokenKind.comma);
          case CharCodes.singleQuote:
          case CharCodes.doubleQuote:
            tokenValue = "";
            const quote = ch;
            pos++;

            while (pos < end && str.charCodeAt(pos) !== quote) {
              if (str.charCodeAt(pos) === CharCodes.backslash) {
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
            return (token = TokenKind.stringLiteral);
          case CharCodes.dot:
            if (isDigit(str.charCodeAt(pos + 1))) {
              return scanNumberLiteral();
            }
            pos++;
            return (token = TokenKind.dot);
          case CharCodes.question:
            pos++;
            if (str.charCodeAt(pos) === CharCodes.question) {
              pos++;

              return (token = TokenKind.doubleQuestion);
            }

            return (token = TokenKind.question);
          default:
            if (ch >= CharCodes._0 && ch <= CharCodes._9) {
              return scanNumberLiteral();
            } else if (isIdStart(ch)) {
              pos++;
              while (pos < end && isIdContinue(str.charCodeAt(pos))) pos++;
              for (let i = 0; i < keywords.length; i++) {
                if (
                  str
                    .substring(tokenStart, pos)
                    .match(
                      new RegExp(
                        "^" + keywords[i][0] + "$",
                        keywords[i][2] ? "" : "i"
                      )
                    )
                ) {
                  return (token = keywords[i][1]);
                }
              }
              return (token = TokenKind.identifier);
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
    if (
      str.charCodeAt(pos) === CharCodes.plus ||
      str.charCodeAt(pos) === CharCodes.minus
    ) {
      pos++;
    }
    const startChar = str.charCodeAt(pos);

    while (
      pos < end &&
      str.charCodeAt(pos) >= CharCodes._0 &&
      str.charCodeAt(pos) <= CharCodes._9
    ) {
      pos++;
    }

    if (str.charCodeAt(pos) === CharCodes.dot && startChar !== CharCodes.dot) {
      pos++;
      while (
        pos < end &&
        str.charCodeAt(pos) >= CharCodes._0 &&
        str.charCodeAt(pos) <= CharCodes._9
      ) {
        pos++;
      }
    }

    if (
      str.charCodeAt(pos) === CharCodes.e ||
      str.charCodeAt(pos) === CharCodes.E
    ) {
      pos++;

      if (
        str.charCodeAt(pos) === CharCodes.plus ||
        str.charCodeAt(pos) === CharCodes.minus
      ) {
        pos++;
      }

      while (
        pos < end &&
        str.charCodeAt(pos) >= CharCodes._0 &&
        str.charCodeAt(pos) <= CharCodes._9
      ) {
        pos++;
      }
    }

    tokenValue = str.substring(startPos, pos);
    token = TokenKind.numericLiteral;

    return token;
  }
}
