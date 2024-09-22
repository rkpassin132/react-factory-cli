"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = void 0;
exports.toPascalCase = toPascalCase;
exports.fileNameAndPath = fileNameAndPath;
function toPascalCase(str) {
    return str
        .replace(/([^\w\d]|_|\s)+(.)?/g, function (_, __, letter) {
        return letter ? letter.toUpperCase() : "";
    })
        .replace(/^(.)/, function (firstLetter) { return firstLetter.toUpperCase(); });
}
var toCamelCase = function (str) {
    var pascalCaseStr = str
        .split(/[-_/]/) // Split on hyphens, underscores, or slashes
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join('');
    // Convert the first character to lowercase
    return pascalCaseStr.charAt(0).toLowerCase() + pascalCaseStr.slice(1);
};
exports.toCamelCase = toCamelCase;
function fileNameAndPath(str) {
    var parts = str.split('/');
    var fileName = toPascalCase(parts.pop());
    var pathDir = parts.join('/');
    return { fileName: fileName, pathDir: pathDir };
}
