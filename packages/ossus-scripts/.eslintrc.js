module.exports = {
    parser: "babel-eslint",
    "env": {
        "node": true,
        "commonjs": true,
    },
    "extends": "eslint:recommended",
    "plugins": [
        "babel"
    ],
    "rules": {
        "indent": [
            "error",
            2,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "error",
            { "argsIgnorePattern": "^_" }
        ],
        "babel/semi": 1,
    }
}