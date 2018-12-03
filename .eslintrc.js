module.exports = {
  extends: ["airbnb-base", "plugin:jest/recommended"],
  plugins: ["import", "jest"],
  env: {
    node: true,
    "jest/globals": true
  },
  rules: {
    "no-param-reassign": 0,
    "func-names": 0,
    "consistent-return": 0,
    "new-cap": 0,
    "no-console": 0,
  }
};
