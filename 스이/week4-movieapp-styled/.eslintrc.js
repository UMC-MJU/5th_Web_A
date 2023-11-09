module.exports = {
  env: {
    //프로젝트에서 사용할 환경을 설정
    browser: true, //브라우저 환경 설정
    es2021: true, //es2021을 true 옵션을 사용하면 ECMAScript 2021의 전역 변수들을 사전에 정의하고 ecmaVersion parser option도 12로 설정한다
  },
  extends: [
    //다른 규칙 모음에서 규칙을 가져옴
    'eslint:recommended', //ESLint에서 권장하는 규칙을 적용
    'plugin:react/recommended', //React의 스타일 가이드에 따라 규칙을 설정
  ],
  overrides: [
    //특정 파일 또는 디렉토리에서 다른 규칙을 적용
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    //parser의 동작을 설정
    ecmaVersion: 'latest', //프로젝트에 사용할 ECMAScript 버전을 설정
    sourceType: 'module', //parser의 export 형태를 설정
  },
  plugins: ['import', 'react'], //ESLint에서 제공하는 플러그인을 활성화(import, React 관련 규칙)
  rules: {
    //규칙을 설정
    'no-console': 'error', //콘솔 객체의 메서드에 대한 호출이나 할당을 금지하는 규칙
    'import/prefer-default-export': 'off', //파일에서 단일 export를 사용하는 경우 default export를 사용하는 것이 권장되는 규칙
  },
};
