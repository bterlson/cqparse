// Generated from .\sql.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002<\u0205\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0004H\tH\u0004I\tI\u0004J\tJ\u0004K\tK\u0004L\tL\u0004",
    "M\tM\u0004N\tN\u0004O\tO\u0004P\tP\u0004Q\tQ\u0004R\tR\u0004S\tS\u0004",
    "T\tT\u0004U\tU\u0004V\tV\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$",
    "\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003,\u0003,\u0003",
    ",\u0003,\u0003-\u0003-\u0003-\u0003-\u0003-\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u00030\u00030\u00030\u0003",
    "0\u00030\u00030\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u0003",
    "2\u00032\u00032\u00032\u00033\u00033\u00033\u00033\u00033\u00034\u0003",
    "4\u00034\u00034\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u0003",
    "5\u00035\u00035\u00036\u00036\u00036\u00036\u00036\u00036\u00037\u0003",
    "7\u00037\u00037\u00037\u00037\u00038\u00068\u017d\n8\r8\u000e8\u017e",
    "\u00038\u00038\u00039\u00059\u0184\n9\u00039\u00069\u0187\n9\r9\u000e",
    "9\u0188\u00039\u00039\u00079\u018d\n9\f9\u000e9\u0190\u000b9\u00059",
    "\u0192\n9\u00039\u00039\u00059\u0196\n9\u00039\u00069\u0199\n9\r9\u000e",
    "9\u019a\u00059\u019d\n9\u00039\u00059\u01a0\n9\u00039\u00039\u00069",
    "\u01a4\n9\r9\u000e9\u01a5\u00039\u00039\u00059\u01aa\n9\u00039\u0006",
    "9\u01ad\n9\r9\u000e9\u01ae\u00059\u01b1\n9\u00059\u01b3\n9\u0003:\u0003",
    ":\u0003:\u0003:\u0007:\u01b9\n:\f:\u000e:\u01bc\u000b:\u0003:\u0003",
    ":\u0003;\u0003;\u0003;\u0007;\u01c3\n;\f;\u000e;\u01c6\u000b;\u0003",
    ";\u0007;\u01c9\n;\f;\u000e;\u01cc\u000b;\u0005;\u01ce\n;\u0003<\u0003",
    "<\u0003=\u0003=\u0003>\u0003>\u0003?\u0003?\u0003@\u0003@\u0003A\u0003",
    "A\u0003B\u0003B\u0003C\u0003C\u0003D\u0003D\u0003E\u0003E\u0003F\u0003",
    "F\u0003G\u0003G\u0003H\u0003H\u0003I\u0003I\u0003J\u0003J\u0003K\u0003",
    "K\u0003L\u0003L\u0003M\u0003M\u0003N\u0003N\u0003O\u0003O\u0003P\u0003",
    "P\u0003Q\u0003Q\u0003R\u0003R\u0003S\u0003S\u0003T\u0003T\u0003U\u0003",
    "U\u0003V\u0003V\u0002\u0002W\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e",
    "\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016",
    "+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!",
    "A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q:s;u<w\u0002y\u0002",
    "{\u0002}\u0002\u007f\u0002\u0081\u0002\u0083\u0002\u0085\u0002\u0087",
    "\u0002\u0089\u0002\u008b\u0002\u008d\u0002\u008f\u0002\u0091\u0002\u0093",
    "\u0002\u0095\u0002\u0097\u0002\u0099\u0002\u009b\u0002\u009d\u0002\u009f",
    "\u0002\u00a1\u0002\u00a3\u0002\u00a5\u0002\u00a7\u0002\u00a9\u0002\u00ab",
    "\u0002\u0003\u0002\"\u0005\u0002\u000b\f\u000f\u000f\"\"\u0004\u0002",
    "--//\u0004\u0002$$))\u0003\u0002))\u0005\u0002C\\aac|\u0003\u00022;",
    "\u0004\u0002CCcc\u0004\u0002DDdd\u0004\u0002EEee\u0004\u0002FFff\u0004",
    "\u0002GGgg\u0004\u0002HHhh\u0004\u0002IIii\u0004\u0002JJjj\u0004\u0002",
    "KKkk\u0004\u0002LLll\u0004\u0002MMmm\u0004\u0002NNnn\u0004\u0002OOo",
    "o\u0004\u0002PPpp\u0004\u0002QQqq\u0004\u0002RRrr\u0004\u0002SSss\u0004",
    "\u0002TTtt\u0004\u0002UUuu\u0004\u0002VVvv\u0004\u0002WWww\u0004\u0002",
    "XXxx\u0004\u0002YYyy\u0004\u0002ZZzz\u0004\u0002[[{{\u0004\u0002\\\\",
    "||\u0002\u01fc\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003",
    "\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002",
    "\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002",
    "\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002",
    "\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002",
    "I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003",
    "\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002",
    "\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002\u0002",
    "\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002\u0002\u0002",
    "\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002\u0002\u0002",
    "_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002\u0002c\u0003",
    "\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002g\u0003\u0002",
    "\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002k\u0003\u0002\u0002",
    "\u0002\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003\u0002\u0002\u0002",
    "\u0002q\u0003\u0002\u0002\u0002\u0002s\u0003\u0002\u0002\u0002\u0002",
    "u\u0003\u0002\u0002\u0002\u0003\u00ad\u0003\u0002\u0002\u0002\u0005",
    "\u00af\u0003\u0002\u0002\u0002\u0007\u00b1\u0003\u0002\u0002\u0002\t",
    "\u00b3\u0003\u0002\u0002\u0002\u000b\u00b5\u0003\u0002\u0002\u0002\r",
    "\u00b7\u0003\u0002\u0002\u0002\u000f\u00b9\u0003\u0002\u0002\u0002\u0011",
    "\u00bb\u0003\u0002\u0002\u0002\u0013\u00be\u0003\u0002\u0002\u0002\u0015",
    "\u00c0\u0003\u0002\u0002\u0002\u0017\u00c2\u0003\u0002\u0002\u0002\u0019",
    "\u00c4\u0003\u0002\u0002\u0002\u001b\u00c6\u0003\u0002\u0002\u0002\u001d",
    "\u00c8\u0003\u0002\u0002\u0002\u001f\u00ca\u0003\u0002\u0002\u0002!",
    "\u00cc\u0003\u0002\u0002\u0002#\u00ce\u0003\u0002\u0002\u0002%\u00d0",
    "\u0003\u0002\u0002\u0002\'\u00d2\u0003\u0002\u0002\u0002)\u00d4\u0003",
    "\u0002\u0002\u0002+\u00d7\u0003\u0002\u0002\u0002-\u00d9\u0003\u0002",
    "\u0002\u0002/\u00dc\u0003\u0002\u0002\u00021\u00de\u0003\u0002\u0002",
    "\u00023\u00e1\u0003\u0002\u0002\u00025\u00e4\u0003\u0002\u0002\u0002",
    "7\u00e6\u0003\u0002\u0002\u00029\u00e8\u0003\u0002\u0002\u0002;\u00ec",
    "\u0003\u0002\u0002\u0002=\u00f2\u0003\u0002\u0002\u0002?\u00f5\u0003",
    "\u0002\u0002\u0002A\u00f9\u0003\u0002\u0002\u0002C\u0101\u0003\u0002",
    "\u0002\u0002E\u0104\u0003\u0002\u0002\u0002G\u0109\u0003\u0002\u0002",
    "\u0002I\u0112\u0003\u0002\u0002\u0002K\u0119\u0003\u0002\u0002\u0002",
    "M\u011f\u0003\u0002\u0002\u0002O\u0124\u0003\u0002\u0002\u0002Q\u012a",
    "\u0003\u0002\u0002\u0002S\u012d\u0003\u0002\u0002\u0002U\u0132\u0003",
    "\u0002\u0002\u0002W\u0138\u0003\u0002\u0002\u0002Y\u013c\u0003\u0002",
    "\u0002\u0002[\u0141\u0003\u0002\u0002\u0002]\u0148\u0003\u0002\u0002",
    "\u0002_\u014b\u0003\u0002\u0002\u0002a\u0151\u0003\u0002\u0002\u0002",
    "c\u0158\u0003\u0002\u0002\u0002e\u015c\u0003\u0002\u0002\u0002g\u0161",
    "\u0003\u0002\u0002\u0002i\u0165\u0003\u0002\u0002\u0002k\u016f\u0003",
    "\u0002\u0002\u0002m\u0175\u0003\u0002\u0002\u0002o\u017c\u0003\u0002",
    "\u0002\u0002q\u01b2\u0003\u0002\u0002\u0002s\u01b4\u0003\u0002\u0002",
    "\u0002u\u01cd\u0003\u0002\u0002\u0002w\u01cf\u0003\u0002\u0002\u0002",
    "y\u01d1\u0003\u0002\u0002\u0002{\u01d3\u0003\u0002\u0002\u0002}\u01d5",
    "\u0003\u0002\u0002\u0002\u007f\u01d7\u0003\u0002\u0002\u0002\u0081\u01d9",
    "\u0003\u0002\u0002\u0002\u0083\u01db\u0003\u0002\u0002\u0002\u0085\u01dd",
    "\u0003\u0002\u0002\u0002\u0087\u01df\u0003\u0002\u0002\u0002\u0089\u01e1",
    "\u0003\u0002\u0002\u0002\u008b\u01e3\u0003\u0002\u0002\u0002\u008d\u01e5",
    "\u0003\u0002\u0002\u0002\u008f\u01e7\u0003\u0002\u0002\u0002\u0091\u01e9",
    "\u0003\u0002\u0002\u0002\u0093\u01eb\u0003\u0002\u0002\u0002\u0095\u01ed",
    "\u0003\u0002\u0002\u0002\u0097\u01ef\u0003\u0002\u0002\u0002\u0099\u01f1",
    "\u0003\u0002\u0002\u0002\u009b\u01f3\u0003\u0002\u0002\u0002\u009d\u01f5",
    "\u0003\u0002\u0002\u0002\u009f\u01f7\u0003\u0002\u0002\u0002\u00a1\u01f9",
    "\u0003\u0002\u0002\u0002\u00a3\u01fb\u0003\u0002\u0002\u0002\u00a5\u01fd",
    "\u0003\u0002\u0002\u0002\u00a7\u01ff\u0003\u0002\u0002\u0002\u00a9\u0201",
    "\u0003\u0002\u0002\u0002\u00ab\u0203\u0003\u0002\u0002\u0002\u00ad\u00ae",
    "\u0007,\u0002\u0002\u00ae\u0004\u0003\u0002\u0002\u0002\u00af\u00b0",
    "\u0007.\u0002\u0002\u00b0\u0006\u0003\u0002\u0002\u0002\u00b1\u00b2",
    "\u0007*\u0002\u0002\u00b2\b\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007",
    "+\u0002\u0002\u00b4\n\u0003\u0002\u0002\u0002\u00b5\u00b6\u00070\u0002",
    "\u0002\u00b6\f\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007]\u0002\u0002",
    "\u00b8\u000e\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007_\u0002\u0002",
    "\u00ba\u0010\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007A\u0002\u0002",
    "\u00bc\u00bd\u0007A\u0002\u0002\u00bd\u0012\u0003\u0002\u0002\u0002",
    "\u00be\u00bf\u0007A\u0002\u0002\u00bf\u0014\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0007<\u0002\u0002\u00c1\u0016\u0003\u0002\u0002\u0002",
    "\u00c2\u00c3\u0007}\u0002\u0002\u00c3\u0018\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\u0007\u007f\u0002\u0002\u00c5\u001a\u0003\u0002\u0002\u0002",
    "\u00c6\u00c7\u0007-\u0002\u0002\u00c7\u001c\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0007(\u0002\u0002\u00c9\u001e\u0003\u0002\u0002\u0002",
    "\u00ca\u00cb\u0007~\u0002\u0002\u00cb \u0003\u0002\u0002\u0002\u00cc",
    "\u00cd\u0007`\u0002\u0002\u00cd\"\u0003\u0002\u0002\u0002\u00ce\u00cf",
    "\u00071\u0002\u0002\u00cf$\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007",
    "?\u0002\u0002\u00d1&\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007@\u0002",
    "\u0002\u00d3(\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007@\u0002\u0002",
    "\u00d5\u00d6\u0007?\u0002\u0002\u00d6*\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\u0007>\u0002\u0002\u00d8,\u0003\u0002\u0002\u0002\u00d9\u00da",
    "\u0007>\u0002\u0002\u00da\u00db\u0007?\u0002\u0002\u00db.\u0003\u0002",
    "\u0002\u0002\u00dc\u00dd\u0007\'\u0002\u0002\u00dd0\u0003\u0002\u0002",
    "\u0002\u00de\u00df\u0007#\u0002\u0002\u00df\u00e0\u0007?\u0002\u0002",
    "\u00e02\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007~\u0002\u0002\u00e2",
    "\u00e3\u0007~\u0002\u0002\u00e34\u0003\u0002\u0002\u0002\u00e4\u00e5",
    "\u0007/\u0002\u0002\u00e56\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007",
    "\u0080\u0002\u0002\u00e78\u0003\u0002\u0002\u0002\u00e8\u00e9\u0005",
    "y=\u0002\u00e9\u00ea\u0005\u0093J\u0002\u00ea\u00eb\u0005\u007f@\u0002",
    "\u00eb:\u0003\u0002\u0002\u0002\u00ec\u00ed\u0005y=\u0002\u00ed\u00ee",
    "\u0005\u009bN\u0002\u00ee\u00ef\u0005\u009bN\u0002\u00ef\u00f0\u0005",
    "y=\u0002\u00f0\u00f1\u0005\u00a9U\u0002\u00f1<\u0003\u0002\u0002\u0002",
    "\u00f2\u00f3\u0005y=\u0002\u00f3\u00f4\u0005\u009dO\u0002\u00f4>\u0003",
    "\u0002\u0002\u0002\u00f5\u00f6\u0005y=\u0002\u00f6\u00f7\u0005\u009d",
    "O\u0002\u00f7\u00f8\u0005}?\u0002\u00f8@\u0003\u0002\u0002\u0002\u00f9",
    "\u00fa\u0005{>\u0002\u00fa\u00fb\u0005\u0081A\u0002\u00fb\u00fc\u0005",
    "\u009fP\u0002\u00fc\u00fd\u0005\u00a5S\u0002\u00fd\u00fe\u0005\u0081",
    "A\u0002\u00fe\u00ff\u0005\u0081A\u0002\u00ff\u0100\u0005\u0093J\u0002",
    "\u0100B\u0003\u0002\u0002\u0002\u0101\u0102\u0005{>\u0002\u0102\u0103",
    "\u0005\u00a9U\u0002\u0103D\u0003\u0002\u0002\u0002\u0104\u0105\u0005",
    "\u007f@\u0002\u0105\u0106\u0005\u0081A\u0002\u0106\u0107\u0005\u009d",
    "O\u0002\u0107\u0108\u0005}?\u0002\u0108F\u0003\u0002\u0002\u0002\u0109",
    "\u010a\u0005\u007f@\u0002\u010a\u010b\u0005\u0089E\u0002\u010b\u010c",
    "\u0005\u009dO\u0002\u010c\u010d\u0005\u009fP\u0002\u010d\u010e\u0005",
    "\u0089E\u0002\u010e\u010f\u0005\u0093J\u0002\u010f\u0110\u0005}?\u0002",
    "\u0110\u0111\u0005\u009fP\u0002\u0111H\u0003\u0002\u0002\u0002\u0112",
    "\u0113\u0005\u0081A\u0002\u0113\u0114\u0005\u00a7T\u0002\u0114\u0115",
    "\u0005\u0089E\u0002\u0115\u0116\u0005\u009dO\u0002\u0116\u0117\u0005",
    "\u009fP\u0002\u0117\u0118\u0005\u009dO\u0002\u0118J\u0003\u0002\u0002",
    "\u0002\u0119\u011a\u0007h\u0002\u0002\u011a\u011b\u0007c\u0002\u0002",
    "\u011b\u011c\u0007n\u0002\u0002\u011c\u011d\u0007u\u0002\u0002\u011d",
    "\u011e\u0007g\u0002\u0002\u011eL\u0003\u0002\u0002\u0002\u011f\u0120",
    "\u0005\u0083B\u0002\u0120\u0121\u0005\u009bN\u0002\u0121\u0122\u0005",
    "\u0095K\u0002\u0122\u0123\u0005\u0091I\u0002\u0123N\u0003\u0002\u0002",
    "\u0002\u0124\u0125\u0005\u0085C\u0002\u0125\u0126\u0005\u009bN\u0002",
    "\u0126\u0127\u0005\u0095K\u0002\u0127\u0128\u0005\u00a1Q\u0002\u0128",
    "\u0129\u0005\u0097L\u0002\u0129P\u0003\u0002\u0002\u0002\u012a\u012b",
    "\u0005\u0089E\u0002\u012b\u012c\u0005\u0093J\u0002\u012cR\u0003\u0002",
    "\u0002\u0002\u012d\u012e\u0005\u008bF\u0002\u012e\u012f\u0005\u0095",
    "K\u0002\u012f\u0130\u0005\u0089E\u0002\u0130\u0131\u0005\u0093J\u0002",
    "\u0131T\u0003\u0002\u0002\u0002\u0132\u0133\u0005\u008fH\u0002\u0133",
    "\u0134\u0005\u0089E\u0002\u0134\u0135\u0005\u0091I\u0002\u0135\u0136",
    "\u0005\u0089E\u0002\u0136\u0137\u0005\u009fP\u0002\u0137V\u0003\u0002",
    "\u0002\u0002\u0138\u0139\u0005\u0093J\u0002\u0139\u013a\u0005\u0095",
    "K\u0002\u013a\u013b\u0005\u009fP\u0002\u013bX\u0003\u0002\u0002\u0002",
    "\u013c\u013d\u0007p\u0002\u0002\u013d\u013e\u0007w\u0002\u0002\u013e",
    "\u013f\u0007n\u0002\u0002\u013f\u0140\u0007n\u0002\u0002\u0140Z\u0003",
    "\u0002\u0002\u0002\u0141\u0142\u0005\u0095K\u0002\u0142\u0143\u0005",
    "\u0083B\u0002\u0143\u0144\u0005\u0083B\u0002\u0144\u0145\u0005\u009d",
    "O\u0002\u0145\u0146\u0005\u0081A\u0002\u0146\u0147\u0005\u009fP\u0002",
    "\u0147\\\u0003\u0002\u0002\u0002\u0148\u0149\u0005\u0095K\u0002\u0149",
    "\u014a\u0005\u009bN\u0002\u014a^\u0003\u0002\u0002\u0002\u014b\u014c",
    "\u0005\u0095K\u0002\u014c\u014d\u0005\u009bN\u0002\u014d\u014e\u0005",
    "\u007f@\u0002\u014e\u014f\u0005\u0081A\u0002\u014f\u0150\u0005\u009b",
    "N\u0002\u0150`\u0003\u0002\u0002\u0002\u0151\u0152\u0005\u009dO\u0002",
    "\u0152\u0153\u0005\u0081A\u0002\u0153\u0154\u0005\u008fH\u0002\u0154",
    "\u0155\u0005\u0081A\u0002\u0155\u0156\u0005}?\u0002\u0156\u0157\u0005",
    "\u009fP\u0002\u0157b\u0003\u0002\u0002\u0002\u0158\u0159\u0005\u009f",
    "P\u0002\u0159\u015a\u0005\u0095K\u0002\u015a\u015b\u0005\u0097L\u0002",
    "\u015bd\u0003\u0002\u0002\u0002\u015c\u015d\u0007v\u0002\u0002\u015d",
    "\u015e\u0007t\u0002\u0002\u015e\u015f\u0007w\u0002\u0002\u015f\u0160",
    "\u0007g\u0002\u0002\u0160f\u0003\u0002\u0002\u0002\u0161\u0162\u0005",
    "\u00a1Q\u0002\u0162\u0163\u0005\u007f@\u0002\u0163\u0164\u0005\u0083",
    "B\u0002\u0164h\u0003\u0002\u0002\u0002\u0165\u0166\u0007w\u0002\u0002",
    "\u0166\u0167\u0007p\u0002\u0002\u0167\u0168\u0007f\u0002\u0002\u0168",
    "\u0169\u0007g\u0002\u0002\u0169\u016a\u0007h\u0002\u0002\u016a\u016b",
    "\u0007k\u0002\u0002\u016b\u016c\u0007p\u0002\u0002\u016c\u016d\u0007",
    "g\u0002\u0002\u016d\u016e\u0007f\u0002\u0002\u016ej\u0003\u0002\u0002",
    "\u0002\u016f\u0170\u0005\u00a3R\u0002\u0170\u0171\u0005y=\u0002\u0171",
    "\u0172\u0005\u008fH\u0002\u0172\u0173\u0005\u00a1Q\u0002\u0173\u0174",
    "\u0005\u0081A\u0002\u0174l\u0003\u0002\u0002\u0002\u0175\u0176\u0005",
    "\u00a5S\u0002\u0176\u0177\u0005\u0087D\u0002\u0177\u0178\u0005\u0081",
    "A\u0002\u0178\u0179\u0005\u009bN\u0002\u0179\u017a\u0005\u0081A\u0002",
    "\u017an\u0003\u0002\u0002\u0002\u017b\u017d\t\u0002\u0002\u0002\u017c",
    "\u017b\u0003\u0002\u0002\u0002\u017d\u017e\u0003\u0002\u0002\u0002\u017e",
    "\u017c\u0003\u0002\u0002\u0002\u017e\u017f\u0003\u0002\u0002\u0002\u017f",
    "\u0180\u0003\u0002\u0002\u0002\u0180\u0181\b8\u0002\u0002\u0181p\u0003",
    "\u0002\u0002\u0002\u0182\u0184\t\u0003\u0002\u0002\u0183\u0182\u0003",
    "\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0186\u0003",
    "\u0002\u0002\u0002\u0185\u0187\u0005w<\u0002\u0186\u0185\u0003\u0002",
    "\u0002\u0002\u0187\u0188\u0003\u0002\u0002\u0002\u0188\u0186\u0003\u0002",
    "\u0002\u0002\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u0191\u0003\u0002",
    "\u0002\u0002\u018a\u018e\u00070\u0002\u0002\u018b\u018d\u0005w<\u0002",
    "\u018c\u018b\u0003\u0002\u0002\u0002\u018d\u0190\u0003\u0002\u0002\u0002",
    "\u018e\u018c\u0003\u0002\u0002\u0002\u018e\u018f\u0003\u0002\u0002\u0002",
    "\u018f\u0192\u0003\u0002\u0002\u0002\u0190\u018e\u0003\u0002\u0002\u0002",
    "\u0191\u018a\u0003\u0002\u0002\u0002\u0191\u0192\u0003\u0002\u0002\u0002",
    "\u0192\u019c\u0003\u0002\u0002\u0002\u0193\u0195\u0005\u0081A\u0002",
    "\u0194\u0196\t\u0003\u0002\u0002\u0195\u0194\u0003\u0002\u0002\u0002",
    "\u0195\u0196\u0003\u0002\u0002\u0002\u0196\u0198\u0003\u0002\u0002\u0002",
    "\u0197\u0199\u0005w<\u0002\u0198\u0197\u0003\u0002\u0002\u0002\u0199",
    "\u019a\u0003\u0002\u0002\u0002\u019a\u0198\u0003\u0002\u0002\u0002\u019a",
    "\u019b\u0003\u0002\u0002\u0002\u019b\u019d\u0003\u0002\u0002\u0002\u019c",
    "\u0193\u0003\u0002\u0002\u0002\u019c\u019d\u0003\u0002\u0002\u0002\u019d",
    "\u01b3\u0003\u0002\u0002\u0002\u019e\u01a0\t\u0003\u0002\u0002\u019f",
    "\u019e\u0003\u0002\u0002\u0002\u019f\u01a0\u0003\u0002\u0002\u0002\u01a0",
    "\u01a1\u0003\u0002\u0002\u0002\u01a1\u01a3\u00070\u0002\u0002\u01a2",
    "\u01a4\u0005w<\u0002\u01a3\u01a2\u0003\u0002\u0002\u0002\u01a4\u01a5",
    "\u0003\u0002\u0002\u0002\u01a5\u01a3\u0003\u0002\u0002\u0002\u01a5\u01a6",
    "\u0003\u0002\u0002\u0002\u01a6\u01b0\u0003\u0002\u0002\u0002\u01a7\u01a9",
    "\u0005\u0081A\u0002\u01a8\u01aa\t\u0003\u0002\u0002\u01a9\u01a8\u0003",
    "\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002\u01aa\u01ac\u0003",
    "\u0002\u0002\u0002\u01ab\u01ad\u0005w<\u0002\u01ac\u01ab\u0003\u0002",
    "\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae\u01ac\u0003\u0002",
    "\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01af\u01b1\u0003\u0002",
    "\u0002\u0002\u01b0\u01a7\u0003\u0002\u0002\u0002\u01b0\u01b1\u0003\u0002",
    "\u0002\u0002\u01b1\u01b3\u0003\u0002\u0002\u0002\u01b2\u0183\u0003\u0002",
    "\u0002\u0002\u01b2\u019f\u0003\u0002\u0002\u0002\u01b3r\u0003\u0002",
    "\u0002\u0002\u01b4\u01ba\t\u0004\u0002\u0002\u01b5\u01b9\n\u0005\u0002",
    "\u0002\u01b6\u01b7\u0007)\u0002\u0002\u01b7\u01b9\u0007)\u0002\u0002",
    "\u01b8\u01b5\u0003\u0002\u0002\u0002\u01b8\u01b6\u0003\u0002\u0002\u0002",
    "\u01b9\u01bc\u0003\u0002\u0002\u0002\u01ba\u01b8\u0003\u0002\u0002\u0002",
    "\u01ba\u01bb\u0003\u0002\u0002\u0002\u01bb\u01bd\u0003\u0002\u0002\u0002",
    "\u01bc\u01ba\u0003\u0002\u0002\u0002\u01bd\u01be\t\u0004\u0002\u0002",
    "\u01bet\u0003\u0002\u0002\u0002\u01bf\u01ce\u0003\u0002\u0002\u0002",
    "\u01c0\u01c4\t\u0006\u0002\u0002\u01c1\u01c3\t\u0006\u0002\u0002\u01c2",
    "\u01c1\u0003\u0002\u0002\u0002\u01c3\u01c6\u0003\u0002\u0002\u0002\u01c4",
    "\u01c2\u0003\u0002\u0002\u0002\u01c4\u01c5\u0003\u0002\u0002\u0002\u01c5",
    "\u01ca\u0003\u0002\u0002\u0002\u01c6\u01c4\u0003\u0002\u0002\u0002\u01c7",
    "\u01c9\u0005w<\u0002\u01c8\u01c7\u0003\u0002\u0002\u0002\u01c9\u01cc",
    "\u0003\u0002\u0002\u0002\u01ca\u01c8\u0003\u0002\u0002\u0002\u01ca\u01cb",
    "\u0003\u0002\u0002\u0002\u01cb\u01ce\u0003\u0002\u0002\u0002\u01cc\u01ca",
    "\u0003\u0002\u0002\u0002\u01cd\u01bf\u0003\u0002\u0002\u0002\u01cd\u01c0",
    "\u0003\u0002\u0002\u0002\u01cev\u0003\u0002\u0002\u0002\u01cf\u01d0",
    "\t\u0007\u0002\u0002\u01d0x\u0003\u0002\u0002\u0002\u01d1\u01d2\t\b",
    "\u0002\u0002\u01d2z\u0003\u0002\u0002\u0002\u01d3\u01d4\t\t\u0002\u0002",
    "\u01d4|\u0003\u0002\u0002\u0002\u01d5\u01d6\t\n\u0002\u0002\u01d6~\u0003",
    "\u0002\u0002\u0002\u01d7\u01d8\t\u000b\u0002\u0002\u01d8\u0080\u0003",
    "\u0002\u0002\u0002\u01d9\u01da\t\f\u0002\u0002\u01da\u0082\u0003\u0002",
    "\u0002\u0002\u01db\u01dc\t\r\u0002\u0002\u01dc\u0084\u0003\u0002\u0002",
    "\u0002\u01dd\u01de\t\u000e\u0002\u0002\u01de\u0086\u0003\u0002\u0002",
    "\u0002\u01df\u01e0\t\u000f\u0002\u0002\u01e0\u0088\u0003\u0002\u0002",
    "\u0002\u01e1\u01e2\t\u0010\u0002\u0002\u01e2\u008a\u0003\u0002\u0002",
    "\u0002\u01e3\u01e4\t\u0011\u0002\u0002\u01e4\u008c\u0003\u0002\u0002",
    "\u0002\u01e5\u01e6\t\u0012\u0002\u0002\u01e6\u008e\u0003\u0002\u0002",
    "\u0002\u01e7\u01e8\t\u0013\u0002\u0002\u01e8\u0090\u0003\u0002\u0002",
    "\u0002\u01e9\u01ea\t\u0014\u0002\u0002\u01ea\u0092\u0003\u0002\u0002",
    "\u0002\u01eb\u01ec\t\u0015\u0002\u0002\u01ec\u0094\u0003\u0002\u0002",
    "\u0002\u01ed\u01ee\t\u0016\u0002\u0002\u01ee\u0096\u0003\u0002\u0002",
    "\u0002\u01ef\u01f0\t\u0017\u0002\u0002\u01f0\u0098\u0003\u0002\u0002",
    "\u0002\u01f1\u01f2\t\u0018\u0002\u0002\u01f2\u009a\u0003\u0002\u0002",
    "\u0002\u01f3\u01f4\t\u0019\u0002\u0002\u01f4\u009c\u0003\u0002\u0002",
    "\u0002\u01f5\u01f6\t\u001a\u0002\u0002\u01f6\u009e\u0003\u0002\u0002",
    "\u0002\u01f7\u01f8\t\u001b\u0002\u0002\u01f8\u00a0\u0003\u0002\u0002",
    "\u0002\u01f9\u01fa\t\u001c\u0002\u0002\u01fa\u00a2\u0003\u0002\u0002",
    "\u0002\u01fb\u01fc\t\u001d\u0002\u0002\u01fc\u00a4\u0003\u0002\u0002",
    "\u0002\u01fd\u01fe\t\u001e\u0002\u0002\u01fe\u00a6\u0003\u0002\u0002",
    "\u0002\u01ff\u0200\t\u001f\u0002\u0002\u0200\u00a8\u0003\u0002\u0002",
    "\u0002\u0201\u0202\t \u0002\u0002\u0202\u00aa\u0003\u0002\u0002\u0002",
    "\u0203\u0204\t!\u0002\u0002\u0204\u00ac\u0003\u0002\u0002\u0002\u0016",
    "\u0002\u017e\u0183\u0188\u018e\u0191\u0195\u019a\u019c\u019f\u01a5\u01a9",
    "\u01ae\u01b0\u01b2\u01b8\u01ba\u01c4\u01ca\u01cd\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function sqlLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

