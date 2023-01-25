# 119. ReplaceAll(Medium)

## ✅ 문제
[119. ReplaceAll](https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md)   
주어진 문자열 S에서 부분 문자열 From을 찾아 모두 To로 교체하는 제네릭 `ReplaceAll<S, From, To>`을 구현하세요.

- 예시

```tsx
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
```

## ✅ 정답 코드
```tsx
type ReplaceAll<S extends string, From extends string, To extends string> = 
  S extends `${infer head}${Exclude<From,''>}${infer tail}` ?
    `${head}${To}${ReplaceAll<`${tail}`,From,To>}` : S
```

## ✅ 풀이
### ▶️ 문제 이해
1. `From`을 찾아서 모두 `To`로 교체   

### ▶️ 해설
1. `From`을 찾아서 모두 `To`로 교체   
116. Replace와 같은 방식으로 접근했지만, 116. Replace처럼 `From`을 찾아 최초 1회 `To`로 교체하는 것이 아닌,   
모두 `To`로 교체해야하므로 조건부 연산자에서 재귀호출을 통해 `ReplaceAll`을 호출함   

- 116. Replace 코드
```tsx
type ReplaceAll<S extends string, From extends string, To extends string> = 
  S extends `${infer head}${Exclude<From,''>}${infer tail}` ?
    `${head}${To}${tail}` : S
```

- 119. ReplaceAll 코드
```tsx
type ReplaceAll<S extends string, From extends string, To extends string> = 
  S extends `${infer head}${Exclude<From,''>}${infer tail}` ?
    `${head}${To}${ReplaceAll<`${tail}`,From,To>}` : S
```