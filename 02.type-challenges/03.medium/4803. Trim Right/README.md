# 4803. Trim Right(Medium)

## ✅ 문제

[4803.Trim Right](https://github.com/type-challenges/type-challenges/blob/main/questions/04803-medium-trim-right/README.ko.md)

정확한 문자열 타입이고 끝부분의 공백이 제거된 새 문자열을 반환하는 `Trim<T>`를 구현하십시오.

- 예시

```tsx
type Trimed = TrimRight<'   Hello World    '> // 기대되는 결과는 '   Hello World'입니다.
```

## ✅ 정답 코드

```tsx
type TrimTarget = ' '|'\n'|'\t'
type TrimRight<S extends string> = S extends `${infer R}${TrimTarget}` ? TrimRight<R> : S;
```

## ✅ 풀이

### ▶️ 문제 이해

지난 번 풀이하였던 [Trim Left](https://www.notion.so/febd45d6897c4904962be9fcaeb87701) 와 매우 동일하게 

Right에 위치한 `TrimTarget`의 값을 제거해 리턴해주면 되는 문제!

- 유사품에 주의하세요 : [유지민 풀이](https://www.notion.so/febd45d6897c4904962be9fcaeb87701)
