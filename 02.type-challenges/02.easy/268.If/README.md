# 268. If(Easy)

## ✅ 문제
[268. If](https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md)

조건 `C`를 받아서 참일 경우에는 `T`를 반환하고 거짓일 경우에는 `F`를 반환하는 유틸리티 타입 `If`를 구현해보세요. 
`C`는 `true` 또는 `false`일 것이 기대되고, `T`와 `F`는 어떤 타입이든 괜찮습니다.

- 예시)
```ts
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

## ✅ 정답 코드
```tsx
type If<C extends boolean, T, F> = C extends true ? T : F;
```

## ✅ 풀이

### ▶️ 문제 이해
- 요구 사항
1. 조건 `C`는 `true` or `false`
2. 조건`C`가 `true`일 경우 `T`를 반환, `false`일 경우 `F`를 반환

### ▶️ 해설
1. 조건 `C`는 `true` or `false` 
→ `C`의 타입을 `boolean`으로 제한
- `T`와 `F`의 타입은 제한되어 있지 않음
```ts
type If<C extends boolean, T, F> = ...;
```

2. 조건`C`가 `true`일 경우 `T`를 반환, `false`일 경우 `F`를 반환
- 조건부 타입을 사용
- `C extends true`로 `true`일 경우에 대한 조건 처리
```ts
type If<C extends boolean, T, F> = C extends true ? T : F;
```