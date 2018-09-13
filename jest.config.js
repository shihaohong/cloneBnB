module.exports = {
  collectCoverageFrom: [
    'client/components/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 8,
      functions: 65,
      lines: 60,
    },
  },
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  testPathIgnorePatterns: [
    '<rootDir>/client/components/__tests__/data/',
  ],
};
