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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupReact = setupReact;
var path_1 = __importDefault(require("path"));
var logger = __importStar(require("../../utils/logger"));
var commands_1 = require("../../utils/commands");
function setupReact(options) {
    return __awaiter(this, void 0, void 0, function () {
        var destinationPath, repo, templateType, cssFramework, folderMap, folderKey, folder, fullPath;
        return __generator(this, function (_a) {
            try {
                destinationPath = path_1.default.join(process.cwd(), options.path);
                repo = "https://github.com/rkpassin132/react-factory-setup.git";
                templateType = options.advanced ? "advanced" : "basic";
                cssFramework = options.material
                    ? "-material"
                    : options.bootstrap
                        ? "-bootstrap"
                        : "";
                folderMap = {
                    basic: "src-basic",
                    "basic-material": "src-basic-material",
                    "basic-bootstrap": "src-basic-bootstrap",
                    advanced: "src-advanced",
                    "advance-material": "src-advance-material",
                    "advance-bootstrap": "src-advance-bootstrap",
                };
                folderKey = "".concat(templateType).concat(cssFramework);
                folder = folderMap[folderKey];
                if (!folder) {
                    console.error("Invalid template type specified!");
                    return [2 /*return*/];
                }
                fullPath = path_1.default.resolve(process.cwd(), destinationPath);
                logger.info("Creating application...");
                // Clone the repo without checkout
                (0, commands_1.runCommand)("git clone --no-checkout ".concat(repo, " ").concat(fullPath));
                // Initialize sparse checkout
                (0, commands_1.runCommand)("git sparse-checkout init", fullPath);
                // Set the specific folder to be checked out
                (0, commands_1.runCommand)("git sparse-checkout set ".concat(folder), fullPath);
                // Checkout the files
                (0, commands_1.runCommand)("git checkout", fullPath);
                logger.info("Application created");
                // logger.info("Installing packages...");
                // runCommand(`cd ${destinationPath} && pnpm install`);
                // logger.info("Packages installed");
            }
            catch (error) {
                console.log(error);
                logger.error("Faile to setup repo");
            }
            return [2 /*return*/];
        });
    });
}
