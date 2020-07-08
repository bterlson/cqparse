// Generated from .\sql.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by sqlParser.
function sqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

sqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
sqlListener.prototype.constructor = sqlListener;

// Enter a parse tree produced by sqlParser#program.
sqlListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by sqlParser#program.
sqlListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by sqlParser#sql_query.
sqlListener.prototype.enterSql_query = function(ctx) {
};

// Exit a parse tree produced by sqlParser#sql_query.
sqlListener.prototype.exitSql_query = function(ctx) {
};


// Enter a parse tree produced by sqlParser#select_clause.
sqlListener.prototype.enterSelect_clause = function(ctx) {
};

// Exit a parse tree produced by sqlParser#select_clause.
sqlListener.prototype.exitSelect_clause = function(ctx) {
};


// Enter a parse tree produced by sqlParser#top_spec.
sqlListener.prototype.enterTop_spec = function(ctx) {
};

// Exit a parse tree produced by sqlParser#top_spec.
sqlListener.prototype.exitTop_spec = function(ctx) {
};


// Enter a parse tree produced by sqlParser#selection.
sqlListener.prototype.enterSelection = function(ctx) {
};

// Exit a parse tree produced by sqlParser#selection.
sqlListener.prototype.exitSelection = function(ctx) {
};


// Enter a parse tree produced by sqlParser#select_star_spec.
sqlListener.prototype.enterSelect_star_spec = function(ctx) {
};

// Exit a parse tree produced by sqlParser#select_star_spec.
sqlListener.prototype.exitSelect_star_spec = function(ctx) {
};


// Enter a parse tree produced by sqlParser#select_value_spec.
sqlListener.prototype.enterSelect_value_spec = function(ctx) {
};

// Exit a parse tree produced by sqlParser#select_value_spec.
sqlListener.prototype.exitSelect_value_spec = function(ctx) {
};


// Enter a parse tree produced by sqlParser#select_list_spec.
sqlListener.prototype.enterSelect_list_spec = function(ctx) {
};

// Exit a parse tree produced by sqlParser#select_list_spec.
sqlListener.prototype.exitSelect_list_spec = function(ctx) {
};


// Enter a parse tree produced by sqlParser#select_item.
sqlListener.prototype.enterSelect_item = function(ctx) {
};

// Exit a parse tree produced by sqlParser#select_item.
sqlListener.prototype.exitSelect_item = function(ctx) {
};


// Enter a parse tree produced by sqlParser#from_clause.
sqlListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by sqlParser#from_clause.
sqlListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by sqlParser#JoinCollectionExpression.
sqlListener.prototype.enterJoinCollectionExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#JoinCollectionExpression.
sqlListener.prototype.exitJoinCollectionExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#AliasedCollectionExpression.
sqlListener.prototype.enterAliasedCollectionExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#AliasedCollectionExpression.
sqlListener.prototype.exitAliasedCollectionExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#ArrayIteratorCollectionExpression.
sqlListener.prototype.enterArrayIteratorCollectionExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#ArrayIteratorCollectionExpression.
sqlListener.prototype.exitArrayIteratorCollectionExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#InputPathCollection.
sqlListener.prototype.enterInputPathCollection = function(ctx) {
};

// Exit a parse tree produced by sqlParser#InputPathCollection.
sqlListener.prototype.exitInputPathCollection = function(ctx) {
};


// Enter a parse tree produced by sqlParser#SubqueryCollection.
sqlListener.prototype.enterSubqueryCollection = function(ctx) {
};

// Exit a parse tree produced by sqlParser#SubqueryCollection.
sqlListener.prototype.exitSubqueryCollection = function(ctx) {
};


// Enter a parse tree produced by sqlParser#StringPathExpression.
sqlListener.prototype.enterStringPathExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#StringPathExpression.
sqlListener.prototype.exitStringPathExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#EpsilonPathExpression.
sqlListener.prototype.enterEpsilonPathExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#EpsilonPathExpression.
sqlListener.prototype.exitEpsilonPathExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#IdentifierPathExpression.
sqlListener.prototype.enterIdentifierPathExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#IdentifierPathExpression.
sqlListener.prototype.exitIdentifierPathExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#NumberPathExpression.
sqlListener.prototype.enterNumberPathExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#NumberPathExpression.
sqlListener.prototype.exitNumberPathExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#where_clause.
sqlListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by sqlParser#where_clause.
sqlListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by sqlParser#group_by_clause.
sqlListener.prototype.enterGroup_by_clause = function(ctx) {
};

// Exit a parse tree produced by sqlParser#group_by_clause.
sqlListener.prototype.exitGroup_by_clause = function(ctx) {
};


// Enter a parse tree produced by sqlParser#order_by_clause.
sqlListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by sqlParser#order_by_clause.
sqlListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by sqlParser#order_by_items.
sqlListener.prototype.enterOrder_by_items = function(ctx) {
};

// Exit a parse tree produced by sqlParser#order_by_items.
sqlListener.prototype.exitOrder_by_items = function(ctx) {
};


// Enter a parse tree produced by sqlParser#order_by_item.
sqlListener.prototype.enterOrder_by_item = function(ctx) {
};

// Exit a parse tree produced by sqlParser#order_by_item.
sqlListener.prototype.exitOrder_by_item = function(ctx) {
};


// Enter a parse tree produced by sqlParser#sort_order.
sqlListener.prototype.enterSort_order = function(ctx) {
};

// Exit a parse tree produced by sqlParser#sort_order.
sqlListener.prototype.exitSort_order = function(ctx) {
};


