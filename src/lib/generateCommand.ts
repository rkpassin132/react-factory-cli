import * as path from "path";
import { createDirectoryIfNotExists, writeFile } from "../helper/fileHelpers";
import {
    functionalComponentTemplate,
    classComponentTemplate,
    styleTemplate,
} from "../templates/component.template";
import getConfig from "../helper/rfcConfig";
import { fileNameAndPath } from "../helper/stringCases";
import { contextTemplate } from "../templates/context.template";
import { hookTemplate } from "../templates/hook.template";

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
    if (pathDir?.length) componentDir += '/' + pathDir;
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


export function generateContext(name: string) {
    const { fileName, pathDir } = fileNameAndPath(name);
    let contextDir = path.join(
        process.cwd(),
        config?.context?.path || "src/context",
    );
    if (pathDir?.length) contextDir += '/' + pathDir;
    createDirectoryIfNotExists(contextDir);

    writeFile(path.join(contextDir, `${fileName}Context.tsx`), contextTemplate(fileName));

}

export function generateHook(name: string) {
    let { fileName, pathDir } = fileNameAndPath(name);
    let contextDir = path.join(
        process.cwd(),
        config?.hook?.path || "src/hooks",
    );
    if (pathDir?.length) contextDir += '/' + pathDir;
    createDirectoryIfNotExists(contextDir);
    writeFile(path.join(contextDir, `use${fileName}.ts`), hookTemplate(fileName));
}

export function generateService(name: string) {
    let { fileName, pathDir } = fileNameAndPath(name);
    let serviceDir = path.join(
        process.cwd(),
        config?.service?.path || "src/services",
    );
    if (pathDir?.length) serviceDir += '/' + pathDir;
    createDirectoryIfNotExists(serviceDir);

    writeFile(path.join(serviceDir, `${fileName}Service.ts`), `/* ${fileName} service file */`);

}


export function generateInterface(name: string) {
    let { fileName, pathDir } = fileNameAndPath(name);
    let contextDir = path.join(
      process.cwd(),
      config?.hook?.path || "src/hooks",
    );
    if(pathDir?.length) contextDir += '/' + pathDir;
    createDirectoryIfNotExists(contextDir);
    writeFile(path.join(contextDir, `use${fileName}.ts`), hookTemplate(fileName));
}