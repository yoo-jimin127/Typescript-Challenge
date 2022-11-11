# 43. Exclude(Easy)

## ✅ 문제
[43. Exclude](https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md)

내장 제네릭 `Exclude<T, U>`를 구현하세요.

- `T`에서 `U`에 할당할 수 있는 타입을 제외하는 내장 제네릭

- 예시)
```tsx
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

## ✅ 정답 코드
```tsx
type MyExclude<T, U> = T extends U ? never : T;
```

## ✅ 풀이

### ▶️ 문제 이해
- 목표 : 타입 `U`에 포함되어 있지 않은 타입 `T`의 요소 반환

### ▶️ 해설
- **분산 조건부 타입** : 검사된 타입이 벗겨진(naked) 타입 매개변수인 조건부 타입
   - 인스턴스화 중 자동으로 Union Type으로 분산됨
    - ex) `T`에 대한 타입 인수 `A | B | C`를 사용해 `T extends U ? X : y`를 인스턴스화 할 경우,
    	- `(A extends U ? X : Y) | B extends U ? X : Y) | C extends U ? X : Y)`로 결정

- 예시)
```ts
type T10 = TypeName<string | (() => void)>;  // "string" | "function"
type T12 = TypeName<string | string[] | undefined>;  // "string" | "object" | "undefined"
type T11 = TypeName<string[] | number[]>;  // "object"
```

- 분산 조건부 타입을 적용한 `MyExclude<T,U>` 구현
   - 타입 `T`를 순회하며 `U`의 요소가 포함되어 있다면 → `never` 리턴
   - 타입 `T`에 `U`의 요소가 포함되어 있지 않다면 → `T` 리턴
```tsx
type MyExclude<T, U> = T extends U ? never : T;
```

### ▶️ 참고하면 좋은 자료
- [분산 조건부 타입](https://typescript-kr.github.io/pages/advanced-types.html#%EB%B6%84%EC%82%B0-%EC%A1%B0%EA%B1%B4%EB%B6%80-%ED%83%80%EC%9E%85-distributive-conditional-types)