// Enter a parse tree produced by sqlParser#offset_limit_clause.
sqlListener.prototype.enterOffset_limit_clause = function(ctx) {
};

// Exit a parse tree produced by sqlParser#offset_limit_clause.
sqlListener.prototype.exitOffset_limit_clause = function(ctx) {
};


// Enter a parse tree produced by sqlParser#offset_count.
sqlListener.prototype.enterOffset_count = function(ctx) {
};

// Exit a parse tree produced by sqlParser#offset_count.
sqlListener.prototype.exitOffset_count = function(ctx) {
};


// Enter a parse tree produced by sqlParser#limit_count.
sqlListener.prototype.enterLimit_count = function(ctx) {
};

// Exit a parse tree produced by sqlParser#limit_count.
sqlListener.prototype.exitLimit_count = function(ctx) {
};


// Enter a parse tree produced by sqlParser#LiteralScalarExpression.
sqlListener.prototype.enterLiteralScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#LiteralScalarExpression.
sqlListener.prototype.exitLiteralScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#BetweenScalarExpression.
sqlListener.prototype.enterBetweenScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#BetweenScalarExpression.
sqlListener.prototype.exitBetweenScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#ObjectCreateScalarExpression.
sqlListener.prototype.enterObjectCreateScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#ObjectCreateScalarExpression.
sqlListener.prototype.exitObjectCreateScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#InScalarExpression.
sqlListener.prototype.enterInScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#InScalarExpression.
sqlListener.prototype.exitInScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#ArrayCreateScalarExpression.
sqlListener.prototype.enterArrayCreateScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#ArrayCreateScalarExpression.
sqlListener.prototype.exitArrayCreateScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#MemberIndexerScalarExpression.
sqlListener.prototype.enterMemberIndexerScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#MemberIndexerScalarExpression.
sqlListener.prototype.exitMemberIndexerScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#SubqueryScalarExpression.
sqlListener.prototype.enterSubqueryScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#SubqueryScalarExpression.
sqlListener.prototype.exitSubqueryScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#PropertyRefScalarExpressionBase.
sqlListener.prototype.enterPropertyRefScalarExpressionBase = function(ctx) {
};

// Exit a parse tree produced by sqlParser#PropertyRefScalarExpressionBase.
sqlListener.prototype.exitPropertyRefScalarExpressionBase = function(ctx) {
};


// Enter a parse tree produced by sqlParser#CoalesceScalarExpression.
sqlListener.prototype.enterCoalesceScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#CoalesceScalarExpression.
sqlListener.prototype.exitCoalesceScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#ConditionalScalarExpression.
sqlListener.prototype.enterConditionalScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#ConditionalScalarExpression.
sqlListener.prototype.exitConditionalScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#FunctionCallScalarExpression.
sqlListener.prototype.enterFunctionCallScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#FunctionCallScalarExpression.
sqlListener.prototype.exitFunctionCallScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#ArrayScalarExpression.
sqlListener.prototype.enterArrayScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#ArrayScalarExpression.
sqlListener.prototype.exitArrayScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#ExistsScalarExpression.
sqlListener.prototype.enterExistsScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#ExistsScalarExpression.
sqlListener.prototype.exitExistsScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#UnaryScalarExpression.
sqlListener.prototype.enterUnaryScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#UnaryScalarExpression.
sqlListener.prototype.exitUnaryScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#BinaryScalarExpression.
sqlListener.prototype.enterBinaryScalarExpression = function(ctx) {
};

// Exit a parse tree produced by sqlParser#BinaryScalarExpression.
sqlListener.prototype.exitBinaryScalarExpression = function(ctx) {
};


// Enter a parse tree produced by sqlParser#PropertyRefScalarExpressionRecursive.
sqlListener.prototype.enterPropertyRefScalarExpressionRecursive = function(ctx) {
};

// Exit a parse tree produced by sqlParser#PropertyRefScalarExpressionRecursive.
sqlListener.prototype.exitPropertyRefScalarExpressionRecursive = function(ctx) {
};


// Enter a parse tree produced by sqlParser#scalar_expression_list.
sqlListener.prototype.enterScalar_expression_list = function(ctx) {
};

// Exit a parse tree produced by sqlParser#scalar_expression_list.
sqlListener.prototype.exitScalar_expression_list = function(ctx) {
};


// Enter a parse tree produced by sqlParser#binary_operator.
sqlListener.prototype.enterBinary_operator = function(ctx) {
};

// Exit a parse tree produced by sqlParser#binary_operator.
sqlListener.prototype.exitBinary_operator = function(ctx) {
};


// Enter a parse tree produced by sqlParser#unary_operator.
sqlListener.prototype.enterUnary_operator = function(ctx) {
};

// Exit a parse tree produced by sqlParser#unary_operator.
sqlListener.prototype.exitUnary_operator = function(ctx) {
};


// Enter a parse tree produced by sqlParser#object_propertty_list.
sqlListener.prototype.enterObject_propertty_list = function(ctx) {
};

// Exit a parse tree produced by sqlParser#object_propertty_list.
sqlListener.prototype.exitObject_propertty_list = function(ctx) {
};


// Enter a parse tree produced by sqlParser#object_property.
sqlListener.prototype.enterObject_property = function(ctx) {
};

// Exit a parse tree produced by sqlParser#object_property.
sqlListener.prototype.exitObject_property = function(ctx) {
};


// Enter a parse tree produced by sqlParser#literal.
sqlListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by sqlParser#literal.
sqlListener.prototype.exitLiteral = function(ctx) {
};



exports.sqlListener = sqlListener;