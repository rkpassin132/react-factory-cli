import * as path from 'path';
import getConfig from '../../utils/rfcConfig';
import { fileNameAndPath } from '../../utils/stringCases';
import { createDirectoryIfNotExists, writeFile } from '../../utils/fileHelpers';
import { contextTemplate } from '../../templates/context.template';

// Load configuration
const config = getConfig();

export function generateContext(name: string) {
  const { fileName, pathDir } = fileNameAndPath(name);
  let contextDir = path.join(
    process.cwd(),
    config?.context?.path || "src/context",
  );
  if(pathDir?.length) contextDir += '/' + pathDir;
  createDirectoryIfNotExists(contextDir);

  writeFile(path.join(contextDir, `${fileName}Context.tsx`), contextTemplate(fileName));

}
