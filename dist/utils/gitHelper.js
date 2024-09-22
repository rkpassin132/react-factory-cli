"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitClone = void 0;
var commands_1 = require("./commands");
var fs = require('fs');
var path = require('path');
var logger = __importStar(require("./logger"));
var repoUrl = 'https://github.com/rkpassin132/react-factory-setup.git';
var tempDir = path.join(process.cwd(), 'temp-setup'); // Temporary directory
var gitClone = function (branch, targetDir) {
    try {
        // Clone the develop branch to a temporary directory
        (0, commands_1.runCommand)("git clone --branch ".concat(branch, " ").concat(repoUrl, " ").concat(tempDir));
        // Move files to the target directory
        fs.readdir(tempDir, function (err, files) {
            if (err)
                throw err;
            files.forEach(function (file) {
                var src = path.join(tempDir, file);
                var dest = path.join(targetDir, file);
                fs.renameSync(src, dest);
            });
            // Remove the temporary directory
            fs.rmdirSync(tempDir, { recursive: true });
            logger.log('Clone completed without .git folder!');
        });
        logger.info("Application created");
        logger.info("Installing packages using pnpm...");
        (0, commands_1.runCommand)("npm install");
        logger.info("Ready to use");
    }
    catch (err) {
        console.error('Error:', err);
        logger.error("Fail to setup repo");
    }
};
exports.gitClone = gitClone;
