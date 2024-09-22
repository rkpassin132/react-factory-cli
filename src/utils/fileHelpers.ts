import * as fs from 'fs-extra';
import logger from './logger';

// Create a directory if it does not exist
export function createDirectoryIfNotExists(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.ensureDirSync(dirPath);
  }
  logger.info(`Directory Created: ${dirPath}`);
}

// Write content to a file
export function writeFile(filePath: string, content: string): void {
  if(fileExists(filePath)){
    logger.error(`File already exist: ${filePath}`);
    return;
  }
  fs.writeFileSync(filePath, content, 'utf8');
  logger.log(`File written: ${filePath}`);
}

// Read content from a file
export function readFile(filePath: string): string {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf8');
  } else {
    throw new Error(`File not found: ${filePath}`);
  }
}

// Check if a file exists
export function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}
