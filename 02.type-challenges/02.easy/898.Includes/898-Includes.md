# 898. Includes(Easy)

## ✅ 문제
[898. Includes](https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md)

Javascript의 `Array.includes` 함수를 타입 시스템 내에서 구현해보세요.     
타입은 두 개의 인자를 받습니다.     
반환되는 값은 `true` 또는 `false`이어야 합니다.    

- 예시)
```ts
// expected to be `false`
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">;
```

## ✅ 정답 코드
```ts
type Includes<T extends readonly unknown[], U> = (
  {[A in keyof T]: Equal<T[A], U> } ) extends false[] ? false : true
```

## ✅ 풀이

### ▶️ 문제 이해
- 요구사항 및 구현 계획    
1. 인자 : 튜플 `T`와 포함 여부를 확인할 `U`    
2. 튜플 `T` 내부에 인자 `U`의 포함 여부를 반환하기 위한 조건부 타입      

### ▶️ 해설
1. 튜플 `T`와 포함 여부를 확인할 `U`     
- 튜플 `T`의 경우 어떤 타입이 입력될지 모르는 상황이므로(+ readonly 옵션 고려) `T extends readonly unknown[]`으로 타입을 제한함
```ts
type Includes<T extends readonly unknown[], U> = ...;
```
- **인덱스 타입**을 사용해 `T[number]`로 접근함으로써 `T` 내부의 모든 원소의 Union Type을 반환받음
```ts
type Includes<T extends readonly unknown[], U> = T[number];
```

2.튜플 `T` 내부에 인자 `U`의 포함 여부를 반환하기 위한 조건부 타입  
- 타입의 두번째 인자로 받은 `U`가 튜플 `T`에 포함되어 있음을 확인하기 위해 utils `Equal`을 사용
    - 이 때, 객체 형태의 타입 `T`를 유니온 타입으로 변경해 `U`와의 `Equal`을 비교
```ts
type Includes<T extends readonly unknown[], U> = (
    {[A in keyof T]: Equal<T[A], U>} ? false : true
)
```
- 위의 방법대로 코드를 입력하니 오류 발생. `false의 형식이 true의 제약조건을 만족하지 않음`   
    → 조건부 연산자를 사용해 `extends false[]`를 해주니 테스트케이스 통과...
```ts
type Includes<T extends readonly unknown[], U> = (
  {[A in keyof T]: Equal<T[A], U> } ) extends false[] ? false : true
```

### ▶️ 참고하면 좋은 자료
- [Index Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- [keyof](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-keyof-typeof-%EC%82%AC%EC%9A%A9%EB%B2%95)