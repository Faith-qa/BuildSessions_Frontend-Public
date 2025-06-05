module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Required for React/JSX
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest', // Transform .ts, .tsx, .js, .jsx
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Map @/ to src/ for Next.js aliases
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // If using MSW
  transformIgnorePatterns: [
    '/node_modules/(?!@dnd-kit)', // Allow @dnd-kit to be transformed
  ],
};