import * as fs from 'fs-extra';
import * as path from 'path';
import { log } from '../../utils/logger';

export function generateService(name: string) {
  log(`Generating a new service: ${name}`);

  const serviceDir = path.join(process.cwd(), 'src', 'services');
  fs.ensureDirSync(serviceDir);

  const template = `export class ${name} {\n  // Service logic here\n}\n`;

  fs.writeFileSync(path.join(serviceDir, `${name}.ts`), template);
  log('Service generated successfully!');
}
