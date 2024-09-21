import * as path from "path";
import { createDirectoryIfNotExists, writeFile } from "../../utils/fileHelpers";
import {
  functionalComponentTemplate,
  classComponentTemplate,
  styleTemplate,
} from "../../templates/component.template";
import getConfig from "../../utils/rfcConfig";
import { toPascalCase } from "../../utils/stringCases";

// Load configuration
const config = getConfig();

export function generateComponent(
  name: string,
  options: any,
  componentType = "component"
) {
  const componentName = toPascalCase(name);
  let componentPath = "";
  if (options["path"]) {
    componentPath = options["path"];
  } else {
    componentPath =
      componentType == "page"
        ? config?.page?.path || "src/pages"
        : config?.component?.path || "src/components";
  }
  let componentDir = path.join(process.cwd(), componentPath, componentName);
  createDirectoryIfNotExists(componentDir);

  let componentTemplate = "";

  // Validation for mutually exclusive options
  const hasFunctional = options["functional"];
  const hasClass = options["class"];

  if (hasClass) {
    componentTemplate = classComponentTemplate(componentName, name);
  } else if (hasFunctional) {
    componentTemplate = functionalComponentTemplate(componentName, name);
  } else {
    if (config?.component.type == "class") {
      componentTemplate = classComponentTemplate(componentName, name);
    } else {
      componentTemplate = functionalComponentTemplate(componentName, name);
    }
  }

  // Write the component file

  writeFile(path.join(componentDir, `${componentName}.tsx`), componentTemplate);
  writeFile(
    path.join(componentDir, `${componentName}.scss`),
    styleTemplate(name)
  );
}
