module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    "overrides": [
        {
            "files": [
                "*.svelte"
            ],
            "processor": "svelte3/svelte3"
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "extraFileExtensions": [
            ".svelte"
        ],
        "project": [
            "./tsconfig.json"
        ],
        "tsconfigRootDir": "./"
    },
    "plugins": [
        "svelte3",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": [
            "error",
            "never"
        ]
    },
    "settings": {
        "svelte3/typescript": true
    }
};