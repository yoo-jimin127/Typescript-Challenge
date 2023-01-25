# 3060. Unshift(Easy)

## ✅ 문제

[3060.Unshift](https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md)

`Array.unshift()`를 타입 형태로 구현해보세요.

- 예시)

```tsx
type Result = Unshift<[1, 2], 0>; // [0, 1, 2]
```

## ✅ 정답 코드

```tsx
type Unshift<T extends unknown[], U> = [U, ...T];
```

## ✅ 풀이

### ▶️ 해설

1. `T` 와 `U` 인자 받기
2. 반환하는 배열에 `U` 를 첫 원소로 추가한 뒤, 스프레드 연산자로 튜플 `T` 를 뿌려줌
