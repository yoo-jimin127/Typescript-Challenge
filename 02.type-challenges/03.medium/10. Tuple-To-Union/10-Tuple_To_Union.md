# 10. Tuple To Union(Medium)

## ✅ 문제
1. [TupleToUnion 문제 보기](https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md)
튜플 값을 Union으로 변환하는 내장 제네릭 `TupleToUnion<T>` 를 구현하세요.

- 예시
```tsx
type Arr = ['1', '2', '3']
type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```

## ✅ 정답 코드
```tsx
type TupleToUnion<T extends unknown[]> = T[number];
```

## ✅ 풀이
### ▶️ 해설
`T` 의 모든 요소를 union으로 변환해주기 위해 `T[number]` 의 형태로 리턴
```tsx
type TupleToUnion<T> = T[number];
```
→ `Type 'number' cannot be used to index type'T'` 에러 발생

```tsx
type TupleToUnion<T extends unknown[]> = T[number];
```
해결 !!
