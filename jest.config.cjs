/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleFileExtensions: ["json", "js", "jsx", "ts", "tsx", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
