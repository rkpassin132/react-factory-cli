#!/usr/bin/env node

import { Command } from "commander";
import { setupReact } from "./commands/setup/setupReact";
import { generateComponent } from "./commands/generate/component";

const program = new Command();

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
  .action((name, options) => generateComponent(name, options));

program.parse(process.argv);
