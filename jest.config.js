module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
      global: {
          branches: 100,
          lines: 100
      }
  }
};