module.exports = function(context) {
    return {
        'ExpressionStatement': function(node) {
            var statement = node.expression.left;
            if(statement.property !== undefined)  {
                if(statement.property.name === 'innerText'
                    || statement.property.value === 'innerText'
                  ){
                      context.report(node,'innerText does not work in Firefox. Use textContent instead.', {});
                  }
            }
        }
    };
};
