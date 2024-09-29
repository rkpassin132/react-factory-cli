import path from "path";
import logger from "./logger"
import fs from "fs-extra";

export interface Config {
  component: {
    path: string;
    type: string;
    withTest: boolean;
  };
  page: {
    path: string;
    type: string;
    withTest: boolean;
    withSeoTag: boolean;
  };
  service: {
    path: string;
  };
  route: {
    path: string;
  };
  context: {
    path: string;
  };
  hook: {
    path: string;
  };
  interface: {
    path: string;
  }
  test: {
    path: string;
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
