# 531. String to Union(Medium)

## ✅ 문제

입력 값으로 받은 `String` 을 `Union` 타입으로 만들도록 구현하세요.

- 예시

```tsx
type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
```

## ✅ 정답 코드

```tsx
type StringToUnion<T extends string> = T extends `${infer F}${infer R}`
  ? F | StringToUnion<R> 
  : never;
```

## ✅ 풀이

### ▶️ 문제 이해

- 문자열이 들어올 경우 이를 Union 타입으로 파싱해주기

### ▶️ 해설

- 문자열이 들어올 경우 이를 `Union` 타입으로 파싱해주기
    - 입력값을 문자열으로 제한해줘야 하므로 `T extends string` 으로 타입을 제한한다.
    
    ```tsx
    type StringToUnion<T extends string> = ...
    ```
    
    - 기존 trim 문제들을 풀이했던 방식과 동일하게 `${infer A}${infer B}` 방식을 사용한다.
    - 다음 문자열이 없을 때까지 재귀적으로 `StringToUnion` 를 호출하여 모든 문자가 `Union` 타입이 되도록 반복한다.
        - `StringToUnion` 에 넘길 인자는 `F` 를 떼어내고 남은 `R` 이다.
    
    ```tsx
    type StringToUnion<T extends string> = T extends `${infer F}${infer R}`
      ? F | StringToUnion<R> 
      : never;
    ```