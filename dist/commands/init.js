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
exports.initProject = initProject;
var fs = __importStar(require("fs-extra"));
var path = __importStar(require("path"));
var logger_1 = require("../utils/logger");
function initProject(template) {
    (0, logger_1.log)("Initializing a new React project with the ".concat(template, " template..."));
    var projectDir = path.join(process.cwd(), 'my-react-app');
    fs.ensureDirSync(projectDir);
    // Load template files based on user selection
    if (template === 'basic') {
        fs.copySync(path.join(__dirname, '../../templates/basic'), projectDir);
    }
    else if (template === 'advanced') {
        fs.copySync(path.join(__dirname, '../../templates/advanced'), projectDir);
    }
    (0, logger_1.log)('Project initialized successfully!');
}
