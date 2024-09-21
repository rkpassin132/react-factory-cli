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
exports.generateComponent = generateComponent;
var path = __importStar(require("path"));
var fileHelpers_1 = require("../../utils/fileHelpers");
var component_template_1 = require("../../templates/component.template");
var rfcConfig_1 = __importDefault(require("../../utils/rfcConfig"));
var stringCases_1 = require("../../utils/stringCases");
// Load configuration
var config = (0, rfcConfig_1.default)();
function generateComponent(name, options, componentType) {
    var _a, _b;
    if (componentType === void 0) { componentType = "component"; }
    var componentName = (0, stringCases_1.toPascalCase)(name);
    var componentPath = "";
    if (options["path"]) {
        componentPath = options["path"];
    }
    else {
        componentPath =
            componentType == "page"
                ? ((_a = config === null || config === void 0 ? void 0 : config.page) === null || _a === void 0 ? void 0 : _a.path) || "src/pages"
                : ((_b = config === null || config === void 0 ? void 0 : config.component) === null || _b === void 0 ? void 0 : _b.path) || "src/components";
    }
    var componentDir = path.join(process.cwd(), componentPath, componentName);
    (0, fileHelpers_1.createDirectoryIfNotExists)(componentDir);
    var componentTemplate = "";
    // Validation for mutually exclusive options
    var hasFunctional = options["functional"];
    var hasClass = options["class"];
    if (hasClass) {
        componentTemplate = (0, component_template_1.classComponentTemplate)(componentName, name);
    }
    else if (hasFunctional) {
        componentTemplate = (0, component_template_1.functionalComponentTemplate)(componentName, name);
    }
    else {
        if ((config === null || config === void 0 ? void 0 : config.component.type) == "class") {
            componentTemplate = (0, component_template_1.classComponentTemplate)(componentName, name);
        }
        else {
            componentTemplate = (0, component_template_1.functionalComponentTemplate)(componentName, name);
        }
    }
    // Write the component file
    (0, fileHelpers_1.writeFile)(path.join(componentDir, "".concat(componentName, ".tsx")), componentTemplate);
    (0, fileHelpers_1.writeFile)(path.join(componentDir, "".concat(componentName, ".scss")), (0, component_template_1.styleTemplate)(name));
}
