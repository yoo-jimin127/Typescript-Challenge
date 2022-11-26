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
type Includes<T extends unknown[], U> = U extends T[number] ? true : false;
```

## ✅ 풀이

### ▶️ 문제 이해
- 요구사항 및 구현 계획    
1. 인자 : 튜플 `T`와 포함 여부를 확인할 `U`    
2. 튜플 `T` 내부에 인자 `U`의 포함 여부를 반환하기 위한 조건부 타입      

### ▶️ 해설
1. 튜플 `T`와 포함 여부를 확인할 `U`     
- 튜플 `T`의 경우 어떤 타입이 입력될지 모르는 상황이므로 `T extends unknown[]`으로 타입을 제한함
```ts
type Includes<T extends unknown[], U> = ...;
```
- **인덱스 타입**을 사용해 `T[number]`로 접근함으로써 `T` 내부의 모든 원소의 Union Type을 반환받음
```ts
type Includes<T extends unknown[], U> = T[number];
```

2.튜플 `T` 내부에 인자 `U`의 포함 여부를 반환하기 위한 조건부 타입  
- 타입의 두번째 인자로 받은 `U`가 튜플 `T`에 포함되어 있음을 확인하기 위해 `U extends T[number]`로 조건을 제한함
- 조건부 타입을 사용해 `U`가 포함되어 있을 경우 `true`를 반환, 포함되어 있지 않을 경우 `false`를 반환
```ts
type Includes<T extends unknown[], U> = U extends T[number] ? true : false;
```

### ▶️ 참고하면 좋은 자료
- [Index Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)