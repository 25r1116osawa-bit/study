const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Next.jsのアプリのパス
    dir:'./'
})

const customJestConfig = nextJest({
    // 使わないフォルダの指定
    testPathIgnorePatterns: ['<rootDir>/.next/','<rootDir>/node_modules/'],
    // 読み込むファイルの指定
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // テスト環境の指定
    testEnvironment: 'jest-enviroment-jsdom'
})

module.exports = createJestConfig(customJestConfig)