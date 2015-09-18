module.exports = function(context) {
    return {
        'ExpressionStatement': function(node) {
            var statement = node.left;
            if(statement.property)  {
                if(statement.property.name === 'innerText'
                    || statement.property.value === 'innerText'
                  ){
                      context.report({
                        node: node,
                        message: 'innerText does not work in Firefox. Use textContent instead.'
                      });
                  }
            }
        }
    };
};
