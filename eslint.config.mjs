import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-extra-semi": "error",
      "@typescript-eslint/no-unsafe-argument": "warn",
    },
  },
  {
    files: ["*.ts"],
    ...tseslint.configs.disableTypeChecked,
  }
);
