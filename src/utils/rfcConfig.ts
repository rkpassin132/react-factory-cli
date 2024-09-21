import path from "path";
import fs from "fs-extra";

export interface Config {
  component: {
    path: string;
    type: string;
  };
  page: {
    path: string;
    type: string;
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
}

const getConfig = (): Config | null => {
  const configPath = path.join(process.cwd(), "rfc-config.json");

  if (fs.existsSync(configPath)) {
    try {
      return fs.readJsonSync(configPath) as Config;
    } catch (error) {
      console.error("Error reading configuration file:", error);
      return null; // Return null if there is an error reading the config file
    }
  } else {
    console.log("No configuration file found. Using default settings.");
    return null;
  }
};

export default getConfig;
