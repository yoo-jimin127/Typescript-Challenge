# 18. Length of Tuple(Easy)

## ✅ 문제

배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현하세요.

- 예시)

```tsx
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

## ✅ 정답 코드

```tsx
type Length<T extends readonly any[]> = T['length'];
```

## ✅ 풀이

### ▶️ 문제 이해
- 목표 :
   - 배열의 길이에 접근
   - 입력된 타입 변수로 모든 유형의 배열(튜플)이 올 수 있도록 처리

### ▶️ 해설
1. `length` 프로퍼티로 배열 길이 접근
```ts
type Length<T> = T['length'];
```
- 결과 : 테스트 예제는 정상적으로 length 값을 리턴
- 개선 사황 : 모든 유형의 배열(튜플)에 대한 length 값을 리턴해야 하지만, 일부 유형에서 오류 발생

2. `extends readonly any[]`로 입력된 타입 변수로 모든 유형의 배열이 올 수 있도록 처리
```ts
type Length<T extends readonly any[]> = T['length'];
```

### ▶️ 추가 풀이
- 2번 과정에서 `extends any`로 접근하였을 때,
```ts
type Length<T extends any> = T['length'];
// Type ‘length’ cannot be used to index type ‘T’.
```
위와 같은 컴파일 에러 발생

- 입력 타입 변수를 모든 유형의 배열이 올 수 있도록 하는 `extends readonly any[]`로 주어도 가능하나, 아래와 같은 방법으로 `extends { length: number }`를 사용해서도 해결 가능
```ts
type Length<T extends { length: number }> = T["length"];
```

### ▶️ 참고하면 좋은 자료
- [Javascript : Array.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)