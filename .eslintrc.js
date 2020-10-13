module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["gridsome"],
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "@vue/prettier",
  ],
  rules: {
    "gridsome/format-query-block": "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
