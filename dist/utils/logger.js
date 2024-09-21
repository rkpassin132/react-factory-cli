"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
exports.info = info;
exports.warn = warn;
exports.error = error;
function log(message) {
    console.log(message);
}
function info(message) {
    console.info(message);
}
function warn(message) {
    console.info(message);
}
function error(message) {
    console.error(message);
}
