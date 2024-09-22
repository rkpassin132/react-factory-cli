import { runCommand } from "./commands";

const fs = require('fs');
const path = require('path');
import * as logger from './logger';
const repoUrl = 'https://github.com/rkpassin132/react-factory-setup.git';
const tempDir = path.join(process.cwd(), 'temp-setup'); // Temporary directory

export const gitClone = (branch: string, targetDir: string) => {
    try {
        // Clone the develop branch to a temporary directory
        runCommand(`git clone --branch ${branch} ${repoUrl} ${tempDir}`);
    
        // Move files to the target directory
        fs.readdir(tempDir, (err:any, files:any) => {
            if (err) throw err;
    
            files.forEach((file:any) => {
                const src = path.join(tempDir, file);
                const dest = path.join(targetDir, file);
    
                fs.renameSync(src, dest);
            });
    
            // Remove the temporary directory
            fs.rmdirSync(tempDir, { recursive: true });
            logger.log('Clone completed without .git folder!');
        });
        logger.info("Application created");

        logger.info("Installing packages using pnpm...");
        runCommand(`npm install`);
        logger.info("Ready to use");
    } catch (err) {
        console.error('Error:', err);
        logger.error("Fail to setup repo");
    }
} 


