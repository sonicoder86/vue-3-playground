module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue3-jest'
  },
  testEnvironment: 'jsdom'
};
