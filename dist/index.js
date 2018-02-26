"use strict";
const kebabCase = require("lodash.kebabcase");
const propertiesToString = (properties) => Object.keys(properties).map(propertyName => `${kebabCase(propertyName)}:${properties[propertyName]}`).join(';');
const CssString = (styles) => Object.keys(styles).map(selector => `${selector}{${propertiesToString(styles[selector])}}`).join('');
module.exports = CssString;
//# sourceMappingURL=index.js.map