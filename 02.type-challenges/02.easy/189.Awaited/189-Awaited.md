# 189. Awaited(Easy)

## ✅ 문제
[189. Awaited](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md)

만약 Promise 등을 통해 래핑된 타입이 있다면, 그 안에 있는 타입을 어떻게 얻을수 있을까요? 
예를 들어 Promise<ExampleType>과 같은 타입이 있다면 ExampleType을 어떻게 얻을 수 있을까요?

- 예시)
```tsx
type ExampleType = Promise<string>
type Result = MyAwaited<ExampleType> // string
```

## ✅ 정답 코드
```tsx
type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T;
```

## ✅ 풀이

### ▶️ 문제 이해
- 목적 : 래핑(wrapping)된 타입의 안에 있는 타입을 얻을 수 있는 방법 
  → 타입을 언래핑(un-wrapping)해 그 안의 타입을 알아낼 것
   - 언래핑(un-wrapping) : 하나의 타입 내부에 있는 타입을 얻어내는 방식
   - ex) `Promise<string>` : `Promise` 타입을 언래핑해 `string` 타입을 얻을 수 있음

### ▶️ 해설
1. **`Promise<string>`을 인자로 받을 경우 언래핑을 통해 `string` 타입을 반환받음**
  - `Promise`가 아닌 경우에는 `T`를 반환
```ts
type Awaited<T> = T extends Promise<string> ? string : T;
```
- 1번 접근 방식의 한계
   - `Promise` 내부의 타입이 `string`이 아닌 경우에 대해 처리해줄 수 없음
   - `Promise` 내부의 타입을 모르는 경우에도 반환할 수 있도록 개선 필요
  
2. **조건부 타입의 타입 추론 사용**
  - `Promise` 안에 무엇이 있는지 알 수 없으나 `Promise<T>`에 어떤 타입이 존재한다는 사실은 알고 있는 상태
    - `infer` 키워드를 사용해 조건부 타입에서 내부 타입을 추론
       - if) `Promise<infer R>` : 타입스크립트에서 Promise 내부의 타입을 추론해 `R`에 할당해줌
 ```ts
 type Awaited<T> = T extends Promise<infer R> ? R : T;
 ```
 - 2번 접근 방식의 한계
   - 타입의 재귀적인 언래핑이 필요한 경우
     - ex) `Promise<Promise<string>>` → `string`을 반환하도록 처리
  
3. **타입의 재귀적 언래핑을 적용**
  - `Promise<Promise<string>>`과 같이 재귀적인 언래핑이 필요한 경우 매개변수 `R`을 `Awaited`타입을 사용해 재귀적으로 반복
```ts
type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T;
``` 
  
### ▶️ 참고하면 좋은 자료
- [조건부 타입](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [조건부 타입의 타입 추론 1](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [조건부 타입의 타입 추론 2](https://code-masterjung.tistory.com/123)