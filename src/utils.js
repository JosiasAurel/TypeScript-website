"use strict";
exports.__esModule = true;
exports.createAndSetStyles = void 0;
function createAndSetStyles(elment, stylesObject) {
    if (elment === void 0) { elment = document.createElement("p"); }
    var styleAndProp = stylesObject[0].split(", ").map(function (item) { return item.split(" "); });
}
exports.createAndSetStyles = createAndSetStyles;
