import * as path from "path";
import * as fs from "fs-extra";
import { createDirectoryIfNotExists, writeFile } from "../../utils/fileHelpers";
import {
  functionalComponent,
  classComponent,
  higherOrderFunctionalComponent,
  routingComponent,
} from "../../templates/component.template";

// Load configuration
const configPath = path.join(process.cwd(), "rfc-config.json");
let config: any = {};
if (fs.existsSync(configPath)) {
  config = fs.readJsonSync(configPath);
} else {
  console.log("No configuration file found. Using default settings.");
}

export function generateComponent(name: string, options: any) {
  const componentDir = path.join(
    process.cwd(),
    config.componentLocation || "src/components",
    name
  );
  createDirectoryIfNotExists(componentDir);

  let componentTemplate = "";

  // Validation for mutually exclusive options
  const hasFunctional = options["functional"];
  const hasClass = options["class"];
  const hasRouting = options["routing"];
  const hasHigherOrder = options["higher-order-functional"];

  if (hasHigherOrder) {
    if (hasFunctional || hasClass || hasRouting) {
      console.error("Cannot use -hof with -f, -c, or -r options.");
      return;
    }
    componentTemplate = higherOrderFunctionalComponent(name);
  } else if (hasClass) {
    if (hasRouting) {
      componentTemplate = `${classComponent(
        name
      )}\n// Routing can be added manually\n`;
    } else {
      componentTemplate = classComponent(name);
    }
  } else if (hasRouting) {
    componentTemplate = routingComponent(name);
  } else {
    componentTemplate = functionalComponent(name);
  }

  // Write the component file
  writeFile(path.join(componentDir, `${name}.tsx`), componentTemplate);
}
