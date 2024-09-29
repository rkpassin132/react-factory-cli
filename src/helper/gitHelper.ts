import * as fs from 'fs';
import path from "path";
import logger from './logger';
import { runCommand } from "./commands";


const repoUrl = 'https://github.com/rkpassin132/react-factory-setup.git';
const tempDir = path.join(process.cwd(), 'temp-setup'); // Temporary directory

export const gitClone = async (branch: string, targetDir: string) => {
    try {
        // Clone the develop branch to a temporary directory
        await runCommand(`git clone --branch ${branch} ${repoUrl} ${tempDir}`);
        logger.info('Cloning completed');

        // Move files to the target directory
        const files = await fs.readdirSync(tempDir);
        for (const file of files) {
            if (file === '.git') continue; 
            const src = path.join(tempDir, file);
            const dest = path.join(targetDir, file);
            await fs.renameSync(src, dest);
        }
        fs.rmSync(tempDir, { recursive: true, force: true });
        
        setTimeout(async () => {
            logger.info("Application created");
            logger.info("Installing packages using `npm install`");
            await runCommand(`cd ${targetDir}`);
            await runCommand(`npm install`);
            logger.success("Ready to use");
        }, 600);
    } catch (err) {
        console.error('Error:', err);
        logger.error("Fail to setup repo");
    }
} 


