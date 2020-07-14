var antlr4 = require("antlr4");
var util = require("util");
var MyGrammarLexer = require("./sqlLexer").sqlLexer;
var MyGrammarParser = require("./sqlParser").sqlParser;
var MyGrammarListener = require("./sqlListener").sqlListener;

var input = `select * from a join b in x.y[12]["hi"] join c as foo WHERE a.b > 1 group by a, b, c order by a * 2, b * 2 offset 10 limit 2000`;
var d = Date.now();

for (let i = 0; i < 1000; i++) {
  var chars = new antlr4.InputStream(input);
  var lexer = new MyGrammarLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new MyGrammarParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.program();
}
console.log(Date.now() - d);

let indent = 0;

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      return ctx.children.map((child) => {
        if (child.children && child.children.length != 0) {
          indent++;
          let res = child.accept(this);
          indent--;
          return res;
        } else {
          console.log(Array(indent + 1).join("  ") + child.getText());
          return child.getText();
        }
      });
      indent--;
    }
  }
}

//tree.accept(new Visitor());
