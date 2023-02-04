# 298. Length of String(Medium)

## ✅ 문제

[298.Length of String](https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md)

`String#length`처럼 동작하는 문자열 리터럴의 길이를 구하세요.

## ✅ 정답 코드

```tsx
type StringToArray<T extends string, S extends string[] = []> 
  = T extends `${infer Head}${infer Tail}` 
		? StringToArray<Tail, [...S, Head]> : S;

type LengthOfString<S extends string> = StringToArray<S>['length'];
```

## ✅ 풀이

### ▶️ 문제 이해

1. `T['length']` 사용을 통해 문자열의 길이를 계산해 리턴

### ▶️ 해설

1. `T['length']` 사용을 통해 문자열의 길이를 계산해 리턴

```tsx
type LengthOfString<S extends string> = S['length'];
```

위와 같이 단순히 문자열의 length 값을 가져오려고 하니 제약조건을 만족하지 않는다는 오류 발생

→ 오류 발생 이유 :  `T` 가 배열일 때에만 `T['length']` 의 사용이 가능

따라서 인자로 받은 string 값인 `S` 의 값을 배열로 변환하는 `StringToArray` 타입을 별도로 생성하여,

`${infer Head}${infer Tail}` 으로 처리해 `[’length’]`를 적용

```tsx
type StringToArray<T extends string, S extends string[] = []> 
  = T extends `${infer Head}${infer Tail}` 
		? StringToArray<Tail, [...S, Head]> : S;
```

1.  `StringToArray<S>` 의 리턴값에 `['length']` 처리를 통해 원하는 값 도출

```tsx
type LengthOfString<S extends string> = StringToArray<S>['length'];
```
