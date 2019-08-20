module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts}',
    '!src/index.ts',
    '!src/**/index.ts'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    "json",
    "lcov",
    "text-summary"
  ],

  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node'
  ],

  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  },

  setupFilesAfterEnv: ['<rootDir>/jest/setupJest.ts'],

  testPathIgnorePatterns: [
    '/coverage/',
    '/dist/',
    '/jest/',
    '/node_modules/',
    '/scripts/'
  ],

  testRegex: "(\.)(spec)(\.)(ts)$",

  transform: {
    "^.+\\.ts?$": "ts-jest",
  }
};
