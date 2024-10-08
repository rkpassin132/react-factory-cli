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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirectoryIfNotExists = createDirectoryIfNotExists;
exports.writeFile = writeFile;
exports.readFile = readFile;
exports.fileExists = fileExists;
var fs = __importStar(require("fs-extra"));
var logger_1 = __importDefault(require("./logger"));
// Create a directory if it does not exist
function createDirectoryIfNotExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.ensureDirSync(dirPath);
    }
    logger_1.default.info("Directory Created: ".concat(dirPath));
}
// Write content to a file
function writeFile(filePath, content) {
    if (fileExists(filePath)) {
        logger_1.default.error("File already exist: ".concat(filePath));
        return;
    }
    fs.writeFileSync(filePath, content, 'utf8');
    logger_1.default.log("File written: ".concat(filePath));
}
// Read content from a file
function readFile(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
    }
    else {
        throw new Error("File not found: ".concat(filePath));
    }
}
// Check if a file exists
function fileExists(filePath) {
    return fs.existsSync(filePath);
}
