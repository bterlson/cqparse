// Generated from .\sql.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sqlListener = require('./sqlListener').sqlListener;
var grammarFileName = "sql.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003<\u0136\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003B",
    "\n\u0003\u0003\u0003\u0005\u0003E\n\u0003\u0003\u0003\u0005\u0003H\n",
    "\u0003\u0003\u0003\u0005\u0003K\n\u0003\u0003\u0003\u0005\u0003N\n\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004R\n\u0004\u0003\u0004\u0005\u0004",
    "U\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006_\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t",
    "i\n\t\f\t\u000e\tl\u000b\t\u0003\n\u0003\n\u0003\n\u0005\nq\n\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\fz\n\f\u0003\f\u0003\f\u0003\f\u0005\f\u007f\n\f\u0003\f\u0003\f\u0003",
    "\f\u0007\f\u0084\n\f\f\f\u000e\f\u0087\u000b\f\u0003\r\u0003\r\u0005",
    "\r\u008b\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u0091\n\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007",
    "\u000e\u009f\n\u000e\f\u000e\u000e\u000e\u00a2\u000b\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0007\u0012\u00b2\n\u0012\f\u0012\u000e\u0012\u00b5\u000b",
    "\u0012\u0003\u0013\u0003\u0013\u0005\u0013\u00b9\n\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0005\u0018\u00c9\n\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u00d8",
    "\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u00dd\n\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u00e3\n",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u00ee\n\u0018",
    "\u0003\u0018\u0003\u0018\u0005\u0018\u00f2\n\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0005\u0018\u0108\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0117\n",
    "\u0018\f\u0018\u000e\u0018\u011a\u000b\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0007\u0019\u011f\n\u0019\f\u0019\u000e\u0019\u0122\u000b",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0007\u001c\u012b\n\u001c\f\u001c\u000e\u001c\u012e",
    "\u000b\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0002\u0005\u0016\u001a.\u001f\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:\u0002\u0006\u0004\u0002!!$$\u0006\u0002\u0003\u0003\u000f",
    "\u001c\u001e\u001e00\u0005\u0002\u000f\u000f\u001c\u001d--\u0007\u0002",
    "\'\'..4466:;\u0002\u0144\u0002<\u0003\u0002\u0002\u0002\u0004?\u0003",
    "\u0002\u0002\u0002\u0006O\u0003\u0002\u0002\u0002\bX\u0003\u0002\u0002",
    "\u0002\n^\u0003\u0002\u0002\u0002\f`\u0003\u0002\u0002\u0002\u000eb",
    "\u0003\u0002\u0002\u0002\u0010e\u0003\u0002\u0002\u0002\u0012m\u0003",
    "\u0002\u0002\u0002\u0014r\u0003\u0002\u0002\u0002\u0016~\u0003\u0002",
    "\u0002\u0002\u0018\u0090\u0003\u0002\u0002\u0002\u001a\u0092\u0003\u0002",
    "\u0002\u0002\u001c\u00a3\u0003\u0002\u0002\u0002\u001e\u00a6\u0003\u0002",
    "\u0002\u0002 \u00aa\u0003\u0002\u0002\u0002\"\u00ae\u0003\u0002\u0002",
    "\u0002$\u00b6\u0003\u0002\u0002\u0002&\u00ba\u0003\u0002\u0002\u0002",
    "(\u00bc\u0003\u0002\u0002\u0002*\u00c1\u0003\u0002\u0002\u0002,\u00c3",
    "\u0003\u0002\u0002\u0002.\u00ed\u0003\u0002\u0002\u00020\u011b\u0003",
    "\u0002\u0002\u00022\u0123\u0003\u0002\u0002\u00024\u0125\u0003\u0002",
    "\u0002\u00026\u0127\u0003\u0002\u0002\u00028\u012f\u0003\u0002\u0002",
    "\u0002:\u0133\u0003\u0002\u0002\u0002<=\u0005\u0004\u0003\u0002=>\u0007",
    "\u0002\u0002\u0003>\u0003\u0003\u0002\u0002\u0002?A\u0005\u0006\u0004",
    "\u0002@B\u0005\u0014\u000b\u0002A@\u0003\u0002\u0002\u0002AB\u0003\u0002",
    "\u0002\u0002BD\u0003\u0002\u0002\u0002CE\u0005\u001c\u000f\u0002DC\u0003",
    "\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EG\u0003\u0002\u0002\u0002",
    "FH\u0005\u001e\u0010\u0002GF\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002",
    "\u0002HJ\u0003\u0002\u0002\u0002IK\u0005 \u0011\u0002JI\u0003\u0002",
    "\u0002\u0002JK\u0003\u0002\u0002\u0002KM\u0003\u0002\u0002\u0002LN\u0005",
    "(\u0015\u0002ML\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002N\u0005",
    "\u0003\u0002\u0002\u0002OQ\u00072\u0002\u0002PR\u0007%\u0002\u0002Q",
    "P\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RT\u0003\u0002\u0002",
    "\u0002SU\u0005\b\u0005\u0002TS\u0003\u0002\u0002\u0002TU\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002VW\u0005\n\u0006\u0002W\u0007",
    "\u0003\u0002\u0002\u0002XY\u00073\u0002\u0002YZ\u0007:\u0002\u0002Z",
    "\t\u0003\u0002\u0002\u0002[_\u0005\f\u0007\u0002\\_\u0005\u000e\b\u0002",
    "]_\u0005\u0010\t\u0002^[\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002",
    "\u0002^]\u0003\u0002\u0002\u0002_\u000b\u0003\u0002\u0002\u0002`a\u0007",
    "\u0003\u0002\u0002a\r\u0003\u0002\u0002\u0002bc\u00077\u0002\u0002c",
    "d\u0005.\u0018\u0002d\u000f\u0003\u0002\u0002\u0002ej\u0005\u0012\n",
    "\u0002fg\u0007\u0004\u0002\u0002gi\u0005\u0012\n\u0002hf\u0003\u0002",
    "\u0002\u0002il\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002jk\u0003",
    "\u0002\u0002\u0002k\u0011\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002",
    "\u0002mp\u0005.\u0018\u0002no\u0007 \u0002\u0002oq\u0007<\u0002\u0002",
    "pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002q\u0013\u0003\u0002",
    "\u0002\u0002rs\u0007(\u0002\u0002st\u0005\u0016\f\u0002t\u0015\u0003",
    "\u0002\u0002\u0002uv\b\f\u0001\u0002vy\u0005\u0018\r\u0002wx\u0007 ",
    "\u0002\u0002xz\u0007<\u0002\u0002yw\u0003\u0002\u0002\u0002yz\u0003",
    "\u0002\u0002\u0002z\u007f\u0003\u0002\u0002\u0002{|\u0007<\u0002\u0002",
    "|}\u0007*\u0002\u0002}\u007f\u0005\u0018\r\u0002~u\u0003\u0002\u0002",
    "\u0002~{\u0003\u0002\u0002\u0002\u007f\u0085\u0003\u0002\u0002\u0002",
    "\u0080\u0081\f\u0003\u0002\u0002\u0081\u0082\u0007+\u0002\u0002\u0082",
    "\u0084\u0005\u0016\f\u0004\u0083\u0080\u0003\u0002\u0002\u0002\u0084",
    "\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085",
    "\u0086\u0003\u0002\u0002\u0002\u0086\u0017\u0003\u0002\u0002\u0002\u0087",
    "\u0085\u0003\u0002\u0002\u0002\u0088\u008a\u0007<\u0002\u0002\u0089",
    "\u008b\u0005\u001a\u000e\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008a",
    "\u008b\u0003\u0002\u0002\u0002\u008b\u0091\u0003\u0002\u0002\u0002\u008c",
    "\u008d\u0007\u0005\u0002\u0002\u008d\u008e\u0005\u0004\u0003\u0002\u008e",
    "\u008f\u0007\u0006\u0002\u0002\u008f\u0091\u0003\u0002\u0002\u0002\u0090",
    "\u0088\u0003\u0002\u0002\u0002\u0090\u008c\u0003\u0002\u0002\u0002\u0091",
    "\u0019\u0003\u0002\u0002\u0002\u0092\u00a0\b\u000e\u0001\u0002\u0093",
    "\u0094\f\u0006\u0002\u0002\u0094\u0095\u0007\u0007\u0002\u0002\u0095",
    "\u009f\u0007<\u0002\u0002\u0096\u0097\f\u0005\u0002\u0002\u0097\u0098",
    "\u0007\b\u0002\u0002\u0098\u0099\u0007:\u0002\u0002\u0099\u009f\u0007",
    "\t\u0002\u0002\u009a\u009b\f\u0004\u0002\u0002\u009b\u009c\u0007\b\u0002",
    "\u0002\u009c\u009d\u0007;\u0002\u0002\u009d\u009f\u0007\t\u0002\u0002",
    "\u009e\u0093\u0003\u0002\u0002\u0002\u009e\u0096\u0003\u0002\u0002\u0002",
    "\u009e\u009a\u0003\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002",
    "\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002",
    "\u00a1\u001b\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u00078\u0002\u0002\u00a4\u00a5\u0005.\u0018\u0002\u00a5",
    "\u001d\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007)\u0002\u0002\u00a7",
    "\u00a8\u0007#\u0002\u0002\u00a8\u00a9\u00050\u0019\u0002\u00a9\u001f",
    "\u0003\u0002\u0002\u0002\u00aa\u00ab\u00071\u0002\u0002\u00ab\u00ac",
    "\u0007#\u0002\u0002\u00ac\u00ad\u0005\"\u0012\u0002\u00ad!\u0003\u0002",
    "\u0002\u0002\u00ae\u00b3\u0005$\u0013\u0002\u00af\u00b0\u0007\u0004",
    "\u0002\u0002\u00b0\u00b2\u0005$\u0013\u0002\u00b1\u00af\u0003\u0002",
    "\u0002\u0002\u00b2\u00b5\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4#\u0003\u0002",
    "\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b8\u0005.",
    "\u0018\u0002\u00b7\u00b9\u0005&\u0014\u0002\u00b8\u00b7\u0003\u0002",
    "\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9%\u0003\u0002",
    "\u0002\u0002\u00ba\u00bb\t\u0002\u0002\u0002\u00bb\'\u0003\u0002\u0002",
    "\u0002\u00bc\u00bd\u0007/\u0002\u0002\u00bd\u00be\u0005*\u0016\u0002",
    "\u00be\u00bf\u0007,\u0002\u0002\u00bf\u00c0\u0005,\u0017\u0002\u00c0",
    ")\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007:\u0002\u0002\u00c2+\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\u0007:\u0002\u0002\u00c4-\u0003\u0002",
    "\u0002\u0002\u00c5\u00c6\b\u0018\u0001\u0002\u00c6\u00c8\u0007\b\u0002",
    "\u0002\u00c7\u00c9\u00050\u0019\u0002\u00c8\u00c7\u0003\u0002\u0002",
    "\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002",
    "\u0002\u00ca\u00ee\u0007\t\u0002\u0002\u00cb\u00cc\u0007\u001f\u0002",
    "\u0002\u00cc\u00cd\u0007\u0005\u0002\u0002\u00cd\u00ce\u0005\u0004\u0003",
    "\u0002\u00ce\u00cf\u0007\u0006\u0002\u0002\u00cf\u00ee\u0003\u0002\u0002",
    "\u0002\u00d0\u00d1\u0007&\u0002\u0002\u00d1\u00d2\u0007\u0005\u0002",
    "\u0002\u00d2\u00d3\u0005\u0004\u0003\u0002\u00d3\u00d4\u0007\u0006\u0002",
    "\u0002\u00d4\u00ee\u0003\u0002\u0002\u0002\u00d5\u00d6\u00075\u0002",
    "\u0002\u00d6\u00d8\u0007\u0007\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002",
    "\u0002\u00d9\u00da\u0007<\u0002\u0002\u00da\u00dc\u0007\u0005\u0002",
    "\u0002\u00db\u00dd\u00050\u0019\u0002\u00dc\u00db\u0003\u0002\u0002",
    "\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002",
    "\u0002\u00de\u00ee\u0007\u0006\u0002\u0002\u00df\u00ee\u0005:\u001e",
    "\u0002\u00e0\u00e2\u0007\r\u0002\u0002\u00e1\u00e3\u00056\u001c\u0002",
    "\u00e2\u00e1\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00ee\u0007\u000e\u0002\u0002",
    "\u00e5\u00ee\u0007<\u0002\u0002\u00e6\u00e7\u0007\u0005\u0002\u0002",
    "\u00e7\u00e8\u0005\u0004\u0003\u0002\u00e8\u00e9\u0007\u0006\u0002\u0002",
    "\u00e9\u00ee\u0003\u0002\u0002\u0002\u00ea\u00eb\u00054\u001b\u0002",
    "\u00eb\u00ec\u0005.\u0018\u0003\u00ec\u00ee\u0003\u0002\u0002\u0002",
    "\u00ed\u00c5\u0003\u0002\u0002\u0002\u00ed\u00cb\u0003\u0002\u0002\u0002",
    "\u00ed\u00d0\u0003\u0002\u0002\u0002\u00ed\u00d7\u0003\u0002\u0002\u0002",
    "\u00ed\u00df\u0003\u0002\u0002\u0002\u00ed\u00e0\u0003\u0002\u0002\u0002",
    "\u00ed\u00e5\u0003\u0002\u0002\u0002\u00ed\u00e6\u0003\u0002\u0002\u0002",
    "\u00ed\u00ea\u0003\u0002\u0002\u0002\u00ee\u0118\u0003\u0002\u0002\u0002",
    "\u00ef\u00f1\f\u0010\u0002\u0002\u00f0\u00f2\u0007-\u0002\u0002\u00f1",
    "\u00f0\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f4\u0007\"\u0002\u0002\u00f4",
    "\u00f5\u0005.\u0018\u0002\u00f5\u00f6\u0007\u001e\u0002\u0002\u00f6",
    "\u00f7\u0005.\u0018\u0011\u00f7\u0117\u0003\u0002\u0002\u0002\u00f8",
    "\u00f9\f\u000f\u0002\u0002\u00f9\u00fa\u00052\u001a\u0002\u00fa\u00fb",
    "\u0005.\u0018\u0010\u00fb\u0117\u0003\u0002\u0002\u0002\u00fc\u00fd",
    "\f\u000e\u0002\u0002\u00fd\u00fe\u0007\n\u0002\u0002\u00fe\u0117\u0005",
    ".\u0018\u000f\u00ff\u0100\f\r\u0002\u0002\u0100\u0101\u0007\u000b\u0002",
    "\u0002\u0101\u0102\u0005.\u0018\u0002\u0102\u0103\u0007\f\u0002\u0002",
    "\u0103\u0104\u0005.\u0018\u000e\u0104\u0117\u0003\u0002\u0002\u0002",
    "\u0105\u0107\f\n\u0002\u0002\u0106\u0108\u0007-\u0002\u0002\u0107\u0106",
    "\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0109",
    "\u0003\u0002\u0002\u0002\u0109\u010a\u0007*\u0002\u0002\u010a\u010b",
    "\u0007\u0005\u0002\u0002\u010b\u010c\u00050\u0019\u0002\u010c\u010d",
    "\u0007\u0006\u0002\u0002\u010d\u0117\u0003\u0002\u0002\u0002\u010e\u010f",
    "\f\b\u0002\u0002\u010f\u0110\u0007\b\u0002\u0002\u0110\u0111\u0005.",
    "\u0018\u0002\u0111\u0112\u0007\t\u0002\u0002\u0112\u0117\u0003\u0002",
    "\u0002\u0002\u0113\u0114\f\u0005\u0002\u0002\u0114\u0115\u0007\u0007",
    "\u0002\u0002\u0115\u0117\u0007<\u0002\u0002\u0116\u00ef\u0003\u0002",
    "\u0002\u0002\u0116\u00f8\u0003\u0002\u0002\u0002\u0116\u00fc\u0003\u0002",
    "\u0002\u0002\u0116\u00ff\u0003\u0002\u0002\u0002\u0116\u0105\u0003\u0002",
    "\u0002\u0002\u0116\u010e\u0003\u0002\u0002\u0002\u0116\u0113\u0003\u0002",
    "\u0002\u0002\u0117\u011a\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002",
    "\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119/\u0003\u0002",
    "\u0002\u0002\u011a\u0118\u0003\u0002\u0002\u0002\u011b\u0120\u0005.",
    "\u0018\u0002\u011c\u011d\u0007\u0004\u0002\u0002\u011d\u011f\u0005.",
    "\u0018\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011f\u0122\u0003\u0002",
    "\u0002\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002",
    "\u0002\u0002\u01211\u0003\u0002\u0002\u0002\u0122\u0120\u0003\u0002",
    "\u0002\u0002\u0123\u0124\t\u0003\u0002\u0002\u01243\u0003\u0002\u0002",
    "\u0002\u0125\u0126\t\u0004\u0002\u0002\u01265\u0003\u0002\u0002\u0002",
    "\u0127\u012c\u00058\u001d\u0002\u0128\u0129\u0007\u0004\u0002\u0002",
    "\u0129\u012b\u00058\u001d\u0002\u012a\u0128\u0003\u0002\u0002\u0002",
    "\u012b\u012e\u0003\u0002\u0002\u0002\u012c\u012a\u0003\u0002\u0002\u0002",
    "\u012c\u012d\u0003\u0002\u0002\u0002\u012d7\u0003\u0002\u0002\u0002",
    "\u012e\u012c\u0003\u0002\u0002\u0002\u012f\u0130\u0007;\u0002\u0002",
    "\u0130\u0131\u0007\f\u0002\u0002\u0131\u0132\u0005.\u0018\u0002\u0132",
    "9\u0003\u0002\u0002\u0002\u0133\u0134\t\u0005\u0002\u0002\u0134;\u0003",
    "\u0002\u0002\u0002 ADGJMQT^jpy~\u0085\u008a\u0090\u009e\u00a0\u00b3",
    "\u00b8\u00c8\u00d7\u00dc\u00e2\u00ed\u00f1\u0107\u0116\u0118\u0120\u012c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'*'", "','", "'('", "')'", "'.'", "'['", "']'", 
                     "'??'", "'?'", "':'", "'{'", "'}'", "'+'", "'&'", "'|'", 
                     "'^'", "'/'", "'='", "'>'", "'>='", "'<'", "'<='", 
                     "'%'", "'!='", "'||'", "'-'", "'~'", null, null, null, 
                     null, null, null, null, null, null, "'false'", null, 
                     null, null, null, null, null, "'null'", null, null, 
                     null, null, null, "'true'", null, "'undefined'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "K_AND", "K_ARRAY", "K_AS", "K_ASC", "K_BETWEEN", 
                      "K_BY", "K_DESC", "K_DISTINCT", "K_EXISTS", "K_FALSE", 
                      "K_FROM", "K_GROUP", "K_IN", "K_JOIN", "K_LIMIT", 
                      "K_NOT", "K_NULL", "K_OFFSET", "K_OR", "K_ORDER", 
                      "K_SELECT", "K_TOP", "K_TRUE", "K_UDF", "K_UNDEFINED", 
                      "K_VALUE", "K_WHERE", "WS", "NUMERIC_LITERAL", "STRING_LITERAL", 
                      "IDENTIFIER" ];

