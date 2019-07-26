module.exports = {
  "env": {
      "node": true,
      "commonjs": true,
      "es6": true,
      "jest": true
  },
  extends: [
    'airbnb-base',
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018
  },
  "rules": {
      "require-atomic-updates": 1
  }
};