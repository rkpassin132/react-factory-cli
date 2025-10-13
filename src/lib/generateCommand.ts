import * as path from "path";
import { createDirectoryIfNotExists, readFile, writeFile } from "../helper/fileHelpers";
import {
    functionalComponentTemplate,
    classComponentTemplate,
    styleTemplate,
    testTemplate,
    componentTestTemplate,
} from "../templates/component.template";
import getConfig from "../helper/rfcConfig";
import { fileNameAndPath } from "../helper/stringCases";
import { contextTemplate } from "../templates/context.template";
import { hookTemplate } from "../templates/hook.template";
import { interfaceTemplate } from "../templates/interface.template";
import logger from "../helper/logger";

// Load configuration
const config = getConfig();

function generateFileFromTemplate(
    templatePath: string,
    destinationPath: string,
    fileName: string,
    replacements: Record<string, string>
  ) {
    let content: string = readFile(templatePath);
  
    // Replace placeholders in the template with actual values
    for (const [key, value] of Object.entries(replacements)) {
      content = content.replace(new RegExp(`{{${key}}}`, "g"), value);
    }
  
    // Write the generated content to the destination
    writeFile(path.join(destinationPath, `${fileName}`), content);
}

export function generateComponent(
    name: string,
    options: any,
    componentType = "component"
  ) {
    const { fileName, pathDir } = fileNameAndPath(name);
  
    // Determine base component directory
    let componentPath = options?.["path"] || null;
    if (!componentPath) {
        componentPath =
            componentType == "page"
                ? config?.page?.path || "src/pages"
                : config?.component?.path || "src/components";
    }
  
    // Handle folder structure configuration
    let componentDir = path.join(process.cwd(), componentPath);
    if (config?.component?.folderStructure) {
      componentDir = path.join(componentDir, fileName);
    }
    if (pathDir?.length) componentDir = path.join(componentDir, pathDir);
  
    // Create directory if not exists
    createDirectoryIfNotExists(componentDir);
    // Check if user provided a custom template
    const userTemplatePath = componentType === "page" ? config?.page?.templatePath || null : config?.component?.templatePath || null;
    if (userTemplatePath) {
      // If user provides template, just generate from it and exit
      generateFileFromTemplate(userTemplatePath, componentDir, `${fileName}.tsx`, { name: fileName });
      
      // Handle CSS file generation
      const widthCss = componentType === "page" ? config?.page?.withCss : config?.component?.withCss;
      if (widthCss) {
        const cssFileType = componentType === "page" ? config?.page?.cssFileType || "css" : config?.component?.cssFileType || "css";
        writeFile(
          path.join(componentDir, `${fileName}.${cssFileType}`),
          styleTemplate(fileName)
        );
      }
      return;
    }
  
    // ------------------- Normal logic -------------------
  
    let componentTemplate = "";
  
    // Validation for mutually exclusive options
    let hasFunctional = !config?.component?.type || config?.component.type !== "class" || !!options["functional"];
    let hasClass = config?.component?.type === "class" || !!options["class"];
    let withTestFile = !!config?.component?.withTest || !!options['test'];
    let withCss = !!config?.component?.withCss;
    let cssFileType = config?.component?.cssFileType || "css";
    let withSeoTag = false;
  
    // Handle case when componentType is 'page'
    if (componentType === 'page') {
      hasFunctional = !config?.page?.type || config?.page.type !== "class" || !!options["functional"];
      hasClass = config?.page?.type === "class" || !!options["class"];
      withTestFile = !!config?.page?.withTest || !!options['test'];
      withCss = !!config?.page?.withCss || !!options["withCss"];
      cssFileType = config?.page?.cssFileType || "css";
      withSeoTag = !!config?.page?.withSeoTag || !!options['seoTag'];
    }
  
    // Select component template based on class or functional
    if (hasClass) {
      componentTemplate = classComponentTemplate(fileName, withSeoTag);
    } else {
      componentTemplate = functionalComponentTemplate(fileName, withSeoTag);
    }
  
    // Write the component file
    writeFile(path.join(componentDir, `${fileName}.tsx`), componentTemplate);
    // Write the CSS file if enabled
    if (withCss) {
      writeFile(
        path.join(componentDir, `${fileName}.${cssFileType}`),
        styleTemplate(fileName)
      );
    }
  
    if (withTestFile) {
      writeFile(path.join(componentDir, `${fileName}.test.tsx`), componentTestTemplate(fileName));
    }
}
  
export function generateContext(name: string) {
    const { fileName, pathDir } = fileNameAndPath(name);
    let contextDir = path.join(
        process.cwd(),
        config?.context?.path || "src/context",
    );
    if (pathDir?.length) contextDir += '/' + pathDir;
    createDirectoryIfNotExists(contextDir);

    // Check for user-defined template
    const userTemplatePath = config?.context?.templatePath || null;
    if (userTemplatePath) {
        generateFileFromTemplate(userTemplatePath, contextDir, `${fileName}.context.tsx`, { name: fileName });
        return;
    }

    writeFile(path.join(contextDir, `${fileName}.context.tsx`), contextTemplate(fileName));

}

export function generateHook(name: string) {
    let { fileName, pathDir } = fileNameAndPath(name);
    let contextDir = path.join(
        process.cwd(),
        config?.hook?.path || "src/hooks",
    );
    if (pathDir?.length) contextDir += '/' + pathDir;
    createDirectoryIfNotExists(contextDir);

    // Check for user-defined template
    const userTemplatePath = config?.hook?.templatePath || null;
    if (userTemplatePath) {
        generateFileFromTemplate(userTemplatePath, contextDir, `use${fileName}.ts`, { name: fileName });
        return;
    }

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

    // Check for user-defined template
    const userTemplatePath = config?.service?.templatePath || null;
    if (userTemplatePath) {
        generateFileFromTemplate(userTemplatePath, serviceDir,  `${fileName}.service.ts`, { name: fileName });
        return;
    }

    writeFile(path.join(serviceDir, `${fileName}.service.ts`), `/* ${fileName} service file */`);

}


export function generateInterface(name: string) {
    let { fileName, pathDir } = fileNameAndPath(name);
    let folderPath = path.join(
      process.cwd(),
      config?.interface?.path || "src/utils/interfaces",
    );
    if(pathDir?.length) folderPath += '/' + pathDir;
    createDirectoryIfNotExists(folderPath);

    // Check for user-defined template
    const userTemplatePath = config?.interface?.templatePath || null;
    if (userTemplatePath) {
        generateFileFromTemplate(userTemplatePath, folderPath, `${fileName}.interface.ts`, { name: fileName });
        return;
    }

    writeFile(path.join(folderPath, `${fileName}.interface.ts`), interfaceTemplate(fileName));
}

export function generateTest(name: string) {
    let { fileName, pathDir } = fileNameAndPath(name);
    let folderPath = path.join(
      process.cwd(),
      config?.test?.path || "",
    );
    if(pathDir?.length) folderPath += '/' + pathDir;
    createDirectoryIfNotExists(folderPath);

    // Check for user-defined template
    const userTemplatePath = config?.test?.templatePath || null;
    if (userTemplatePath) {
        generateFileFromTemplate(userTemplatePath, folderPath, `${fileName}.test.tsx`, { name: fileName });
        return;
    }

    writeFile(path.join(folderPath, `${fileName}.test.tsx`), testTemplate(fileName));
}