var ruleNames =  [ "program", "sql_query", "select_clause", "top_spec", 
                   "selection", "select_star_spec", "select_value_spec", 
                   "select_list_spec", "select_item", "from_clause", "collection_expression", 
                   "collection", "path_expression", "where_clause", "group_by_clause", 
                   "order_by_clause", "order_by_items", "order_by_item", 
                   "sort_order", "offset_limit_clause", "offset_count", 
                   "limit_count", "scalar_expression", "scalar_expression_list", 
                   "binary_operator", "unary_operator", "object_propertty_list", 
                   "object_property", "literal" ];

function sqlParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

sqlParser.prototype = Object.create(antlr4.Parser.prototype);
sqlParser.prototype.constructor = sqlParser;

Object.defineProperty(sqlParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

sqlParser.EOF = antlr4.Token.EOF;
sqlParser.T__0 = 1;
sqlParser.T__1 = 2;
sqlParser.T__2 = 3;
sqlParser.T__3 = 4;
sqlParser.T__4 = 5;
sqlParser.T__5 = 6;
sqlParser.T__6 = 7;
sqlParser.T__7 = 8;
sqlParser.T__8 = 9;
sqlParser.T__9 = 10;
sqlParser.T__10 = 11;
sqlParser.T__11 = 12;
sqlParser.T__12 = 13;
sqlParser.T__13 = 14;
sqlParser.T__14 = 15;
sqlParser.T__15 = 16;
sqlParser.T__16 = 17;
sqlParser.T__17 = 18;
sqlParser.T__18 = 19;
sqlParser.T__19 = 20;
sqlParser.T__20 = 21;
sqlParser.T__21 = 22;
sqlParser.T__22 = 23;
sqlParser.T__23 = 24;
sqlParser.T__24 = 25;
sqlParser.T__25 = 26;
sqlParser.T__26 = 27;
sqlParser.K_AND = 28;
sqlParser.K_ARRAY = 29;
sqlParser.K_AS = 30;
sqlParser.K_ASC = 31;
sqlParser.K_BETWEEN = 32;
sqlParser.K_BY = 33;
sqlParser.K_DESC = 34;
sqlParser.K_DISTINCT = 35;
sqlParser.K_EXISTS = 36;
sqlParser.K_FALSE = 37;
sqlParser.K_FROM = 38;
sqlParser.K_GROUP = 39;
sqlParser.K_IN = 40;
sqlParser.K_JOIN = 41;
sqlParser.K_LIMIT = 42;
sqlParser.K_NOT = 43;
sqlParser.K_NULL = 44;
sqlParser.K_OFFSET = 45;
sqlParser.K_OR = 46;
sqlParser.K_ORDER = 47;
sqlParser.K_SELECT = 48;
sqlParser.K_TOP = 49;
sqlParser.K_TRUE = 50;
sqlParser.K_UDF = 51;
sqlParser.K_UNDEFINED = 52;
sqlParser.K_VALUE = 53;
sqlParser.K_WHERE = 54;
sqlParser.WS = 55;
sqlParser.NUMERIC_LITERAL = 56;
sqlParser.STRING_LITERAL = 57;
sqlParser.IDENTIFIER = 58;

sqlParser.RULE_program = 0;
sqlParser.RULE_sql_query = 1;
sqlParser.RULE_select_clause = 2;
sqlParser.RULE_top_spec = 3;
sqlParser.RULE_selection = 4;
sqlParser.RULE_select_star_spec = 5;
sqlParser.RULE_select_value_spec = 6;
sqlParser.RULE_select_list_spec = 7;
sqlParser.RULE_select_item = 8;
sqlParser.RULE_from_clause = 9;
sqlParser.RULE_collection_expression = 10;
sqlParser.RULE_collection = 11;
sqlParser.RULE_path_expression = 12;
sqlParser.RULE_where_clause = 13;
sqlParser.RULE_group_by_clause = 14;
sqlParser.RULE_order_by_clause = 15;
sqlParser.RULE_order_by_items = 16;
sqlParser.RULE_order_by_item = 17;
sqlParser.RULE_sort_order = 18;
sqlParser.RULE_offset_limit_clause = 19;
sqlParser.RULE_offset_count = 20;
sqlParser.RULE_limit_count = 21;
sqlParser.RULE_scalar_expression = 22;
sqlParser.RULE_scalar_expression_list = 23;
sqlParser.RULE_binary_operator = 24;
sqlParser.RULE_unary_operator = 25;
sqlParser.RULE_object_propertty_list = 26;
sqlParser.RULE_object_property = 27;
sqlParser.RULE_literal = 28;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.sql_query = function() {
    return this.getTypedRuleContext(Sql_queryContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(sqlParser.EOF, 0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitProgram(this);
	}
};




sqlParser.ProgramContext = ProgramContext;

sqlParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sqlParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.sql_query();
        this.state = 59;
        this.match(sqlParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Sql_queryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_sql_query;
    return this;
}

Sql_queryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sql_queryContext.prototype.constructor = Sql_queryContext;

Sql_queryContext.prototype.select_clause = function() {
    return this.getTypedRuleContext(Select_clauseContext,0);
};

Sql_queryContext.prototype.from_clause = function() {
    return this.getTypedRuleContext(From_clauseContext,0);
};

Sql_queryContext.prototype.where_clause = function() {
    return this.getTypedRuleContext(Where_clauseContext,0);
};

Sql_queryContext.prototype.group_by_clause = function() {
    return this.getTypedRuleContext(Group_by_clauseContext,0);
};

Sql_queryContext.prototype.order_by_clause = function() {
    return this.getTypedRuleContext(Order_by_clauseContext,0);
};

Sql_queryContext.prototype.offset_limit_clause = function() {
    return this.getTypedRuleContext(Offset_limit_clauseContext,0);
};

Sql_queryContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterSql_query(this);
	}
};

