#!/usr/bin/env node

import { Command } from 'commander';
import { initProject } from './commands/init';
import { generateComponent } from './commands/generate/component';

const program = new Command();

program
  .name('react-factory-cli')
  .description('CLI for creating and managing React projects and components')
  .version('1.0.0');

// Initialize a new project
program
  .command('init')
  .description('Initialize a new React project')
  .option('-t, --template <type>', 'Project template type (basic, advanced)', 'basic')
  .action((options) => initProject(options.template));

// Generate a new component
program
  .command('generate:component <name>')
  .alias('g c')
  .description('Generate a new React component')
  .option('-f, --functional', 'Generate a functional component', false)
  .option('-c, --class', 'Generate a class-based component', false)
  .option('-hof, --higher-order-functional', 'Generate a higher-order functional component', false)
  .option('-r, --routing', 'Generate a component with routing', false)
  .action((name, options) => generateComponent(name, options));


program.parse(process.argv);
