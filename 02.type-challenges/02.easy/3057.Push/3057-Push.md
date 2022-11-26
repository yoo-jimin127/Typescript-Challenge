# 3057. Push(Easy)

## ✅ 문제
[3057. Push](https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md)    
`Array.push`를 타입 시스템 내에서 구현해보세요.    

- 예시)
```tsx
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```

## ✅ 정답 코드
```tsx
type Push<T extends unknown[], U> = [...T, U];
```

## ✅ 풀이
### ▶️ 문제 이해
1. 타입의 인자 : 튜플 `T` 와 push할 인자 `U`
2. 튜플 `T` 에 인자 `U` push

### ▶️ 해설
1. 타입의 인자 : 튜플 `T` 와 push할 인자 `U`
- 튜플 `T` : 모든 테스트 케이스를 통과하기 위해 제네릭에 제한해줄 것
- `T extends unknown[]` 을 통해 `T`에 배열(튜플)으로 제약조건 적용
```tsx
type Push<T extends unknown[], U> = ...;
```
    
1. 튜플 `T` 에 인자 `U` push
- 스프레드 연산자를 사용해 튜플 `T`  뒤에 인자 `U` 를 추가
```tsx
type Push<T extends unknown[], U> = [...T, U];
```