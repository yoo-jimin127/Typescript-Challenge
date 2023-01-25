# 116. Replace(Medium)

## ✅ 문제
[116. Replace](https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md)   
문자열 S에서 From를 찾아 한 번만 To로 교체하는 `Replace<S, From, To>`를 구현하세요.   

- 예시

```tsx
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
```

## ✅ 정답 코드
```tsx
type Replace<S extends string, From extends string, To extends string> 
  = S extends `${infer head}${Exclude<From,''>}${infer tail}` ?
    `${head}${To}${tail}` : S
```

## ✅ 풀이
### ▶️ 문제 이해
1. `From`을 찾아서 최초 1회만 `To`로 교체   

### ▶️ 해설
1. `From`을 찾아서 최초 1회만 `To`로 교체   
`Replace` 타입을 문자열로 제한하기 위해 인자 `S`, `From`, `To`를 모두 `extends string` 처리   
```tsx
type Replace<S extends string, From extends string, To extends string> = ...
```

```tsx
type Replace<S extends string, From extends string, To extends string> 
= S extends `${infer head}${From}${infer tail}` ?
  `${head}${To}${tail}` : S
```
``S extends `${infer head}${From}${infer tail}` ``로 처리해주니 테스트케이스 중   
`Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>`를 통과하지 못함   
→ "'false' 형식이 'true' 제약 조건을 만족하지 않습니다."오류 발생   

`From`에 빈 문자열이 오는 경우에 대해 유틸타입 `Exclude<T, U>`를 사용해 해결   
→ `Exclude<From, ''>`으로 `From`에 오는 타입 중 `''`는 제외   
```tsx
type Replace<S extends string, From extends string, To extends string> 
= S extends `${infer head}${Exclude<From,''>}${infer tail}` ?
  `${head}${To}${tail}` : S
```
