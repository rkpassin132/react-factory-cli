"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var logger_1 = __importDefault(require("./logger"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var getConfig = function () {
    var configPath = path_1.default.join(process.cwd(), "rfc-config.json");
    if (fs_extra_1.default.existsSync(configPath)) {
        try {
            return fs_extra_1.default.readJsonSync(configPath);
        }
        catch (error) {
            logger_1.default.error("Error reading configuration file");
            return null; // Return null if there is an error reading the config file
        }
    }
    else {
        logger_1.default.log("No configuration file found. Using default settings.");
        return null;
    }
};
exports.default = getConfig;
