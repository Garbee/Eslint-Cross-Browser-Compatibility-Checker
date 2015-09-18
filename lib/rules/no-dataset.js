module.exports = function(context) {
    return {
        'MemberExpression': function(node) {
            if(node.property !== undefined)  {
                if(node.property.name === 'dataset'
                    || node.property.value === 'dataset'
                  ){
                      context.report(node,'dataset does not work in IE10. Use get/setAttribute instead.', {});
                  }
            }
        }
    };
};
