const packageJson = require("../../../package.json");

// TODO: customise this with your own settings!

export const projectName = packageJson.name.replace(/[-_]/g, " ");
