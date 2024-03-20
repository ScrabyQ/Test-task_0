/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  testMatch: [
    "**/tests/**/*.[jt]s?(x)",
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};

module.exports = config;