Sql_queryContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitSql_query(this);
	}
};




sqlParser.Sql_queryContext = Sql_queryContext;

sqlParser.prototype.sql_query = function() {

    var localctx = new Sql_queryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sqlParser.RULE_sql_query);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.select_clause();
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sqlParser.K_FROM) {
            this.state = 62;
            this.from_clause();
        }

        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sqlParser.K_WHERE) {
            this.state = 65;
            this.where_clause();
        }

        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sqlParser.K_GROUP) {
            this.state = 68;
            this.group_by_clause();
        }

        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sqlParser.K_ORDER) {
            this.state = 71;
            this.order_by_clause();
        }

        this.state = 75;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sqlParser.K_OFFSET) {
            this.state = 74;
            this.offset_limit_clause();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Select_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_select_clause;
    return this;
}

Select_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_clauseContext.prototype.constructor = Select_clauseContext;

Select_clauseContext.prototype.K_SELECT = function() {
    return this.getToken(sqlParser.K_SELECT, 0);
};

Select_clauseContext.prototype.selection = function() {
    return this.getTypedRuleContext(SelectionContext,0);
};

Select_clauseContext.prototype.K_DISTINCT = function() {
    return this.getToken(sqlParser.K_DISTINCT, 0);
};

Select_clauseContext.prototype.top_spec = function() {
    return this.getTypedRuleContext(Top_specContext,0);
};

Select_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterSelect_clause(this);
	}
};

Select_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitSelect_clause(this);
	}
};




sqlParser.Select_clauseContext = Select_clauseContext;

sqlParser.prototype.select_clause = function() {

    var localctx = new Select_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sqlParser.RULE_select_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(sqlParser.K_SELECT);
        this.state = 79;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sqlParser.K_DISTINCT) {
            this.state = 78;
            this.match(sqlParser.K_DISTINCT);
        }

        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sqlParser.K_TOP) {
            this.state = 81;
            this.top_spec();
        }

        this.state = 84;
        this.selection();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Top_specContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_top_spec;
    return this;
}

Top_specContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Top_specContext.prototype.constructor = Top_specContext;

Top_specContext.prototype.K_TOP = function() {
    return this.getToken(sqlParser.K_TOP, 0);
};

Top_specContext.prototype.NUMERIC_LITERAL = function() {
    return this.getToken(sqlParser.NUMERIC_LITERAL, 0);
};

Top_specContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterTop_spec(this);
	}
};

Top_specContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitTop_spec(this);
	}
};




sqlParser.Top_specContext = Top_specContext;

