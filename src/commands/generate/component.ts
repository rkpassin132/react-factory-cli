import * as path from "path";
import { createDirectoryIfNotExists, writeFile } from "../../utils/fileHelpers";
import {
  functionalComponent,
  classComponent,
} from "../../templates/component.template";
import getConfig from "../../utils/rfcConfig";
import { toPascalCase } from "../../utils/stringCases";

// Load configuration
const config = getConfig();

export function generateComponent(name: string, options: any) {
  const componentName = toPascalCase(name);
  let componentDir = path.join(
    process.cwd(),
    config?.componentLocation || "src/components"
  );
  let styleDir = path.join(
    process.cwd(),
    config?.styleLocation || "src/styles"
  );
  if (config?.folderStructure == "advance") {
    componentDir = path.join(
      process.cwd(),
      config?.componentLocation || "src/components",
      componentName
    );
    styleDir = path.join(
      process.cwd(),
      config?.componentLocation || "src/components",
      componentName
    );
  }
  createDirectoryIfNotExists(componentDir);
  createDirectoryIfNotExists(styleDir);

  let componentTemplate = "";

  // Validation for mutually exclusive options
  const hasFunctional = options["functional"];
  const hasClass = options["class"];
  const hasRouting = options["routing"];

  if (hasClass) {
    componentTemplate = classComponent(componentName, config);
  } else {
    componentTemplate = functionalComponent(componentName, config);
  }

  // Write the component file
  
  writeFile(path.join(componentDir, `${componentName}.tsx`), componentTemplate);
  writeFile(
    path.join(styleDir, `${componentName}.${config?.styleType || "css"}`),
    "/* component style file */"
  );
}
