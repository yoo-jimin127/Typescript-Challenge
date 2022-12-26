# 3312. Parameters(Easy)

## ✅ 문제

[3312.Parameters](https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md)

- 예시)

```tsx

const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
```

## ✅ 정답 코드

```tsx
type MyParameters<T extends (...args: any[]) => any> =
  T extends (...args: [...infer P]) => any ? P : never;
```

## ✅ 풀이
### ▶️ 문제 이해
1. 인자로 들어올 `T` 를 함수의 타입으로 제한
2. `T` 의 파라미터의 타입을 반환

### ▶️ 해설
1. 인자로 들어올 `T` 를 함수의 타입으로 제한
    - 함수의 타입으로 `T` 를 제한하기 위해 `<T extends (...args: any[]) => any>`
    - 인자의 타입을 가져오기 위해 `args` 를 가져옴
2. `T` 의 파라미터의 타입을 반환
    - `infer`를 사용해 `args` 의 타입 추론
