# 533. Concat(Easy)

## ✅ 문제
[533. Concat](https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md)

타입 시스템 내에서 자바스크립트의 `Array.concat` 함수를 구현해보세요. 
타입은 두 개의 인자를 받습니다. 
결과값은 입력값이 순서대로 포함된 새로운 배열이어야 합니다.

- 예시)
```ts
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

## ✅ 정답 코드
```ts
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
```

## ✅ 풀이

### ▶️ 문제 이해
- 요구사항 및 구현 계획
1. 두 인자의 타입은 정해져있지 않음
2. 두 입력값이 순서대로 저장된 새로운 배열 반환

### ▶️ 해설
1. 두 인자의 타입은 정해져있지 않음
- 타입이 정해져있지 않은 배열으로써 `extends unknown[]`으로 두 입력 값을 전달받도록 구현
```ts
type Concat<T extends unknown[], U extends unknown[]> = ...
```

2. 두 입력값이 순서대로 저장된 **새로운 배열** 반환
- [spread 연산자](https://radlohead.gitbook.io/typescript-deep-dive/future-javascript/spread-operator)를 사용해 두 제네릭의 원소들을 새로운 하나의 배열로 생성해 반환
- 입력값이 순서대로 포함된 새로운 배열을 반환하기 위해 `T`, `U` 순서로 배열에 저장
```ts
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
```

### ▶️ 참고하면 좋은 자료
- [variadic tuple types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [spread operator](https://radlohead.gitbook.io/typescript-deep-dive/future-javascript/spread-operator)