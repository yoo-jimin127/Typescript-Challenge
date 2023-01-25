# 20. Promise.all(Medium)

## ✅ 문제

`PromiseLIke`객체 배열을 받는 함수 `PromiseAll`을 만드세요.

반환되는 값은 `Promise<T>`이고 `T`는 성공된 결과가 담긴 배열입니다.

- 예시

```tsx
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// expected to be `Promise<[number, number, string]>`
const p = Promise.all([promise1, promise2, promise3] as const);
```

## ✅ 정답 코드

```tsx
declare function PromiseAll<T extends unknown[]>(
  Value: readonly [...T]
): Promise<{ 
	[P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }
>;
```

## ✅ 풀이

### ▶️ 문제 이해

본 문제에 대한 고려 사항을 다음과 같이 정리해보았습니다.

1. `PromiseAll` 의 반환 값은 `Promise<T>` 의 형태
    - 성공된 결과 (`Promise<T>`)의 타입을 얻어내는 방법
        - [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)를 사용해 가배열 `Value` 의 타입을 쪼개 원소 단위로 접근
2. 가배열 `Value` 에 `Promise`가 속한 경우
    - `Promise` 로 감싸져있는 타입을 꺼내는 작업 필요
        - 조건부 타입 적용으로 `Promise` 여부 확인

### ▶️ 해설

1. `PromiseAll` 의 반환 값은 `Promise<T>` 의 형태

```tsx
declare function PromiseAll<T>(Value: T): Promise<T>;
```

- 성공된 결과 (`Promise<T>`)의 타입을 얻어내는 방법
    - [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)를 사용해 가배열 `Value` 의 타입을 쪼개 원소 단위로 접근

```tsx
declare function PromiseAll<T extends unknown[]>(
	Value: [...T]
): Promise<T>;
```

- 위 코드 입력 시 “Argument of type ‘readonly[1,2,3]’ is not assignable to parameter of type ‘[1,2,3]’.” 오류 발생
    
    → 가배열 `Value` 에 `readonly` 확인 필요
    

```tsx
declare function PromiseAll<T extends unknown[]>(
	Value: readonly [...T]
): Promise<T>;
```

1. 가배열 `Value` 에 `Promise`가 속한 경우
- `Promise` 로 감싸져있는 타입을 꺼내는 작업 필요

```tsx
declare function PromiseAll<T extends unknown[]>(
	Value: readonly [...T]
): Promise<[T extends Promise<infer R> ? R : T>;
```

- 조건부 타입 적용으로 `Promise` 여부 확인

```tsx
declare function PromiseAll<T extends unknown[]>(
  Value: readonly [...T]
): Promise<{ 
	[P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }
>;
```

### ▶️ 참고하면 좋은 자료

- [가변 인자 튜플](https://velog.io/@from_numpy/%EA%B0%80%EB%B3%80-%EC%9D%B8%EC%9E%90-%ED%8A%9C%ED%94%8C-Variadic-Tuple-Types)

## ✅ 후기

아 … 너무 어려워요 … 풀었는데 푼 게 아닌 기분 .. 유노와람쌩 …?

이게 맞나요 선생님들…?
