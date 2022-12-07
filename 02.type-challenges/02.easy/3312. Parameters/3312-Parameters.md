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

### ▶️ 해설

