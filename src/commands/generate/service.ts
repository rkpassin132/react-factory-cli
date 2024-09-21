import * as path from 'path';
import getConfig from '../../utils/rfcConfig';
import { toPascalCase } from '../../utils/stringCases';
import { createDirectoryIfNotExists, writeFile } from '../../utils/fileHelpers';

// Load configuration
const config = getConfig();

export function generateService(name: string) {
  const serviceName = toPascalCase(name);
  let serviceDir = path.join(
    process.cwd(),
    config?.service?.path || "src/services",
  );
  createDirectoryIfNotExists(serviceDir);

  writeFile(path.join(serviceDir, `${serviceName}.ts`), `/* ${serviceName} service file */`);

}
