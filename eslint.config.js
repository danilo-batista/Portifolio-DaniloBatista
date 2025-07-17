import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      ecmaVersion: 2025,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    files: ["src/**/*.{js,mjs,cjs,ts,jsx}"],
    ignores: ["**/node_modules/", ".git/"],
    plugins: {
      react: react,
      reactHooks: reactHooks,
      jsxA11y: jsxA11y,
      prettier: prettier,
    },
    rules: {
      "react/self-closing-comp": "error",
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: "all",
          arrowParens: "always",
          semi: true,
          endOfLine: "auto",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "jsxA11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsxA11y/aria-props": "warn",
      "jsxA11y/aria-proptypes": "warn",
      "jsxA11y/aria-unsupported-elements": "warn",
      "jsxA11y/role-has-required-aria-props": "warn",
      "jsxA11y/role-supports-aria-props": "warn",
      "react/no-unknown-property": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
