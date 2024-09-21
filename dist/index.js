#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var component_1 = require("./commands/generate/component");
var service_1 = require("./commands/generate/service");
var context_1 = require("./commands/generate/context");
var hook_1 = require("./commands/generate/hook");
var program = new commander_1.Command();
program
    .name("react-factory-cli")
    .description("CLI for creating and managing React projects and components")
    .version("1.0.0");
// Initialize a new project
// program
//   .command("setup")
//   .description("Setup a new React project")
//   .option("--basic", "Setup a basic React project")
//   .option("--advanced", "Setup an advanced React project")
//   .option("--material", "Use Material UI for styling")
//   .option("--bootstrap", "Use Bootstrap for styling")
//   .option("--none", "Do not use any CSS framework")
//   .option('--path <name>', 'Specify the folder to create the project in', 'my-react-app') // Default folder name if not specified
//   .action((options) => setupReact(options));
// Generate a new component
program
    .command("generate:component <name>")
    .alias("g c")
    .description("Generate a new React component")
    .option("-f, --functional", "Generate a functional component", false)
    .option("-c, --class", "Generate a class-based component", false)
    .option("-r, --routing", "Generate a component with routing", false)
    .option("-p, --path", "Generate a component with on diffrent location", false)
    .action(function (name, options) { return (0, component_1.generateComponent)(name, options); });
program
    .command("generate:page <name>")
    .alias("g p")
    .description("Generate a new React page component")
    .option("-f, --functional", "Generate a functional component", false)
    .option("-c, --class", "Generate a class-based component", false)
    .option("-r, --routing", "Generate a component with routing", false)
    .action(function (name, options) { return (0, component_1.generateComponent)(name, options, 'page'); });
program
    .command("generate:service <name>")
    .alias("g s")
    .description("Generate a new React service")
    .action(function (name, options) { return (0, service_1.generateService)(name); });
program
    .command("generate:context <name>")
    .alias("g ctx")
    .description("Generate a new React context api")
    .action(function (name, options) { return (0, context_1.generateContext)(name); });
program
    .command("generate:hook <name>")
    .alias("g h")
    .description("Generate a new React hook")
    .action(function (name, options) { return (0, hook_1.generateHook)(name); });
program.parse(process.argv);
