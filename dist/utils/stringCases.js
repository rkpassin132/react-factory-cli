"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPascalCase = toPascalCase;
function toPascalCase(str) {
    return str
        .replace(/([^\w\d]|_|\s)+(.)?/g, function (_, __, letter) {
        return letter ? letter.toUpperCase() : "";
    })
        .replace(/^(.)/, function (firstLetter) { return firstLetter.toUpperCase(); });
}
