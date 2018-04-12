"use strict";
const kebabCase = require("lodash.kebabcase");
const is_1 = require("@mojule/is");
const declarationsToString = declarations => Object.keys(declarations).map(propertyName => `${kebabCase(propertyName)}:${declarations[propertyName]}`).join(';');
const CssString = (styles) => {
    let css = '';
    Object.keys(styles).forEach(name => {
        const value = styles[name];
        if (name.startsWith('@') && !value) {
            css += `${name};`;
            return;
        }
        if (name.startsWith('@') && is_1.is.object(value)) {
            css += `${name}{${CssString(value)}}`;
            return;
        }
        if (!is_1.is.object(value))
            throw Error('Expected an @ statement, nested @ rule or CSS declaration block');
        css += `${name}{${declarationsToString(value)}}`;
    });
    return css;
};
module.exports = CssString;
//# sourceMappingURL=index.js.map