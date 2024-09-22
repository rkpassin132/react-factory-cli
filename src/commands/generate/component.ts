import * as path from "path";
import { createDirectoryIfNotExists, writeFile } from "../../utils/fileHelpers";
import {
  functionalComponentTemplate,
  classComponentTemplate,
  styleTemplate,
} from "../../templates/component.template";
import getConfig from "../../utils/rfcConfig";
import { fileNameAndPath } from "../../utils/stringCases";

// Load configuration
const config = getConfig();

export function generateComponent(
  name: string,
  options: any,
  componentType = "component"
) {
  const { fileName, pathDir } = fileNameAndPath(name);
  let componentPath = "";
  if (options["path"]) {
    componentPath = options["path"];
  } else {
    componentPath =
      componentType == "page"
        ? config?.page?.path || "src/pages"
        : config?.component?.path || "src/components";
  }
  let componentDir = path.join(process.cwd(), componentPath, fileName);
  if(pathDir?.length) componentDir += '/' + pathDir;
  createDirectoryIfNotExists(componentDir);

  let componentTemplate = "";

  // Validation for mutually exclusive options
  const hasFunctional = options["functional"];
  const hasClass = options["class"];

  if (hasClass) {
    componentTemplate = classComponentTemplate(fileName);
  } else if (hasFunctional) {
    componentTemplate = functionalComponentTemplate(fileName);
  } else {
    if (config?.component.type == "class") {
      componentTemplate = classComponentTemplate(fileName);
    } else {
      componentTemplate = functionalComponentTemplate(fileName);
    }
  }

  // Write the component file

  writeFile(path.join(componentDir, `${fileName}.tsx`), componentTemplate);
  writeFile(
    path.join(componentDir, `${fileName}.scss`),
    styleTemplate(fileName)
  );
}
