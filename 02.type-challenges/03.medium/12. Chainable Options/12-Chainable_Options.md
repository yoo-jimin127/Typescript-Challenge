# 12. Chainable Options(Medium)

## ✅ 문제

메서드 체이닝은 자바스크립트에서 흔하게 사용됩니다. 타입스크립트에서 체이닝을 적절하게 타입으로 정의해 줄 수 있을까요?

이번 챌린지에서는 클래스나 객체 중 선호하는 방식을 통해 `option(key, value)`와 `get()` 메서드를 제공하는 타입을 만들어야 합니다. 

`option(key, value)` 함수는 주 어지는 키와 값을 이용해 config 타입을 확장합니다. 최종적인 결과는 `get()` 메서드 를 이용하여 접근할 것입니다.

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

1. 제공된 기본 인터페이스 분석
2. 제네릭을 통해 `key`와 `value` 타입 추론
3. 옵션 저장을 위한 매개변수 선언
4. chainable하기 위해 `Chainable` 타입 반환

### ▶️ 해설

1. 제공된 기본 인터페이스 분석

```tsx
type Chainable = {
  option(key: string, value: any): any
  get(): any
}
```

- 현재 `key`와 `value`의 타입이 `string`과 `any`로 설정되어 있으므로 타입을 추론해 할당하도록 해야 함

1. 제네릭을 통해 `key`와 `value` 타입 추론
- 인터페이스의 `key`와 `value`에 타입 매개변수를 사용해 타입 추론 할당이 가능하도록 함
- `Type ‘K’ is not assignable to type ‘string | number | symbol’` 컴파일 에러 해결을 위해 `K extends string` 제약 추가

```tsx
type Chainable = {
  option<K extends string, V>(key: K, value: V): any;
  get(): any
}
```

1. 옵션 저장을 위한 매개변수 선언
- 메서드가 여러번 호출되는 경우에도 옵션을 저장해두기 위한 매개변수가 필요함
- 비어있는 객체 형태의 매개변수 `O`를 `Chainable` 타입에 추가

```tsx
type Chainable<O = {}> = {
	option<K extends string, V>(key: K, value: V): any;
	get(): any;
}
```

1. chainable하기 위해 호출 주체인 `Chainable` 타입 반환
- 타입 매개변수를 통해 전달되는 타입 정보를 함꼐 저장하기 위해 `option`에 `Chainable<O & {[P in K]: V}>` 추가
- `get()` 호출 시 `option(key, value)`를 통해 저장된 타입 정보를 반환하도록 `O` 지정

```tsx
type Chainable<O = {}> = {
	option<K extends string, V>(key: K, value: V): Chainable<O & {[P in K]: V }>;
	get(): O;
}
```