sqlLexer.prototype = Object.create(antlr4.Lexer.prototype);
sqlLexer.prototype.constructor = sqlLexer;

Object.defineProperty(sqlLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

sqlLexer.EOF = antlr4.Token.EOF;
sqlLexer.T__0 = 1;
sqlLexer.T__1 = 2;
sqlLexer.T__2 = 3;
sqlLexer.T__3 = 4;
sqlLexer.T__4 = 5;
sqlLexer.T__5 = 6;
sqlLexer.T__6 = 7;
sqlLexer.T__7 = 8;
sqlLexer.T__8 = 9;
sqlLexer.T__9 = 10;
sqlLexer.T__10 = 11;
sqlLexer.T__11 = 12;
sqlLexer.T__12 = 13;
sqlLexer.T__13 = 14;
sqlLexer.T__14 = 15;
sqlLexer.T__15 = 16;
sqlLexer.T__16 = 17;
sqlLexer.T__17 = 18;
sqlLexer.T__18 = 19;
sqlLexer.T__19 = 20;
sqlLexer.T__20 = 21;
sqlLexer.T__21 = 22;
sqlLexer.T__22 = 23;
sqlLexer.T__23 = 24;
sqlLexer.T__24 = 25;
sqlLexer.T__25 = 26;
sqlLexer.T__26 = 27;
sqlLexer.K_AND = 28;
sqlLexer.K_ARRAY = 29;
sqlLexer.K_AS = 30;
sqlLexer.K_ASC = 31;
sqlLexer.K_BETWEEN = 32;
sqlLexer.K_BY = 33;
sqlLexer.K_DESC = 34;
sqlLexer.K_DISTINCT = 35;
sqlLexer.K_EXISTS = 36;
sqlLexer.K_FALSE = 37;
sqlLexer.K_FROM = 38;
sqlLexer.K_GROUP = 39;
sqlLexer.K_IN = 40;
sqlLexer.K_JOIN = 41;
sqlLexer.K_LIMIT = 42;
sqlLexer.K_NOT = 43;
sqlLexer.K_NULL = 44;
sqlLexer.K_OFFSET = 45;
sqlLexer.K_OR = 46;
sqlLexer.K_ORDER = 47;
sqlLexer.K_SELECT = 48;
sqlLexer.K_TOP = 49;
sqlLexer.K_TRUE = 50;
sqlLexer.K_UDF = 51;
sqlLexer.K_UNDEFINED = 52;
sqlLexer.K_VALUE = 53;
sqlLexer.K_WHERE = 54;
sqlLexer.WS = 55;
sqlLexer.NUMERIC_LITERAL = 56;
sqlLexer.STRING_LITERAL = 57;
sqlLexer.IDENTIFIER = 58;

sqlLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

sqlLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

sqlLexer.prototype.literalNames = [ null, "'*'", "','", "'('", "')'", "'.'", 
                                    "'['", "']'", "'??'", "'?'", "':'", 
                                    "'{'", "'}'", "'+'", "'&'", "'|'", "'^'", 
                                    "'/'", "'='", "'>'", "'>='", "'<'", 
                                    "'<='", "'%'", "'!='", "'||'", "'-'", 
                                    "'~'", null, null, null, null, null, 
                                    null, null, null, null, "'false'", null, 
                                    null, null, null, null, null, "'null'", 
                                    null, null, null, null, null, "'true'", 
                                    null, "'undefined'" ];

sqlLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                     null, null, null, null, null, null, 
                                     null, null, null, null, null, null, 
                                     null, null, null, null, null, null, 
                                     null, null, null, null, "K_AND", "K_ARRAY", 
                                     "K_AS", "K_ASC", "K_BETWEEN", "K_BY", 
                                     "K_DESC", "K_DISTINCT", "K_EXISTS", 
                                     "K_FALSE", "K_FROM", "K_GROUP", "K_IN", 
                                     "K_JOIN", "K_LIMIT", "K_NOT", "K_NULL", 
                                     "K_OFFSET", "K_OR", "K_ORDER", "K_SELECT", 
                                     "K_TOP", "K_TRUE", "K_UDF", "K_UNDEFINED", 
                                     "K_VALUE", "K_WHERE", "WS", "NUMERIC_LITERAL", 
                                     "STRING_LITERAL", "IDENTIFIER" ];

sqlLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                 "T__5", "T__6", "T__7", "T__8", "T__9", 
                                 "T__10", "T__11", "T__12", "T__13", "T__14", 
                                 "T__15", "T__16", "T__17", "T__18", "T__19", 
                                 "T__20", "T__21", "T__22", "T__23", "T__24", 
                                 "T__25", "T__26", "K_AND", "K_ARRAY", "K_AS", 
                                 "K_ASC", "K_BETWEEN", "K_BY", "K_DESC", 
                                 "K_DISTINCT", "K_EXISTS", "K_FALSE", "K_FROM", 
                                 "K_GROUP", "K_IN", "K_JOIN", "K_LIMIT", 
                                 "K_NOT", "K_NULL", "K_OFFSET", "K_OR", 
                                 "K_ORDER", "K_SELECT", "K_TOP", "K_TRUE", 
                                 "K_UDF", "K_UNDEFINED", "K_VALUE", "K_WHERE", 
                                 "WS", "NUMERIC_LITERAL", "STRING_LITERAL", 
                                 "IDENTIFIER", "DIGIT", "A", "B", "C", "D", 
                                 "E", "F", "G", "H", "I", "J", "K", "L", 
                                 "M", "N", "O", "P", "Q", "R", "S", "T", 
                                 "U", "V", "W", "X", "Y", "Z" ];

sqlLexer.prototype.grammarFileName = "sql.g4";


exports.sqlLexer = sqlLexer;

