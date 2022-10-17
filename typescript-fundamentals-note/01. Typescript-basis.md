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

### ✅ Getting Started
- `tsc [TYPESCRIPT_FILE]` : type script compiler (ts -> js)
    - module bundler (ex. webpack ...) 사용을 통해 typescript compile 간소화
    - `tsconfig.json`설정 [tsconfig.json reference](https://www.typescriptlang.org/tsconfig)

### ✅ 기본 타입 - 뭇자열, 숫자 , 배열
- TS 문자열 선언
```ts 
let ts_str: string = 'hello';
```

- TS 숫자 선언
```ts 
let num: number = 10;
```

- TS 배열 선언
```ts
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['a', 'b', 'c'];
let items: number[] = [1, 2, 3];
```

- TS 튜플 선언
```ts 
let ts_address: [string, number] = ['pangyo', 20];
    // 2개의 요소에 대한 타입만 정의해주었으므로 타입을 정의해준 요소의 수보다 많은 튜플 요소를 정의할 수 없음
```

- TS 객체 선언
```ts
let obj: object = {};
 let person: object = {
     name: 'jimin',
     age: 23,
};
```

```ts
let person: {name: string, age: number} = {
    name: 'jimin',
    age: 23,
}
```

- TS 진위 값 선언 (boolean)
```ts 
let show: boolean = true;
```