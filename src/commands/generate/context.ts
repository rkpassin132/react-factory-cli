import * as path from 'path';
import getConfig from '../../utils/rfcConfig';
import { toPascalCase } from '../../utils/stringCases';
import { createDirectoryIfNotExists, writeFile } from '../../utils/fileHelpers';
import { contextTemplate } from '../../templates/context.template';

// Load configuration
const config = getConfig();

export function generateContext(name: string) {
  const contextName = toPascalCase(name);
  let contextDir = path.join(
    process.cwd(),
    config?.context?.path || "src/context",
  );
  createDirectoryIfNotExists(contextDir);

  writeFile(path.join(contextDir, `${contextName}Context.tsx`), contextTemplate(contextName));

}
