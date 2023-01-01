# 12. Chainable Options(Medium)

## ✅ 문제

메서드 체이닝은 자바스크립트에서 흔하게 사용됩니다. 타입스크립트에서 체이닝을 적절하게 타입으로 정의해 줄 수 있을까요?

이번 챌린지에서는 클래스나 객체 중 선호하는 방식을 통해 `option(key, value)`와 `get()` 메서드를 제공하는 타입을 만들어야 합니다. `option(key, value)` 함수는 주 어지는 키와 값을 이용해 config 타입을 확장합니다. 최종적인 결과는 `get()` 메서드 를 이용하여 접근할 것입니다.

- 예시

```tsx
declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
```

## ✅ 정답 코드

```tsx
type Chainable<O = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>;
  get(): O;
};
```

## ✅ 풀이

### ▶️ 문제 이해

### ▶️ 해설

### ▶️ 참고하면 좋은 자료

## ✅ 후기
