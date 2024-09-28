#!/usr/bin/env node

import { Command } from "commander";
import { setupReact } from "./commands/setup/setupReact";
import { generateComponent } from "./commands/generate/component";
import { generateService } from "./commands/generate/service";
import { generateContext } from "./commands/generate/context";
import { generateHook } from "./commands/generate/hook";

const program = new Command();

program
  .name("react-factory-cli")
  .description("CLI for creating and managing React projects and components")
  .version("1.0.0");

program
  .command("setup")
  .description("Setup a new React project")
  .option('--path <name>', 'Specify the folder to create the project in', '') // Default folder name if not specified
  .action((options) => setupReact(options));

program
  .command("generate:component <name>")
  .alias("gc")
  .description("Generate a new React component")
  .option("-f, --functional", "Generate a functional component", false)
  .option("-c, --class", "Generate a class-based component", false)
  .option("-p, --path", "Generate a component with on diffrent location", false)
  .action((name, options) => generateComponent(name, options));

  program
  .command("generate:page <name>")
  .alias("gp")
  .description("Generate a new React page component")
  .option("-f, --functional", "Generate a functional component", false)
  .option("-c, --class", "Generate a class-based component", false)
  .option("-r, --routing", "Generate a component with routing", false)
  .action((name, options) => generateComponent(name, options, 'page'));

program
  .command("generate:service <name>")
  .alias("gs")
  .description("Generate a new React service")
  .action((name, options) => generateService(name));

program
  .command("generate:context <name>")
  .alias("gctx")
  .description("Generate a new React context api")
  .action((name, options) => generateContext(name));

program
  .command("generate:hook <name>")
  .alias("gh")
  .description("Generate a new React hook")
  .action((name, options) => generateHook(name));

program.parse(process.argv);
