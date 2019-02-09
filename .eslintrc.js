module.exports = {
    "extends": "eslint-config-airbnb-es5",
    "globals": {
        "window": false,
        "_": false,
        "$": false,
        "angular": false
    },
    "rules": {
        "quotes": ["error", "double"],
        "func-names": "off",
        "one-var": ["error", "consecutive"],
        "default-case": ["error", { "commentPattern": "^skip\\sdefault" }]
    },
    "plugins": ["jasmine"],
    "env": {
      "jasmine": true
    }
};