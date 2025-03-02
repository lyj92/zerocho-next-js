import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 사용하지 않는 변수 경고로 변경
      "@typescript-eslint/no-unused-vars": "warn",

      // 타입 관련 에러 완화 설정
      // "@typescript-eslint/no-explicit-any": "warn", // any 타입 사용 시 경고로만 표시
      // "@typescript-eslint/ban-ts-comment": "warn",
      // "@typescript-eslint/no-non-null-assertion": "warn", // non-null assertion(!) 사용 시 경고로만 표시
      // "@typescript-eslint/no-empty-interface": "warn", // 빈 인터페이스 허용
      // "@typescript-eslint/no-empty-function": "warn", // 빈 함수 허용
      // "@typescript-eslint/no-inferrable-types": "off", // 타입 추론이 가능해도 명시적 타입 선언 허용

      // // 추가 타입 관련 규칙 완화
      "@typescript-eslint/ban-types": "warn", // {} 같은 타입 사용 시 경고로만 표시
      // "@typescript-eslint/no-misused-promises": "warn", // 프로미스 사용 오류 경고로만 표시

      // 심각한 타입 오류는 남겨두되, 개발 편의성을 위한 규칙은 경고로 변경
      "react/prop-types": "off", // React prop-types 검사 비활성화 (TypeScript가 대체)

      // 또는 더 세밀한 설정을 원한다면:
      /*
      "@typescript-eslint/no-unused-vars": ["warn", {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }],
      */
    },
  },
];

export default eslintConfig;