sqlParser.prototype.top_spec = function() {

    var localctx = new Top_specContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sqlParser.RULE_top_spec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(sqlParser.K_TOP);
        this.state = 87;
        this.match(sqlParser.NUMERIC_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_selection;
    return this;
}

SelectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectionContext.prototype.constructor = SelectionContext;

SelectionContext.prototype.select_star_spec = function() {
    return this.getTypedRuleContext(Select_star_specContext,0);
};

SelectionContext.prototype.select_value_spec = function() {
    return this.getTypedRuleContext(Select_value_specContext,0);
};

SelectionContext.prototype.select_list_spec = function() {
    return this.getTypedRuleContext(Select_list_specContext,0);
};

SelectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterSelection(this);
	}
};

SelectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitSelection(this);
	}
};




sqlParser.SelectionContext = SelectionContext;

sqlParser.prototype.selection = function() {

    var localctx = new SelectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, sqlParser.RULE_selection);
    try {
        this.state = 92;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sqlParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 89;
            this.select_star_spec();
            break;
        case sqlParser.K_VALUE:
            this.enterOuterAlt(localctx, 2);
            this.state = 90;
            this.select_value_spec();
            break;
        case sqlParser.T__2:
        case sqlParser.T__5:
        case sqlParser.T__10:
        case sqlParser.T__12:
        case sqlParser.T__25:
        case sqlParser.T__26:
        case sqlParser.K_ARRAY:
        case sqlParser.K_EXISTS:
        case sqlParser.K_FALSE:
        case sqlParser.K_NOT:
        case sqlParser.K_NULL:
        case sqlParser.K_TRUE:
        case sqlParser.K_UDF:
        case sqlParser.K_UNDEFINED:
        case sqlParser.NUMERIC_LITERAL:
        case sqlParser.STRING_LITERAL:
        case sqlParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 3);
            this.state = 91;
            this.select_list_spec();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Select_star_specContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_select_star_spec;
    return this;
}

Select_star_specContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_star_specContext.prototype.constructor = Select_star_specContext;


Select_star_specContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterSelect_star_spec(this);
	}
};

Select_star_specContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitSelect_star_spec(this);
	}
};




sqlParser.Select_star_specContext = Select_star_specContext;

sqlParser.prototype.select_star_spec = function() {

    var localctx = new Select_star_specContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, sqlParser.RULE_select_star_spec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(sqlParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Select_value_specContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_select_value_spec;
    return this;
}

Select_value_specContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_value_specContext.prototype.constructor = Select_value_specContext;

Select_value_specContext.prototype.K_VALUE = function() {
    return this.getToken(sqlParser.K_VALUE, 0);
};

Select_value_specContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

Select_value_specContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterSelect_value_spec(this);
	}
};

Select_value_specContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitSelect_value_spec(this);
	}
};




sqlParser.Select_value_specContext = Select_value_specContext;

sqlParser.prototype.select_value_spec = function() {

    var localctx = new Select_value_specContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, sqlParser.RULE_select_value_spec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(sqlParser.K_VALUE);
        this.state = 97;
        this.scalar_expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Select_list_specContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_select_list_spec;
    return this;
}

Select_list_specContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_list_specContext.prototype.constructor = Select_list_specContext;

Select_list_specContext.prototype.select_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Select_itemContext);
    } else {
        return this.getTypedRuleContext(Select_itemContext,i);
    }
};

Select_list_specContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterSelect_list_spec(this);
	}
};

Select_list_specContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitSelect_list_spec(this);
	}
};




sqlParser.Select_list_specContext = Select_list_specContext;

sqlParser.prototype.select_list_spec = function() {

    var localctx = new Select_list_specContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, sqlParser.RULE_select_list_spec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.select_item();
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sqlParser.T__1) {
            this.state = 100;
            this.match(sqlParser.T__1);
            this.state = 101;
            this.select_item();
            this.state = 106;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Select_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_select_item;
    return this;
}

Select_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_itemContext.prototype.constructor = Select_itemContext;

Select_itemContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

Select_itemContext.prototype.K_AS = function() {
    return this.getToken(sqlParser.K_AS, 0);
};

Select_itemContext.prototype.IDENTIFIER = function() {
    return this.getToken(sqlParser.IDENTIFIER, 0);
};

Select_itemContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterSelect_item(this);
	}
};

Select_itemContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitSelect_item(this);
	}
};




sqlParser.Select_itemContext = Select_itemContext;

sqlParser.prototype.select_item = function() {

    var localctx = new Select_itemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, sqlParser.RULE_select_item);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.scalar_expression(0);
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sqlParser.K_AS) {
            this.state = 108;
            this.match(sqlParser.K_AS);
            this.state = 109;
            this.match(sqlParser.IDENTIFIER);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function From_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_from_clause;
    return this;
}

From_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
From_clauseContext.prototype.constructor = From_clauseContext;

From_clauseContext.prototype.K_FROM = function() {
    return this.getToken(sqlParser.K_FROM, 0);
};

From_clauseContext.prototype.collection_expression = function() {
    return this.getTypedRuleContext(Collection_expressionContext,0);
};

From_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterFrom_clause(this);
	}
};

From_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitFrom_clause(this);
	}
};




sqlParser.From_clauseContext = From_clauseContext;

sqlParser.prototype.from_clause = function() {

    var localctx = new From_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, sqlParser.RULE_from_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.match(sqlParser.K_FROM);
        this.state = 113;
        this.collection_expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Collection_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_collection_expression;
    return this;
}

Collection_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Collection_expressionContext.prototype.constructor = Collection_expressionContext;


 
Collection_expressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function JoinCollectionExpressionContext(parser, ctx) {
	Collection_expressionContext.call(this, parser);
    Collection_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

JoinCollectionExpressionContext.prototype = Object.create(Collection_expressionContext.prototype);
JoinCollectionExpressionContext.prototype.constructor = JoinCollectionExpressionContext;

sqlParser.JoinCollectionExpressionContext = JoinCollectionExpressionContext;

JoinCollectionExpressionContext.prototype.collection_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Collection_expressionContext);
    } else {
        return this.getTypedRuleContext(Collection_expressionContext,i);
    }
};

JoinCollectionExpressionContext.prototype.K_JOIN = function() {
    return this.getToken(sqlParser.K_JOIN, 0);
};
JoinCollectionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterJoinCollectionExpression(this);
	}
};

JoinCollectionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitJoinCollectionExpression(this);
	}
};


function AliasedCollectionExpressionContext(parser, ctx) {
	Collection_expressionContext.call(this, parser);
    Collection_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AliasedCollectionExpressionContext.prototype = Object.create(Collection_expressionContext.prototype);
AliasedCollectionExpressionContext.prototype.constructor = AliasedCollectionExpressionContext;

sqlParser.AliasedCollectionExpressionContext = AliasedCollectionExpressionContext;

AliasedCollectionExpressionContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

AliasedCollectionExpressionContext.prototype.K_AS = function() {
    return this.getToken(sqlParser.K_AS, 0);
};

AliasedCollectionExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(sqlParser.IDENTIFIER, 0);
};
AliasedCollectionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterAliasedCollectionExpression(this);
	}
};

AliasedCollectionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitAliasedCollectionExpression(this);
	}
};


function ArrayIteratorCollectionExpressionContext(parser, ctx) {
	Collection_expressionContext.call(this, parser);
    Collection_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayIteratorCollectionExpressionContext.prototype = Object.create(Collection_expressionContext.prototype);
ArrayIteratorCollectionExpressionContext.prototype.constructor = ArrayIteratorCollectionExpressionContext;

sqlParser.ArrayIteratorCollectionExpressionContext = ArrayIteratorCollectionExpressionContext;

ArrayIteratorCollectionExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(sqlParser.IDENTIFIER, 0);
};

ArrayIteratorCollectionExpressionContext.prototype.K_IN = function() {
    return this.getToken(sqlParser.K_IN, 0);
};

ArrayIteratorCollectionExpressionContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};
ArrayIteratorCollectionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterArrayIteratorCollectionExpression(this);
	}
};

ArrayIteratorCollectionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitArrayIteratorCollectionExpression(this);
	}
};



sqlParser.prototype.collection_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Collection_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, sqlParser.RULE_collection_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AliasedCollectionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 116;
            this.collection();
            this.state = 119;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 117;
                this.match(sqlParser.K_AS);
                this.state = 118;
                this.match(sqlParser.IDENTIFIER);

            }
            break;

        case 2:
            localctx = new ArrayIteratorCollectionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 121;
            this.match(sqlParser.IDENTIFIER);
            this.state = 122;
            this.match(sqlParser.K_IN);
            this.state = 123;
            this.collection();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 131;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new JoinCollectionExpressionContext(this, new Collection_expressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_collection_expression);
                this.state = 126;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 127;
                this.match(sqlParser.K_JOIN);
                this.state = 128;
                this.collection_expression(2); 
            }
            this.state = 133;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function CollectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_collection;
    return this;
}

CollectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollectionContext.prototype.constructor = CollectionContext;


 
CollectionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function InputPathCollectionContext(parser, ctx) {
	CollectionContext.call(this, parser);
    CollectionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InputPathCollectionContext.prototype = Object.create(CollectionContext.prototype);
InputPathCollectionContext.prototype.constructor = InputPathCollectionContext;

sqlParser.InputPathCollectionContext = InputPathCollectionContext;

InputPathCollectionContext.prototype.IDENTIFIER = function() {
    return this.getToken(sqlParser.IDENTIFIER, 0);
};

InputPathCollectionContext.prototype.path_expression = function() {
    return this.getTypedRuleContext(Path_expressionContext,0);
};
InputPathCollectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterInputPathCollection(this);
	}
};

InputPathCollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitInputPathCollection(this);
	}
};


function SubqueryCollectionContext(parser, ctx) {
	CollectionContext.call(this, parser);
    CollectionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubqueryCollectionContext.prototype = Object.create(CollectionContext.prototype);
SubqueryCollectionContext.prototype.constructor = SubqueryCollectionContext;

sqlParser.SubqueryCollectionContext = SubqueryCollectionContext;

SubqueryCollectionContext.prototype.sql_query = function() {
    return this.getTypedRuleContext(Sql_queryContext,0);
};
SubqueryCollectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterSubqueryCollection(this);
	}
};

SubqueryCollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitSubqueryCollection(this);
	}
};



sqlParser.CollectionContext = CollectionContext;

sqlParser.prototype.collection = function() {

    var localctx = new CollectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, sqlParser.RULE_collection);
    try {
        this.state = 142;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sqlParser.IDENTIFIER:
            localctx = new InputPathCollectionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 134;
            this.match(sqlParser.IDENTIFIER);
            this.state = 136;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
            if(la_===1) {
                this.state = 135;
                this.path_expression(0);

            }
            break;
        case sqlParser.T__2:
            localctx = new SubqueryCollectionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this.match(sqlParser.T__2);
            this.state = 139;
            this.sql_query();
            this.state = 140;
            this.match(sqlParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Path_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_path_expression;
    return this;
}

Path_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Path_expressionContext.prototype.constructor = Path_expressionContext;


 
Path_expressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function StringPathExpressionContext(parser, ctx) {
	Path_expressionContext.call(this, parser);
    Path_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringPathExpressionContext.prototype = Object.create(Path_expressionContext.prototype);
StringPathExpressionContext.prototype.constructor = StringPathExpressionContext;

sqlParser.StringPathExpressionContext = StringPathExpressionContext;

StringPathExpressionContext.prototype.path_expression = function() {
    return this.getTypedRuleContext(Path_expressionContext,0);
};

StringPathExpressionContext.prototype.STRING_LITERAL = function() {
    return this.getToken(sqlParser.STRING_LITERAL, 0);
};
StringPathExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterStringPathExpression(this);
	}
};

StringPathExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitStringPathExpression(this);
	}
};


function EpsilonPathExpressionContext(parser, ctx) {
	Path_expressionContext.call(this, parser);
    Path_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EpsilonPathExpressionContext.prototype = Object.create(Path_expressionContext.prototype);
EpsilonPathExpressionContext.prototype.constructor = EpsilonPathExpressionContext;

sqlParser.EpsilonPathExpressionContext = EpsilonPathExpressionContext;

EpsilonPathExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterEpsilonPathExpression(this);
	}
};

EpsilonPathExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitEpsilonPathExpression(this);
	}
};


function IdentifierPathExpressionContext(parser, ctx) {
	Path_expressionContext.call(this, parser);
    Path_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierPathExpressionContext.prototype = Object.create(Path_expressionContext.prototype);
IdentifierPathExpressionContext.prototype.constructor = IdentifierPathExpressionContext;

sqlParser.IdentifierPathExpressionContext = IdentifierPathExpressionContext;

IdentifierPathExpressionContext.prototype.path_expression = function() {
    return this.getTypedRuleContext(Path_expressionContext,0);
};

IdentifierPathExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(sqlParser.IDENTIFIER, 0);
};
IdentifierPathExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterIdentifierPathExpression(this);
	}
};

IdentifierPathExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitIdentifierPathExpression(this);
	}
};


function NumberPathExpressionContext(parser, ctx) {
	Path_expressionContext.call(this, parser);
    Path_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberPathExpressionContext.prototype = Object.create(Path_expressionContext.prototype);
NumberPathExpressionContext.prototype.constructor = NumberPathExpressionContext;

sqlParser.NumberPathExpressionContext = NumberPathExpressionContext;

NumberPathExpressionContext.prototype.path_expression = function() {
    return this.getTypedRuleContext(Path_expressionContext,0);
};

NumberPathExpressionContext.prototype.NUMERIC_LITERAL = function() {
    return this.getToken(sqlParser.NUMERIC_LITERAL, 0);
};
NumberPathExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterNumberPathExpression(this);
	}
};

NumberPathExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitNumberPathExpression(this);
	}
};



sqlParser.prototype.path_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Path_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, sqlParser.RULE_path_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new EpsilonPathExpressionContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this._ctx.stop = this._input.LT(-1);
        this.state = 158;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 156;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new IdentifierPathExpressionContext(this, new Path_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_path_expression);
                    this.state = 145;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 146;
                    this.match(sqlParser.T__4);
                    this.state = 147;
                    this.match(sqlParser.IDENTIFIER);
                    break;

                case 2:
                    localctx = new NumberPathExpressionContext(this, new Path_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_path_expression);
                    this.state = 148;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 149;
                    this.match(sqlParser.T__5);
                    this.state = 150;
                    this.match(sqlParser.NUMERIC_LITERAL);
                    this.state = 151;
                    this.match(sqlParser.T__6);
                    break;

                case 3:
                    localctx = new StringPathExpressionContext(this, new Path_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_path_expression);
                    this.state = 152;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 153;
                    this.match(sqlParser.T__5);
                    this.state = 154;
                    this.match(sqlParser.STRING_LITERAL);
                    this.state = 155;
                    this.match(sqlParser.T__6);
                    break;

                } 
            }
            this.state = 160;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Where_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_where_clause;
    return this;
}

Where_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Where_clauseContext.prototype.constructor = Where_clauseContext;

Where_clauseContext.prototype.K_WHERE = function() {
    return this.getToken(sqlParser.K_WHERE, 0);
};

Where_clauseContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

Where_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterWhere_clause(this);
	}
};

Where_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitWhere_clause(this);
	}
};




sqlParser.Where_clauseContext = Where_clauseContext;

sqlParser.prototype.where_clause = function() {

    var localctx = new Where_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, sqlParser.RULE_where_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(sqlParser.K_WHERE);
        this.state = 162;
        this.scalar_expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Group_by_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_group_by_clause;
    return this;
}

Group_by_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Group_by_clauseContext.prototype.constructor = Group_by_clauseContext;

Group_by_clauseContext.prototype.K_GROUP = function() {
    return this.getToken(sqlParser.K_GROUP, 0);
};

Group_by_clauseContext.prototype.K_BY = function() {
    return this.getToken(sqlParser.K_BY, 0);
};

Group_by_clauseContext.prototype.scalar_expression_list = function() {
    return this.getTypedRuleContext(Scalar_expression_listContext,0);
};

Group_by_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterGroup_by_clause(this);
	}
};

Group_by_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitGroup_by_clause(this);
	}
};




sqlParser.Group_by_clauseContext = Group_by_clauseContext;

sqlParser.prototype.group_by_clause = function() {

    var localctx = new Group_by_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, sqlParser.RULE_group_by_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(sqlParser.K_GROUP);
        this.state = 165;
        this.match(sqlParser.K_BY);
        this.state = 166;
        this.scalar_expression_list();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Order_by_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_order_by_clause;
    return this;
}

Order_by_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Order_by_clauseContext.prototype.constructor = Order_by_clauseContext;

Order_by_clauseContext.prototype.K_ORDER = function() {
    return this.getToken(sqlParser.K_ORDER, 0);
};

Order_by_clauseContext.prototype.K_BY = function() {
    return this.getToken(sqlParser.K_BY, 0);
};

Order_by_clauseContext.prototype.order_by_items = function() {
    return this.getTypedRuleContext(Order_by_itemsContext,0);
};

Order_by_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterOrder_by_clause(this);
	}
};

Order_by_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitOrder_by_clause(this);
	}
};




sqlParser.Order_by_clauseContext = Order_by_clauseContext;

sqlParser.prototype.order_by_clause = function() {

    var localctx = new Order_by_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, sqlParser.RULE_order_by_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.match(sqlParser.K_ORDER);
        this.state = 169;
        this.match(sqlParser.K_BY);
        this.state = 170;
        this.order_by_items();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Order_by_itemsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_order_by_items;
    return this;
}

Order_by_itemsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Order_by_itemsContext.prototype.constructor = Order_by_itemsContext;

Order_by_itemsContext.prototype.order_by_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Order_by_itemContext);
    } else {
        return this.getTypedRuleContext(Order_by_itemContext,i);
    }
};

Order_by_itemsContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterOrder_by_items(this);
	}
};

Order_by_itemsContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitOrder_by_items(this);
	}
};




sqlParser.Order_by_itemsContext = Order_by_itemsContext;

sqlParser.prototype.order_by_items = function() {

    var localctx = new Order_by_itemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, sqlParser.RULE_order_by_items);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.order_by_item();
        this.state = 177;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sqlParser.T__1) {
            this.state = 173;
            this.match(sqlParser.T__1);
            this.state = 174;
            this.order_by_item();
            this.state = 179;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Order_by_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_order_by_item;
    return this;
}

