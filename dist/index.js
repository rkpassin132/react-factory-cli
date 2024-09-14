#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var init_1 = require("./commands/init");
var component_1 = require("./commands/generate/component");
var program = new commander_1.Command();
program
    .name('react-factory-cli')
    .description('CLI for creating and managing React projects and components')
    .version('1.0.0');
// Initialize a new project
program
    .command('init')
    .description('Initialize a new React project')
    .option('-t, --template <type>', 'Project template type (basic, advanced)', 'basic')
    .action(function (options) { return (0, init_1.initProject)(options.template); });
// Generate a new component
program
    .command('generate:component <name>')
    .alias('g c')
    .description('Generate a new React component')
    .option('-f, --functional', 'Generate a functional component', false)
    .option('-c, --class', 'Generate a class-based component', false)
    .option('-hof, --higher-order-functional', 'Generate a higher-order functional component', false)
    .option('-r, --routing', 'Generate a component with routing', false)
    .action(function (name, options) { return (0, component_1.generateComponent)(name, options); });
program.parse(process.argv);
