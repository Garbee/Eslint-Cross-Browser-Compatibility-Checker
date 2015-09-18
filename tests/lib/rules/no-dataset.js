/**
 * @fileoverview Tests for no-dataset rule.
 * @author Jonathan Garbee
 * @copyright 2015 Jonathan Garbee. All rights reserved.
 **/

'use strict';

var rule = require('../../../lib/rules/no-dataset'),
    RuleTester =  require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run('no-dataset', rule, {
    valid: [
        'foo.setAttribute("data-hello", "help")',
        'document.querySelector(".class").getAttribute("data-hello")',
        'hi.setAttribute("value", there.getAttribute("data-goodbye"))'
    ],
    invalid: [
        {
            code: 'foo.dataset = "hello"',
            errors: [{
                message: 'dataset does not work in IE10. Use get/setAttribute instead.',
                type: 'MemberExpression'}]
        },
        {
            code: 'this.textContent = that.dataset',
            errors: [{
                message: 'dataset does not work in IE10. Use get/setAttribute instead.',
                type: 'MemberExpression'}]
        },
        {
            code: 'hi.setAttribute("value", document.querySelector(".hi").dataset.key)',
            errors: [{
                message: 'dataset does not work in IE10. Use get/setAttribute instead.',
                type: 'MemberExpression'}]
        }

    ]
});
