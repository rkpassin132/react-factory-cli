import chalk from "chalk";

function log(message: string) {
  console.log(chalk.white(message));
}

function info(message: string) {
  console.info(chalk.blue(message));
}

function warn(message: string) {
  console.warn(chalk.yellow(message));
}

function error(message: string) {
  console.error(chalk.red(message));
}

function success(message: string) {
  console.log(chalk.green(message));
}

const logger = {
  log,
  info,
  warn,
  error,
  success,
};

export default logger;
