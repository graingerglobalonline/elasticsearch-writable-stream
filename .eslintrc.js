module.exports = {
  extends: ['zoro', "eslint:recommended"],
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
};
