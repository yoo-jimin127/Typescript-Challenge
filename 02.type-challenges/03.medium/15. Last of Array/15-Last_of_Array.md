# 15. Last of Array(Medium)

## ✅ 문제

배열 `T`를 받아 배열의 마지막 원소를 반환하는 제네릭 `Last<T>`를 구현해보세요.

```tsx
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
```

## ✅ 정답 코드

```tsx
type Last<T extends any[]> = 
    T extends [...infer P, infer U] ? U: never;
```

## ✅ 풀이

### ▶️ 문제 이해

### ▶️ 해설

### ▶️ 참고하면 좋은 자료

## ✅ 후기
