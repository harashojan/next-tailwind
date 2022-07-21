module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: { tailwindcss: { groupByResponsive: true } },
  plugins: [
    "simple-import-sort",
    "sort-destructure-keys",
    "tailwindcss",
    "strict-dependencies",
    "import-access",
    "testing-library",
  ],

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "no-alert": "error",
    "no-console": "error",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom,next/**}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],

    "react/prop-types": "off", // Is this incompatible with TS props type?
    "react/require-default-props": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-curly-newline": "off", // prettierと競合する
    "react/state-in-constructor": ["error", "never"],

    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@/features/*/*"],
      },
    ],
  },
  overrides: [
    {
      files: ["src/pages/**/*.page.tsx", "src/pages/api/**/*.api.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
