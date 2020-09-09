module.exports = {
  extends: ['standard', 'prettier'],
  plugins: ['standard', 'prettier'],
  overrides: [
    {
      files: ['*.test.js', '__mocks__/**'],
      env: {
        jest: true,
      },
    },
  ],
}
