import logger from "./logger"
const { execSync } = require('child_process');
const path = require('path');


// Function to run shell commands using child_process
export const runCommand = async (command: string, cwd = process.cwd()) => {
  try {
    await execSync(command, { stdio: 'inherit', cwd });
  } catch (error) {
    logger.error(`Error executing command: ${command}`);
    console.error(error);
    process.exit(1); // Exit the process with an error code
  }
};