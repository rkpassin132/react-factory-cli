import * as path from 'path';
import getConfig from '../../utils/rfcConfig';
import { fileNameAndPath, toPascalCase } from '../../utils/stringCases';
import { createDirectoryIfNotExists, writeFile } from '../../utils/fileHelpers';

// Load configuration
const config = getConfig();

export function generateService(name: string) {
  let { fileName, pathDir } = fileNameAndPath(name);
  let serviceDir = path.join(
    process.cwd(),
    config?.service?.path || "src/services",
  );
  if(pathDir?.length) serviceDir += '/' + pathDir;
  createDirectoryIfNotExists(serviceDir);

  writeFile(path.join(serviceDir, `${fileName}Service.ts`), `/* ${fileName} service file */`);

}
