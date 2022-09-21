module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-gwanyong`
  extends: ["acme"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
