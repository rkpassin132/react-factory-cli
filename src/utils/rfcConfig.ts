import path from "path";
import fs from "fs-extra";

export interface Config {
  rootLocation: string;
  folderStructure: "basic" | "advance";
  componentLocation?: string;
  styleLocation?: string;
  styleType?: string;
  serviceLocation?: number;
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
