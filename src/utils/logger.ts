import chalk from 'chalk';

export function log(message: string) {
  console.log(chalk.blue(message));
}

export function error(message: string) {
  console.error(chalk.red(message));
}
