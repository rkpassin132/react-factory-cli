import path from "path";
import { gitClone } from "../../utils/gitHelper";
import { createDirectoryIfNotExists } from "../../utils/fileHelpers";


export async function setupReact(options: any) {
  const targetDir = path.join(__dirname, options['path'] ? options['path'] : '');
  createDirectoryIfNotExists(targetDir);
  gitClone('master', targetDir);
}
