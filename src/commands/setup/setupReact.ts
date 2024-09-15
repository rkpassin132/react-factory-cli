import path from "path";
import * as logger from "../../utils/logger";
import { runCommand } from "../../utils/commands";


export async function setupReact(options: any) {
  try {
    const destinationPath = path.join(process.cwd(), options.path);
    let repo = "https://github.com/rkpassin132/react-factory-setup.git";

    let templateType: string = options.advanced ? "advanced" : "basic";
    let cssFramework: string = options.material
      ? "-material"
      : options.bootstrap
      ? "-bootstrap"
      : "";

    const folderMap = {
      basic: "src-basic",
      "basic-material": "src-basic-material",
      "basic-bootstrap": "src-basic-bootstrap",
      advanced: "src-advanced",
      "advance-material": "src-advance-material",
      "advance-bootstrap": "src-advance-bootstrap",
    };
    const folderKey =
      `${templateType}${cssFramework}` as keyof typeof folderMap;
    const folder = folderMap[folderKey];

    if (!folder) {
      console.error("Invalid template type specified!");
      return;
    }

    const fullPath = path.resolve(process.cwd(), destinationPath);

    logger.info("Creating application...");
    // Clone the repo without checkout
    runCommand(`git clone --no-checkout ${repo} ${fullPath}`);

    // Initialize sparse checkout
    runCommand("git sparse-checkout init", fullPath);

    // Set the specific folder to be checked out
    runCommand(`git sparse-checkout set ${folder}`, fullPath);

    // Checkout the files
    runCommand("git checkout", fullPath);

    logger.info("Application created");
    // logger.info("Installing packages...");
    // runCommand(`cd ${destinationPath} && pnpm install`);
    // logger.info("Packages installed");

  } catch (error) {
    console.log(error);
    logger.error("Faile to setup repo");
  }
}
