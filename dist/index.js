#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var setupReact_1 = require("./commands/setup/setupReact");
var component_1 = require("./commands/generate/component");
var service_1 = require("./commands/generate/service");
var context_1 = require("./commands/generate/context");
var hook_1 = require("./commands/generate/hook");
var program = new commander_1.Command();
program
    .name("react-factory-cli")
    .description("CLI for creating and managing React projects and components")
    .version("1.0.0");
program
    .command("setup")
    .description("Setup a new React project")
    .option('--path <name>', 'Specify the folder to create the project in', 'my-react-app') // Default folder name if not specified
    .action(function (options) { return (0, setupReact_1.setupReact)(options); });
program
    .command("generate:component <name>")
    .alias("gc")
    .description("Generate a new React component")
    .option("-f, --functional", "Generate a functional component", false)
    .option("-c, --class", "Generate a class-based component", false)
    .option("-p, --path", "Generate a component with on diffrent location", false)
    .action(function (name, options) { return (0, component_1.generateComponent)(name, options); });
program
    .command("generate:page <name>")
    .alias("gp")
    .description("Generate a new React page component")
    .option("-f, --functional", "Generate a functional component", false)
    .option("-c, --class", "Generate a class-based component", false)
    .option("-r, --routing", "Generate a component with routing", false)
    .action(function (name, options) { return (0, component_1.generateComponent)(name, options, 'page'); });
program
    .command("generate:service <name>")
    .alias("gs")
    .description("Generate a new React service")
    .action(function (name, options) { return (0, service_1.generateService)(name); });
program
    .command("generate:context <name>")
    .alias("gctx")
    .description("Generate a new React context api")
    .action(function (name, options) { return (0, context_1.generateContext)(name); });
program
    .command("generate:hook <name>")
    .alias("gh")
    .description("Generate a new React hook")
    .action(function (name, options) { return (0, hook_1.generateHook)(name); });
program.parse(process.argv);
