## 10/17 TS Study 기록
---
### ✅ Typescript란?
- TS : JS에 타입을 부여한 언어 (JS expanded ver.)
    - JS의 super set
- **compile** : 타 브라우저에서의 실행을 위해 파일을 변환하는 과정

### ✅ Why typescript?
- 에러의 사전 방지
    - jsDocs 표준 문법을 사용해 js를 ts화 시켜보기
```js
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/** 
 * @returns {Promise<User>} 
 * */
function fetchUser() {
    return axios.get(url);
}
```
- 코드 가이드 및 자동 완성 (개발 생산성 향상)
    - `@ts-check`를 통해 JS에서도 일부 타입 체크를 할 수 있음
```js
// @ts-check

/**
 * @param {number} a first-parameter
 * @param {number} b second-parameter
 */

function sum(a, b) {
    return a + b;
}

sum(10, '20');
```