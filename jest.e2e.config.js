module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json'
  ],
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest'
  }
};
