/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: { "src/(.*)": "<rootDir>/src/$1" }, // Handle module aliases (this will be automatically configured for you soon)
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
