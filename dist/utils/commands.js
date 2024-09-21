"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommand = void 0;
var Command = require('commander').Command;
var execSync = require('child_process').execSync;
var path = require('path');
// Function to run shell commands using child_process
var runCommand = function (command, cwd) {
    if (cwd === void 0) { cwd = process.cwd(); }
    try {
        execSync(command, { stdio: 'inherit', cwd: cwd });
    }
    catch (error) {
        console.error("Error executing command: ".concat(command));
        console.error(error);
        process.exit(1); // Exit the process with an error code
    }
};
exports.runCommand = runCommand;