Order_by_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Order_by_itemContext.prototype.constructor = Order_by_itemContext;

Order_by_itemContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

Order_by_itemContext.prototype.sort_order = function() {
    return this.getTypedRuleContext(Sort_orderContext,0);
};

Order_by_itemContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterOrder_by_item(this);
	}
};

Order_by_itemContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitOrder_by_item(this);
	}
};




sqlParser.Order_by_itemContext = Order_by_itemContext;

sqlParser.prototype.order_by_item = function() {

    var localctx = new Order_by_itemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, sqlParser.RULE_order_by_item);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.scalar_expression(0);
        this.state = 182;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sqlParser.K_ASC || _la===sqlParser.K_DESC) {
            this.state = 181;
            this.sort_order();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Sort_orderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_sort_order;
    return this;
}

Sort_orderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sort_orderContext.prototype.constructor = Sort_orderContext;

Sort_orderContext.prototype.K_ASC = function() {
    return this.getToken(sqlParser.K_ASC, 0);
};

Sort_orderContext.prototype.K_DESC = function() {
    return this.getToken(sqlParser.K_DESC, 0);
};

Sort_orderContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterSort_order(this);
	}
};

Sort_orderContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitSort_order(this);
	}
};




sqlParser.Sort_orderContext = Sort_orderContext;

sqlParser.prototype.sort_order = function() {

    var localctx = new Sort_orderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, sqlParser.RULE_sort_order);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        _la = this._input.LA(1);
        if(!(_la===sqlParser.K_ASC || _la===sqlParser.K_DESC)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Offset_limit_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_offset_limit_clause;
    return this;
}

Offset_limit_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Offset_limit_clauseContext.prototype.constructor = Offset_limit_clauseContext;

Offset_limit_clauseContext.prototype.K_OFFSET = function() {
    return this.getToken(sqlParser.K_OFFSET, 0);
};

Offset_limit_clauseContext.prototype.offset_count = function() {
    return this.getTypedRuleContext(Offset_countContext,0);
};

Offset_limit_clauseContext.prototype.K_LIMIT = function() {
    return this.getToken(sqlParser.K_LIMIT, 0);
};

Offset_limit_clauseContext.prototype.limit_count = function() {
    return this.getTypedRuleContext(Limit_countContext,0);
};

Offset_limit_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterOffset_limit_clause(this);
	}
};

Offset_limit_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitOffset_limit_clause(this);
	}
};




sqlParser.Offset_limit_clauseContext = Offset_limit_clauseContext;

sqlParser.prototype.offset_limit_clause = function() {

    var localctx = new Offset_limit_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, sqlParser.RULE_offset_limit_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(sqlParser.K_OFFSET);
        this.state = 187;
        this.offset_count();
        this.state = 188;
        this.match(sqlParser.K_LIMIT);
        this.state = 189;
        this.limit_count();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Offset_countContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_offset_count;
    return this;
}

Offset_countContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Offset_countContext.prototype.constructor = Offset_countContext;

Offset_countContext.prototype.NUMERIC_LITERAL = function() {
    return this.getToken(sqlParser.NUMERIC_LITERAL, 0);
};

Offset_countContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterOffset_count(this);
	}
};

Offset_countContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitOffset_count(this);
	}
};




sqlParser.Offset_countContext = Offset_countContext;

sqlParser.prototype.offset_count = function() {

    var localctx = new Offset_countContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, sqlParser.RULE_offset_count);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(sqlParser.NUMERIC_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Limit_countContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_limit_count;
    return this;
}

Limit_countContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Limit_countContext.prototype.constructor = Limit_countContext;

Limit_countContext.prototype.NUMERIC_LITERAL = function() {
    return this.getToken(sqlParser.NUMERIC_LITERAL, 0);
};

Limit_countContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterLimit_count(this);
	}
};

Limit_countContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitLimit_count(this);
	}
};




sqlParser.Limit_countContext = Limit_countContext;

sqlParser.prototype.limit_count = function() {

    var localctx = new Limit_countContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, sqlParser.RULE_limit_count);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(sqlParser.NUMERIC_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Scalar_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_scalar_expression;
    return this;
}

Scalar_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scalar_expressionContext.prototype.constructor = Scalar_expressionContext;


 
Scalar_expressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function LiteralScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
LiteralScalarExpressionContext.prototype.constructor = LiteralScalarExpressionContext;

sqlParser.LiteralScalarExpressionContext = LiteralScalarExpressionContext;

LiteralScalarExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterLiteralScalarExpression(this);
	}
};

LiteralScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitLiteralScalarExpression(this);
	}
};


function BetweenScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BetweenScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
BetweenScalarExpressionContext.prototype.constructor = BetweenScalarExpressionContext;

sqlParser.BetweenScalarExpressionContext = BetweenScalarExpressionContext;

BetweenScalarExpressionContext.prototype.scalar_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Scalar_expressionContext);
    } else {
        return this.getTypedRuleContext(Scalar_expressionContext,i);
    }
};

BetweenScalarExpressionContext.prototype.K_BETWEEN = function() {
    return this.getToken(sqlParser.K_BETWEEN, 0);
};

BetweenScalarExpressionContext.prototype.K_AND = function() {
    return this.getToken(sqlParser.K_AND, 0);
};

BetweenScalarExpressionContext.prototype.K_NOT = function() {
    return this.getToken(sqlParser.K_NOT, 0);
};
BetweenScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterBetweenScalarExpression(this);
	}
};

BetweenScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitBetweenScalarExpression(this);
	}
};


function ObjectCreateScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectCreateScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
ObjectCreateScalarExpressionContext.prototype.constructor = ObjectCreateScalarExpressionContext;

sqlParser.ObjectCreateScalarExpressionContext = ObjectCreateScalarExpressionContext;

ObjectCreateScalarExpressionContext.prototype.object_propertty_list = function() {
    return this.getTypedRuleContext(Object_propertty_listContext,0);
};
ObjectCreateScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterObjectCreateScalarExpression(this);
	}
};

ObjectCreateScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitObjectCreateScalarExpression(this);
	}
};


function InScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
InScalarExpressionContext.prototype.constructor = InScalarExpressionContext;

sqlParser.InScalarExpressionContext = InScalarExpressionContext;

InScalarExpressionContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

InScalarExpressionContext.prototype.K_IN = function() {
    return this.getToken(sqlParser.K_IN, 0);
};

InScalarExpressionContext.prototype.scalar_expression_list = function() {
    return this.getTypedRuleContext(Scalar_expression_listContext,0);
};

InScalarExpressionContext.prototype.K_NOT = function() {
    return this.getToken(sqlParser.K_NOT, 0);
};
InScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterInScalarExpression(this);
	}
};

InScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitInScalarExpression(this);
	}
};


function ArrayCreateScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayCreateScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
ArrayCreateScalarExpressionContext.prototype.constructor = ArrayCreateScalarExpressionContext;

sqlParser.ArrayCreateScalarExpressionContext = ArrayCreateScalarExpressionContext;

ArrayCreateScalarExpressionContext.prototype.scalar_expression_list = function() {
    return this.getTypedRuleContext(Scalar_expression_listContext,0);
};
ArrayCreateScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterArrayCreateScalarExpression(this);
	}
};

ArrayCreateScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitArrayCreateScalarExpression(this);
	}
};


function MemberIndexerScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberIndexerScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
MemberIndexerScalarExpressionContext.prototype.constructor = MemberIndexerScalarExpressionContext;

sqlParser.MemberIndexerScalarExpressionContext = MemberIndexerScalarExpressionContext;

MemberIndexerScalarExpressionContext.prototype.scalar_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Scalar_expressionContext);
    } else {
        return this.getTypedRuleContext(Scalar_expressionContext,i);
    }
};
MemberIndexerScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterMemberIndexerScalarExpression(this);
	}
};

MemberIndexerScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitMemberIndexerScalarExpression(this);
	}
};


function SubqueryScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubqueryScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
SubqueryScalarExpressionContext.prototype.constructor = SubqueryScalarExpressionContext;

sqlParser.SubqueryScalarExpressionContext = SubqueryScalarExpressionContext;

SubqueryScalarExpressionContext.prototype.sql_query = function() {
    return this.getTypedRuleContext(Sql_queryContext,0);
};
SubqueryScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterSubqueryScalarExpression(this);
	}
};

SubqueryScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitSubqueryScalarExpression(this);
	}
};


function PropertyRefScalarExpressionBaseContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyRefScalarExpressionBaseContext.prototype = Object.create(Scalar_expressionContext.prototype);
PropertyRefScalarExpressionBaseContext.prototype.constructor = PropertyRefScalarExpressionBaseContext;

sqlParser.PropertyRefScalarExpressionBaseContext = PropertyRefScalarExpressionBaseContext;

PropertyRefScalarExpressionBaseContext.prototype.IDENTIFIER = function() {
    return this.getToken(sqlParser.IDENTIFIER, 0);
};
PropertyRefScalarExpressionBaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterPropertyRefScalarExpressionBase(this);
	}
};

PropertyRefScalarExpressionBaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitPropertyRefScalarExpressionBase(this);
	}
};


function CoalesceScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CoalesceScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
CoalesceScalarExpressionContext.prototype.constructor = CoalesceScalarExpressionContext;

