import path from "path";
import logger from "./logger"
import fs from "fs-extra";

export interface Config {
  component: {
    path: string;
    templatePath?: string;
    type: string;
    withTest: boolean;
    folderStructure?: boolean;
    withCss?: boolean;
    cssFileType?: string;
  };
  page: {
    path: string;
    type: string;
    withTest: boolean;
    withSeoTag: boolean;
    templatePath?: string;
    folderStructure?: boolean;
    withCss?: boolean;
    cssFileType?: string;
  };
  service: {
    path: string;
    templatePath?: string;
  };
  route: {
    path: string;
    templatePath?: string;
  };
  context: {
    path: string;
    templatePath?: string;
  };
  hook: {
    path: string;
    templatePath?: string;
  };
  interface: {
    path: string;
    templatePath?: string;
  }
  test: {
    path: string;
    templatePath?: string;
  }
}

const getConfig = (): Config | null => {
  const configPath = path.join(process.cwd(), "rfc-config.json");

  if (fs.existsSync(configPath)) {
    try {
      return fs.readJsonSync(configPath) as Config;
    } catch (error) {
      logger.error("Error reading configuration file");
      return null; // Return null if there is an error reading the config file
    }
  } else {
    logger.log("No configuration file found. Using default settings.");
    return null;
  }
};

export default getConfig;
