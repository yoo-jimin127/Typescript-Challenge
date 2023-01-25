# 110. Capitalize(Medium)

## ✅ 문제

[110.Capitalize](https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md)

문자열의 첫 글자만 대문자로 바꾸고 나머지는 그대로 놔두는 `Capitalize<T>`를 구현하세요.

- 예시

```tsx
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
```

## ✅ 정답 코드

```tsx
type MyCapitalize<S extends string> = S extends `${infer First}${infer R}` 
  ? `${Uppercase<First>}${R}` : S;
```

## ✅ 풀이

### ▶️ 문제 이해

- `MyCapitalize` 를 통해 입력받은 문자열 `S` 의 첫 글자를 대문자로 변경

### ▶️ 해설

- `MyCapitalize` 를 통해 입력받은 문자열 `S` 의 첫 글자를 대문자로 변경
    - `S` 의 타입을 문자열로 제한 → `type MyCapitalize<S extends string> = …`
    - `UpperCase` 유틸을 사용해 `First` 에 해당하는 문자를 대문자로 변경

```tsx
type MyCapitalize<S extends string> = S extends `${infer First}${infer R}` 
  ? `${Uppercase<First>}${R}` : S;
```

## ✅ 후기

[106.Trim Left](https://www.notion.so/febd45d6897c4904962be9fcaeb87701) , [108.Trim](https://www.notion.so/af61f00be6cf45a0821cea5a5b4ee61c) 풀이 접근 방식과 굉장히 유사해서 비교적 쉽게 해결할 수 있었던 것 같습니다!
