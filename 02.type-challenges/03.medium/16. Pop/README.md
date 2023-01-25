# 16. Pop(Medium)

## ✅ 문제

배열 `T`를 받아서 배열의 마지막 원소를 제외한 배열을 반환해주는 제네릭 `Pop<T>`를 구현해보세요.

- 예시

```tsx
type arr1 = ["a", "b", "c", "d"];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]
```

## ✅ 정답 코드

```tsx
type Pop<T extends any[]>
    = T extends [...infer P, infer T] ? P : never;
```

## ✅ 풀이

### ▶️ 문제 이해

### ▶️ 해설

### ▶️ 참고하면 좋은 자료

## ✅ 후기
