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
exports.generateContext = generateContext;
var path = __importStar(require("path"));
var rfcConfig_1 = __importDefault(require("../../utils/rfcConfig"));
var stringCases_1 = require("../../utils/stringCases");
var fileHelpers_1 = require("../../utils/fileHelpers");
var context_template_1 = require("../../templates/context.template");
// Load configuration
var config = (0, rfcConfig_1.default)();
function generateContext(name) {
    var _a;
    var contextName = (0, stringCases_1.toPascalCase)(name);
    var contextDir = path.join(process.cwd(), ((_a = config === null || config === void 0 ? void 0 : config.context) === null || _a === void 0 ? void 0 : _a.path) || "src/context");
    (0, fileHelpers_1.createDirectoryIfNotExists)(contextDir);
    (0, fileHelpers_1.writeFile)(path.join(contextDir, "".concat(contextName, "Context.tsx")), (0, context_template_1.contextTemplate)(contextName));
}
