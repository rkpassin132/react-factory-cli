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
exports.generateContext = generateContext;
exports.generateHook = generateHook;
exports.generateService = generateService;
exports.generateInterface = generateInterface;
exports.generateTest = generateTest;
var path = __importStar(require("path"));
var fileHelpers_1 = require("../helper/fileHelpers");
var component_template_1 = require("../templates/component.template");
var rfcConfig_1 = __importDefault(require("../helper/rfcConfig"));
var stringCases_1 = require("../helper/stringCases");
var context_template_1 = require("../templates/context.template");
var hook_template_1 = require("../templates/hook.template");
var interface_template_1 = require("../templates/interface.template");
// Load configuration
var config = (0, rfcConfig_1.default)();
function generateComponent(name, options, componentType) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    if (componentType === void 0) { componentType = "component"; }
    var _m = (0, stringCases_1.fileNameAndPath)(name), fileName = _m.fileName, pathDir = _m.pathDir;
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
    var componentDir = path.join(process.cwd(), componentPath, fileName);
    if (pathDir === null || pathDir === void 0 ? void 0 : pathDir.length)
        componentDir += '/' + pathDir;
    (0, fileHelpers_1.createDirectoryIfNotExists)(componentDir);
    var componentTemplate = "";
    // Validation for mutually exclusive options
    var hasFunctional = !((_c = config === null || config === void 0 ? void 0 : config.component) === null || _c === void 0 ? void 0 : _c.type) || (config === null || config === void 0 ? void 0 : config.component.type) !== "class" || !!options["functional"];
    var hasClass = ((_d = config === null || config === void 0 ? void 0 : config.component) === null || _d === void 0 ? void 0 : _d.type) === "class" || !!options["class"];
    var withTestFile = !!((_e = config === null || config === void 0 ? void 0 : config.component) === null || _e === void 0 ? void 0 : _e.withTest) || !!options['test'];
    var withSeoTag = false;
    // Handle case when componentType is 'page'
    if (componentType === 'page') {
        hasFunctional = !((_f = config === null || config === void 0 ? void 0 : config.page) === null || _f === void 0 ? void 0 : _f.type) || (config === null || config === void 0 ? void 0 : config.page.type) !== "class" || !!options["functional"];
        hasClass = ((_g = config === null || config === void 0 ? void 0 : config.page) === null || _g === void 0 ? void 0 : _g.type) === "class" || !!options["class"];
        withTestFile = !!((_h = config === null || config === void 0 ? void 0 : config.page) === null || _h === void 0 ? void 0 : _h.withTest) || !!options['test'];
        withSeoTag = !!((_j = config === null || config === void 0 ? void 0 : config.page) === null || _j === void 0 ? void 0 : _j.withSeoTag) || !!options['seoTag']; // Corrected condition for SEO tags
        console.log((_k = config === null || config === void 0 ? void 0 : config.page) === null || _k === void 0 ? void 0 : _k.withSeoTag, options['seoTag'], !!((_l = config === null || config === void 0 ? void 0 : config.page) === null || _l === void 0 ? void 0 : _l.withSeoTag), !!options['seoTag']);
    }
    // Select component template based on class or functional
    if (hasClass) {
        componentTemplate = (0, component_template_1.classComponentTemplate)(fileName, withSeoTag);
    }
    else {
        componentTemplate = (0, component_template_1.functionalComponentTemplate)(fileName, withSeoTag);
    }
    // Write the component file
    (0, fileHelpers_1.writeFile)(path.join(componentDir, "".concat(fileName, ".tsx")), componentTemplate);
    (0, fileHelpers_1.writeFile)(path.join(componentDir, "".concat(fileName, ".scss")), (0, component_template_1.styleTemplate)(fileName));
    if (withTestFile) {
        (0, fileHelpers_1.writeFile)(path.join(componentDir, "".concat(fileName, ".test.tsx")), (0, component_template_1.componentTestTemplate)(fileName));
    }
}
function generateContext(name) {
    var _a;
    var _b = (0, stringCases_1.fileNameAndPath)(name), fileName = _b.fileName, pathDir = _b.pathDir;
    var contextDir = path.join(process.cwd(), ((_a = config === null || config === void 0 ? void 0 : config.context) === null || _a === void 0 ? void 0 : _a.path) || "src/context");
    if (pathDir === null || pathDir === void 0 ? void 0 : pathDir.length)
        contextDir += '/' + pathDir;
    (0, fileHelpers_1.createDirectoryIfNotExists)(contextDir);
    (0, fileHelpers_1.writeFile)(path.join(contextDir, "".concat(fileName, "Context.tsx")), (0, context_template_1.contextTemplate)(fileName));
}
function generateHook(name) {
    var _a;
    var _b = (0, stringCases_1.fileNameAndPath)(name), fileName = _b.fileName, pathDir = _b.pathDir;
    var contextDir = path.join(process.cwd(), ((_a = config === null || config === void 0 ? void 0 : config.hook) === null || _a === void 0 ? void 0 : _a.path) || "src/hooks");
    if (pathDir === null || pathDir === void 0 ? void 0 : pathDir.length)
        contextDir += '/' + pathDir;
    (0, fileHelpers_1.createDirectoryIfNotExists)(contextDir);
    (0, fileHelpers_1.writeFile)(path.join(contextDir, "use".concat(fileName, ".ts")), (0, hook_template_1.hookTemplate)(fileName));
}
function generateService(name) {
    var _a;
    var _b = (0, stringCases_1.fileNameAndPath)(name), fileName = _b.fileName, pathDir = _b.pathDir;
    var serviceDir = path.join(process.cwd(), ((_a = config === null || config === void 0 ? void 0 : config.service) === null || _a === void 0 ? void 0 : _a.path) || "src/services");
    if (pathDir === null || pathDir === void 0 ? void 0 : pathDir.length)
        serviceDir += '/' + pathDir;
    (0, fileHelpers_1.createDirectoryIfNotExists)(serviceDir);
    (0, fileHelpers_1.writeFile)(path.join(serviceDir, "".concat(fileName, "Service.ts")), "/* ".concat(fileName, " service file */"));
}
function generateInterface(name) {
    var _a;
    var _b = (0, stringCases_1.fileNameAndPath)(name), fileName = _b.fileName, pathDir = _b.pathDir;
    var folderPath = path.join(process.cwd(), ((_a = config === null || config === void 0 ? void 0 : config.interface) === null || _a === void 0 ? void 0 : _a.path) || "src/utils/interfaces");
    if (pathDir === null || pathDir === void 0 ? void 0 : pathDir.length)
        folderPath += '/' + pathDir;
    (0, fileHelpers_1.createDirectoryIfNotExists)(folderPath);
    (0, fileHelpers_1.writeFile)(path.join(folderPath, "".concat(fileName, ".interface.ts")), (0, interface_template_1.interfaceTemplate)(fileName));
}
function generateTest(name) {
    var _a;
    var _b = (0, stringCases_1.fileNameAndPath)(name), fileName = _b.fileName, pathDir = _b.pathDir;
    var folderPath = path.join(process.cwd(), ((_a = config === null || config === void 0 ? void 0 : config.test) === null || _a === void 0 ? void 0 : _a.path) || "");
    if (pathDir === null || pathDir === void 0 ? void 0 : pathDir.length)
        folderPath += '/' + pathDir;
    (0, fileHelpers_1.createDirectoryIfNotExists)(folderPath);
    (0, fileHelpers_1.writeFile)(path.join(folderPath, "".concat(fileName, ".test.tsx")), (0, component_template_1.testTemplate)(fileName));
}
