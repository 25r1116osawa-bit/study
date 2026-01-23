/** @type {import('jest').Config} */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Next.js プロジェクトルート
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // jest-dom をここで読み込む
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['@swc/jest'], // ここが肝
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1', // alias 対応
  },
};

module.exports = createJestConfig(customJestConfig);