sqlParser.CoalesceScalarExpressionContext = CoalesceScalarExpressionContext;

CoalesceScalarExpressionContext.prototype.scalar_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Scalar_expressionContext);
    } else {
        return this.getTypedRuleContext(Scalar_expressionContext,i);
    }
};
CoalesceScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterCoalesceScalarExpression(this);
	}
};

CoalesceScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitCoalesceScalarExpression(this);
	}
};


function ConditionalScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConditionalScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
ConditionalScalarExpressionContext.prototype.constructor = ConditionalScalarExpressionContext;

sqlParser.ConditionalScalarExpressionContext = ConditionalScalarExpressionContext;

ConditionalScalarExpressionContext.prototype.scalar_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Scalar_expressionContext);
    } else {
        return this.getTypedRuleContext(Scalar_expressionContext,i);
    }
};
ConditionalScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterConditionalScalarExpression(this);
	}
};

ConditionalScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitConditionalScalarExpression(this);
	}
};


function FunctionCallScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCallScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
FunctionCallScalarExpressionContext.prototype.constructor = FunctionCallScalarExpressionContext;

sqlParser.FunctionCallScalarExpressionContext = FunctionCallScalarExpressionContext;

FunctionCallScalarExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(sqlParser.IDENTIFIER, 0);
};

FunctionCallScalarExpressionContext.prototype.K_UDF = function() {
    return this.getToken(sqlParser.K_UDF, 0);
};

FunctionCallScalarExpressionContext.prototype.scalar_expression_list = function() {
    return this.getTypedRuleContext(Scalar_expression_listContext,0);
};
FunctionCallScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterFunctionCallScalarExpression(this);
	}
};

FunctionCallScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitFunctionCallScalarExpression(this);
	}
};


function ArrayScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
ArrayScalarExpressionContext.prototype.constructor = ArrayScalarExpressionContext;

sqlParser.ArrayScalarExpressionContext = ArrayScalarExpressionContext;

ArrayScalarExpressionContext.prototype.K_ARRAY = function() {
    return this.getToken(sqlParser.K_ARRAY, 0);
};

ArrayScalarExpressionContext.prototype.sql_query = function() {
    return this.getTypedRuleContext(Sql_queryContext,0);
};
ArrayScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterArrayScalarExpression(this);
	}
};

ArrayScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitArrayScalarExpression(this);
	}
};


function ExistsScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExistsScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
ExistsScalarExpressionContext.prototype.constructor = ExistsScalarExpressionContext;

sqlParser.ExistsScalarExpressionContext = ExistsScalarExpressionContext;

ExistsScalarExpressionContext.prototype.K_EXISTS = function() {
    return this.getToken(sqlParser.K_EXISTS, 0);
};

ExistsScalarExpressionContext.prototype.sql_query = function() {
    return this.getTypedRuleContext(Sql_queryContext,0);
};
ExistsScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterExistsScalarExpression(this);
	}
};

ExistsScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitExistsScalarExpression(this);
	}
};


function UnaryScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
UnaryScalarExpressionContext.prototype.constructor = UnaryScalarExpressionContext;

sqlParser.UnaryScalarExpressionContext = UnaryScalarExpressionContext;

UnaryScalarExpressionContext.prototype.unary_operator = function() {
    return this.getTypedRuleContext(Unary_operatorContext,0);
};

UnaryScalarExpressionContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};
UnaryScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterUnaryScalarExpression(this);
	}
};

UnaryScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitUnaryScalarExpression(this);
	}
};


function BinaryScalarExpressionContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryScalarExpressionContext.prototype = Object.create(Scalar_expressionContext.prototype);
BinaryScalarExpressionContext.prototype.constructor = BinaryScalarExpressionContext;

sqlParser.BinaryScalarExpressionContext = BinaryScalarExpressionContext;

BinaryScalarExpressionContext.prototype.scalar_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Scalar_expressionContext);
    } else {
        return this.getTypedRuleContext(Scalar_expressionContext,i);
    }
};

BinaryScalarExpressionContext.prototype.binary_operator = function() {
    return this.getTypedRuleContext(Binary_operatorContext,0);
};
BinaryScalarExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterBinaryScalarExpression(this);
	}
};

BinaryScalarExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitBinaryScalarExpression(this);
	}
};


function PropertyRefScalarExpressionRecursiveContext(parser, ctx) {
	Scalar_expressionContext.call(this, parser);
    Scalar_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyRefScalarExpressionRecursiveContext.prototype = Object.create(Scalar_expressionContext.prototype);
PropertyRefScalarExpressionRecursiveContext.prototype.constructor = PropertyRefScalarExpressionRecursiveContext;

sqlParser.PropertyRefScalarExpressionRecursiveContext = PropertyRefScalarExpressionRecursiveContext;

PropertyRefScalarExpressionRecursiveContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

PropertyRefScalarExpressionRecursiveContext.prototype.IDENTIFIER = function() {
    return this.getToken(sqlParser.IDENTIFIER, 0);
};
PropertyRefScalarExpressionRecursiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterPropertyRefScalarExpressionRecursive(this);
	}
};

PropertyRefScalarExpressionRecursiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitPropertyRefScalarExpressionRecursive(this);
	}
};



sqlParser.prototype.scalar_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Scalar_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 44;
    this.enterRecursionRule(localctx, 44, sqlParser.RULE_scalar_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ArrayCreateScalarExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 196;
            this.match(sqlParser.T__5);
            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sqlParser.T__2) | (1 << sqlParser.T__5) | (1 << sqlParser.T__10) | (1 << sqlParser.T__12) | (1 << sqlParser.T__25) | (1 << sqlParser.T__26) | (1 << sqlParser.K_ARRAY))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (sqlParser.K_EXISTS - 36)) | (1 << (sqlParser.K_FALSE - 36)) | (1 << (sqlParser.K_NOT - 36)) | (1 << (sqlParser.K_NULL - 36)) | (1 << (sqlParser.K_TRUE - 36)) | (1 << (sqlParser.K_UDF - 36)) | (1 << (sqlParser.K_UNDEFINED - 36)) | (1 << (sqlParser.NUMERIC_LITERAL - 36)) | (1 << (sqlParser.STRING_LITERAL - 36)) | (1 << (sqlParser.IDENTIFIER - 36)))) !== 0)) {
                this.state = 197;
                this.scalar_expression_list();
            }

            this.state = 200;
            this.match(sqlParser.T__6);
            break;

        case 2:
            localctx = new ArrayScalarExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 201;
            this.match(sqlParser.K_ARRAY);
            this.state = 202;
            this.match(sqlParser.T__2);
            this.state = 203;
            this.sql_query();
            this.state = 204;
            this.match(sqlParser.T__3);
            break;

        case 3:
            localctx = new ExistsScalarExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 206;
            this.match(sqlParser.K_EXISTS);
            this.state = 207;
            this.match(sqlParser.T__2);
            this.state = 208;
            this.sql_query();
            this.state = 209;
            this.match(sqlParser.T__3);
            break;

        case 4:
            localctx = new FunctionCallScalarExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 213;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sqlParser.K_UDF) {
                this.state = 211;
                this.match(sqlParser.K_UDF);
                this.state = 212;
                this.match(sqlParser.T__4);
            }

            this.state = 215;
            this.match(sqlParser.IDENTIFIER);
            this.state = 216;
            this.match(sqlParser.T__2);
            this.state = 218;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sqlParser.T__2) | (1 << sqlParser.T__5) | (1 << sqlParser.T__10) | (1 << sqlParser.T__12) | (1 << sqlParser.T__25) | (1 << sqlParser.T__26) | (1 << sqlParser.K_ARRAY))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (sqlParser.K_EXISTS - 36)) | (1 << (sqlParser.K_FALSE - 36)) | (1 << (sqlParser.K_NOT - 36)) | (1 << (sqlParser.K_NULL - 36)) | (1 << (sqlParser.K_TRUE - 36)) | (1 << (sqlParser.K_UDF - 36)) | (1 << (sqlParser.K_UNDEFINED - 36)) | (1 << (sqlParser.NUMERIC_LITERAL - 36)) | (1 << (sqlParser.STRING_LITERAL - 36)) | (1 << (sqlParser.IDENTIFIER - 36)))) !== 0)) {
                this.state = 217;
                this.scalar_expression_list();
            }

            this.state = 220;
            this.match(sqlParser.T__3);
            break;

        case 5:
            localctx = new LiteralScalarExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 221;
            this.literal();
            break;

        case 6:
            localctx = new ObjectCreateScalarExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 222;
            this.match(sqlParser.T__10);
            this.state = 224;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sqlParser.STRING_LITERAL) {
                this.state = 223;
                this.object_propertty_list();
            }

            this.state = 226;
            this.match(sqlParser.T__11);
            break;

        case 7:
            localctx = new PropertyRefScalarExpressionBaseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 227;
            this.match(sqlParser.IDENTIFIER);
            break;

        case 8:
            localctx = new SubqueryScalarExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 228;
            this.match(sqlParser.T__2);
            this.state = 229;
            this.sql_query();
            this.state = 230;
            this.match(sqlParser.T__3);
            break;

        case 9:
            localctx = new UnaryScalarExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 232;
            this.unary_operator();
            this.state = 233;
            this.scalar_expression(1);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 278;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 276;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BetweenScalarExpressionContext(this, new Scalar_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_scalar_expression);
                    this.state = 237;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 239;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===sqlParser.K_NOT) {
                        this.state = 238;
                        this.match(sqlParser.K_NOT);
                    }

                    this.state = 241;
                    this.match(sqlParser.K_BETWEEN);
                    this.state = 242;
                    this.scalar_expression(0);
                    this.state = 243;
                    this.match(sqlParser.K_AND);
                    this.state = 244;
                    this.scalar_expression(15);
                    break;

                case 2:
                    localctx = new BinaryScalarExpressionContext(this, new Scalar_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_scalar_expression);
                    this.state = 246;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 247;
                    this.binary_operator();
                    this.state = 248;
                    this.scalar_expression(14);
                    break;

                case 3:
                    localctx = new CoalesceScalarExpressionContext(this, new Scalar_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_scalar_expression);
                    this.state = 250;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 251;
                    this.match(sqlParser.T__7);
                    this.state = 252;
                    this.scalar_expression(13);
                    break;

                case 4:
                    localctx = new ConditionalScalarExpressionContext(this, new Scalar_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_scalar_expression);
                    this.state = 253;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 254;
                    this.match(sqlParser.T__8);
                    this.state = 255;
                    this.scalar_expression(0);
                    this.state = 256;
                    this.match(sqlParser.T__9);
                    this.state = 257;
                    this.scalar_expression(12);
                    break;

                case 5:
                    localctx = new InScalarExpressionContext(this, new Scalar_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_scalar_expression);
                    this.state = 259;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 261;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===sqlParser.K_NOT) {
                        this.state = 260;
                        this.match(sqlParser.K_NOT);
                    }

                    this.state = 263;
                    this.match(sqlParser.K_IN);
                    this.state = 264;
                    this.match(sqlParser.T__2);
                    this.state = 265;
                    this.scalar_expression_list();
                    this.state = 266;
                    this.match(sqlParser.T__3);
                    break;

                case 6:
                    localctx = new MemberIndexerScalarExpressionContext(this, new Scalar_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_scalar_expression);
                    this.state = 268;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 269;
                    this.match(sqlParser.T__5);
                    this.state = 270;
                    this.scalar_expression(0);
                    this.state = 271;
                    this.match(sqlParser.T__6);
                    break;

                case 7:
                    localctx = new PropertyRefScalarExpressionRecursiveContext(this, new Scalar_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sqlParser.RULE_scalar_expression);
                    this.state = 273;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 274;
                    this.match(sqlParser.T__4);
                    this.state = 275;
                    this.match(sqlParser.IDENTIFIER);
                    break;

                } 
            }
            this.state = 280;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Scalar_expression_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_scalar_expression_list;
    return this;
}

