#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var setupCommand_1 = require("./lib/setupCommand");
var generateCommand_1 = require("./lib/generateCommand");
var program = new commander_1.Command();
program
    .name("react-factory-cli")
    .description("CLI for creating and managing React projects and components")
    .version("1.0.0");
program
    .command("setup")
    .description("Setup a new React project")
    .option("--path <name>", "Specify the folder to create the project in", "") // Default folder name if not specified
    .action(function (options) { return (0, setupCommand_1.setupReact)(options); });
program
    .command("generate:component <name>")
    .alias("gc")
    .description("Generate a new React component")
    .option("-f, --functional", "Generate a functional component", false)
    .option("-c, --class", "Generate a class-based component", false)
    .option("-p, --path", "Generate a component with on diffrent location", false)
    .option("-t, --test", "Generate a component with on test file", false)
    .action(function (name, options) { return (0, generateCommand_1.generateComponent)(name, options); });
program
    .command("generate:page <name>")
    .alias("gp")
    .description("Generate a new React page component")
    .option("-f, --functional", "Generate a functional component", false)
    .option("-c, --class", "Generate a class-based component", false)
    .option("-r, --routing", "Generate a component with routing", false)
    .option("-t, --test", "Generate a component with on test file", false)
    .option("-seo, --seoTag", "Generate a component with on seo meta tags", false)
    .action(function (name, options) { return (0, generateCommand_1.generateComponent)(name, options, "page"); });
program
    .command("generate:service <name>")
    .alias("gs")
    .description("Generate a new React service")
    .action(function (name, options) { return (0, generateCommand_1.generateService)(name); });
program
    .command("generate:context <name>")
    .alias("gctx")
    .description("Generate a new React context api")
    .action(function (name, options) { return (0, generateCommand_1.generateContext)(name); });
program
    .command("generate:hook <name>")
    .alias("gh")
    .description("Generate a new React hook")
    .action(function (name, options) { return (0, generateCommand_1.generateHook)(name); });
program
    .command("generate:interface <name>")
    .alias("gi")
    .description("Generate a new interface")
    .action(function (name, options) { return (0, generateCommand_1.generateInterface)(name); });
program
    .command("generate:test <name>")
    .alias("gt")
    .description("Generate a new test file")
    .action(function (name, options) { return (0, generateCommand_1.generateTest)(name); });
program.parse(process.argv);
