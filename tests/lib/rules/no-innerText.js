/**
 * @fileoverview Tests for no-innerText rule.
 * @author Jonathan Garbee
 * @copyright 2015 Jonathan Garbee. All rights reserved.
 **/

'use strict';

var rule = require('../../../lib/rules/no-innerText'),
    RuleTester =  require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run('no-innerText', rule, {
    valid: [
        'foo.textContent = "hello"',
        'document.querySelector(".class").textContent = "foo"',
        'hi.setAttribute("value", there.textContent)'
    ],
    invalid: [
        {
            code: 'foo.innerText = "hello"',
            errors: [{
                message: 'innerText does not work in Firefox. Use textContent instead.',
                type: 'MemberExpression'}]
        },
        {
            code: 'this.textContent = that.innerText',
            errors: [{
                message: 'innerText does not work in Firefox. Use textContent instead.',
                type: 'MemberExpression'}]
        },
        {
            code: 'hi.setAttribute("value", there.innerText)',
            errors: [{
                message: 'innerText does not work in Firefox. Use textContent instead.',
                type: 'MemberExpression'}]
        }

    ]
});