Scalar_expression_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scalar_expression_listContext.prototype.constructor = Scalar_expression_listContext;

Scalar_expression_listContext.prototype.scalar_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Scalar_expressionContext);
    } else {
        return this.getTypedRuleContext(Scalar_expressionContext,i);
    }
};

Scalar_expression_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterScalar_expression_list(this);
	}
};

Scalar_expression_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitScalar_expression_list(this);
	}
};




sqlParser.Scalar_expression_listContext = Scalar_expression_listContext;

sqlParser.prototype.scalar_expression_list = function() {

    var localctx = new Scalar_expression_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, sqlParser.RULE_scalar_expression_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.scalar_expression(0);
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sqlParser.T__1) {
            this.state = 282;
            this.match(sqlParser.T__1);
            this.state = 283;
            this.scalar_expression(0);
            this.state = 288;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Binary_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_binary_operator;
    return this;
}

Binary_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_operatorContext.prototype.constructor = Binary_operatorContext;

Binary_operatorContext.prototype.K_AND = function() {
    return this.getToken(sqlParser.K_AND, 0);
};

Binary_operatorContext.prototype.K_OR = function() {
    return this.getToken(sqlParser.K_OR, 0);
};

Binary_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterBinary_operator(this);
	}
};

Binary_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitBinary_operator(this);
	}
};




sqlParser.Binary_operatorContext = Binary_operatorContext;

sqlParser.prototype.binary_operator = function() {

    var localctx = new Binary_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, sqlParser.RULE_binary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sqlParser.T__0) | (1 << sqlParser.T__12) | (1 << sqlParser.T__13) | (1 << sqlParser.T__14) | (1 << sqlParser.T__15) | (1 << sqlParser.T__16) | (1 << sqlParser.T__17) | (1 << sqlParser.T__18) | (1 << sqlParser.T__19) | (1 << sqlParser.T__20) | (1 << sqlParser.T__21) | (1 << sqlParser.T__22) | (1 << sqlParser.T__23) | (1 << sqlParser.T__24) | (1 << sqlParser.T__25) | (1 << sqlParser.K_AND))) !== 0) || _la===sqlParser.K_OR)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Unary_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_unary_operator;
    return this;
}

Unary_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_operatorContext.prototype.constructor = Unary_operatorContext;

Unary_operatorContext.prototype.K_NOT = function() {
    return this.getToken(sqlParser.K_NOT, 0);
};

Unary_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterUnary_operator(this);
	}
};

Unary_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitUnary_operator(this);
	}
};




sqlParser.Unary_operatorContext = Unary_operatorContext;

sqlParser.prototype.unary_operator = function() {

    var localctx = new Unary_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, sqlParser.RULE_unary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        _la = this._input.LA(1);
        if(!(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (sqlParser.T__12 - 13)) | (1 << (sqlParser.T__25 - 13)) | (1 << (sqlParser.T__26 - 13)) | (1 << (sqlParser.K_NOT - 13)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Object_propertty_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_object_propertty_list;
    return this;
}

Object_propertty_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_propertty_listContext.prototype.constructor = Object_propertty_listContext;

Object_propertty_listContext.prototype.object_property = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Object_propertyContext);
    } else {
        return this.getTypedRuleContext(Object_propertyContext,i);
    }
};

Object_propertty_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterObject_propertty_list(this);
	}
};

Object_propertty_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitObject_propertty_list(this);
	}
};




sqlParser.Object_propertty_listContext = Object_propertty_listContext;

sqlParser.prototype.object_propertty_list = function() {

    var localctx = new Object_propertty_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, sqlParser.RULE_object_propertty_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.object_property();
        this.state = 298;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sqlParser.T__1) {
            this.state = 294;
            this.match(sqlParser.T__1);
            this.state = 295;
            this.object_property();
            this.state = 300;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Object_propertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_object_property;
    return this;
}

Object_propertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_propertyContext.prototype.constructor = Object_propertyContext;

Object_propertyContext.prototype.STRING_LITERAL = function() {
    return this.getToken(sqlParser.STRING_LITERAL, 0);
};

Object_propertyContext.prototype.scalar_expression = function() {
    return this.getTypedRuleContext(Scalar_expressionContext,0);
};

Object_propertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterObject_property(this);
	}
};

Object_propertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitObject_property(this);
	}
};




sqlParser.Object_propertyContext = Object_propertyContext;

sqlParser.prototype.object_property = function() {

    var localctx = new Object_propertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, sqlParser.RULE_object_property);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(sqlParser.STRING_LITERAL);
        this.state = 302;
        this.match(sqlParser.T__9);
        this.state = 303;
        this.scalar_expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sqlParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.STRING_LITERAL = function() {
    return this.getToken(sqlParser.STRING_LITERAL, 0);
};

LiteralContext.prototype.NUMERIC_LITERAL = function() {
    return this.getToken(sqlParser.NUMERIC_LITERAL, 0);
};

LiteralContext.prototype.K_TRUE = function() {
    return this.getToken(sqlParser.K_TRUE, 0);
};

LiteralContext.prototype.K_FALSE = function() {
    return this.getToken(sqlParser.K_FALSE, 0);
};

LiteralContext.prototype.K_NULL = function() {
    return this.getToken(sqlParser.K_NULL, 0);
};

LiteralContext.prototype.K_UNDEFINED = function() {
    return this.getToken(sqlParser.K_UNDEFINED, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof sqlListener ) {
        listener.exitLiteral(this);
	}
};




sqlParser.LiteralContext = LiteralContext;

sqlParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, sqlParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        _la = this._input.LA(1);
        if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (sqlParser.K_FALSE - 37)) | (1 << (sqlParser.K_NULL - 37)) | (1 << (sqlParser.K_TRUE - 37)) | (1 << (sqlParser.K_UNDEFINED - 37)) | (1 << (sqlParser.NUMERIC_LITERAL - 37)) | (1 << (sqlParser.STRING_LITERAL - 37)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


sqlParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 10:
			return this.collection_expression_sempred(localctx, predIndex);
	case 12:
			return this.path_expression_sempred(localctx, predIndex);
	case 22:
			return this.scalar_expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

sqlParser.prototype.collection_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

sqlParser.prototype.path_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

sqlParser.prototype.scalar_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 14);
		case 5:
			return this.precpred(this._ctx, 13);
		case 6:
			return this.precpred(this._ctx, 12);
		case 7:
			return this.precpred(this._ctx, 11);
		case 8:
			return this.precpred(this._ctx, 8);
		case 9:
			return this.precpred(this._ctx, 6);
		case 10:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.sqlParser = sqlParser;
