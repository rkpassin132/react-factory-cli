import path from "path";
import { gitClone } from "../../utils/gitHelper";
import { createDirectoryIfNotExists } from "../../utils/fileHelpers";


export async function setupReact(options: any) {
  const targetDir = path.join(process.cwd(), options['path'] ? options['path'] : '.');
  createDirectoryIfNotExists(targetDir);
  gitClone('main', targetDir);
}
