module.exports = function(context) {
    return {
        'MemberExpression': function(node) {
            if(node.property !== undefined)  {
                if(node.property.name === 'innerText'
                    || node.property.value === 'innerText'
                  ){
                      context.report(node,'innerText does not work in Firefox. Use textContent instead.', {});
                  }
            }
        }
    };
};
