"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var getConfig = function () {
    var configPath = path_1.default.join(process.cwd(), "rfc-config.json");
    if (fs_extra_1.default.existsSync(configPath)) {
        try {
            return fs_extra_1.default.readJsonSync(configPath);
        }
        catch (error) {
            console.error("Error reading configuration file:", error);
            return null; // Return null if there is an error reading the config file
        }
    }
    else {
        console.log("No configuration file found. Using default settings.");
        return null;
    }
};
exports.default = getConfig;
