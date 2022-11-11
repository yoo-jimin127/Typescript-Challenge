# 14. First of Array (Easy)

## ✅ 문제

배열(튜플) `T`를 받아 첫 원소를 반환하는 제네릭 `First<T>`를 구현하세요.

- 예시)

```tsx
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```

## ✅ 정답 코드

```tsx
type First<T extends any[]> = T extends [] : never ? T[0];
```

## ✅ 풀이

### ▶️ 문제 이해
- 목적 : 배열의 첫번째 원소를 반환

### ▶️ 해설
1. **인덱스 접근**을 통해 인자로 받은 배열(튜플) `T[0]`으로 해결 시도
```ts
type First<T extends any[]> = T[0];
```

3. **배열의 empty 여부** 확인 필요
	- if) 빈 배열 ⭕️ : 반환할 배열 값이 없으므로 `never` 리턴
    - else) 빈 배열 ❌ : 1번 접근 방식대로 `T[0]` 리턴
 - [조건부 타입](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)을 사용해 `true`, `false`에 따른 반환값 처리
     - 주어진 타입이 조건에 있는 타입에 할당될 수 있는 경우 : `true`
     - 타입에 할당될 수 없는 경우 : `false`
 - 이 때 `T extends []`를 통해 인자로 받은 `T`가 배열의 속성을 갖도록 함
```ts
type First<T extends any[]> = T extends [] ? never : T[0];
```

### ▶️ 참고하면 좋은 자료
[조건부 타입](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)