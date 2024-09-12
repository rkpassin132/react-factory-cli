import * as fs from 'fs-extra';
import * as path from 'path';
import { log } from '../utils/logger';

export function initProject(template: string) {
  log(`Initializing a new React project with the ${template} template...`);

  const projectDir = path.join(process.cwd(), 'my-react-app');
  fs.ensureDirSync(projectDir);

  // Load template files based on user selection
  if (template === 'basic') {
    fs.copySync(path.join(__dirname, '../../templates/basic'), projectDir);
  } else if (template === 'advanced') {
    fs.copySync(path.join(__dirname, '../../templates/advanced'), projectDir);
  }

  log('Project initialized successfully!');
}
