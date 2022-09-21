module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-gwanyong`
  extends: ["gwanyong"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
