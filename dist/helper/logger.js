"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
function log(message) {
    console.log(chalk_1.default.white(message));
}
function info(message) {
    console.info(chalk_1.default.blue(message));
}
function warn(message) {
    console.warn(chalk_1.default.yellow(message));
}
function error(message) {
    console.error(chalk_1.default.red(message));
}
function success(message) {
    console.log(chalk_1.default.green(message));
}
var logger = {
    log: log,
    info: info,
    warn: warn,
    error: error,
    success: success,
};
exports.default = logger;
