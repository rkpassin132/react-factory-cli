import * as path from 'path';
import getConfig from '../../utils/rfcConfig';
import { createDirectoryIfNotExists, writeFile } from '../../utils/fileHelpers';
import { hookTemplate } from '../../templates/hook.template';
import { toPascalCase } from '../../utils/stringCases';

// Load configuration
const config = getConfig();

export function generateHook(name: string) {
  let contextDir = path.join(
    process.cwd(),
    config?.hook?.path || "src/hooks",
  );
  createDirectoryIfNotExists(contextDir);
  let pascalName = toPascalCase(name);
  writeFile(path.join(contextDir, `${name}.ts`), hookTemplate(pascalName, name));

}
