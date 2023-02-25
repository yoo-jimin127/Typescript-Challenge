# 3192. Reverse(Medium)

## ✅ 문제

 `Array.reverse` 를 구현하세요.

- 예시

```tsx
type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
```

## ✅ 정답 코드

```tsx
type Reverse<T extends unknown[]> = T extends [...infer F, infer R] 
	? [R, ...Reverse<F>] : T;
```

## ✅ 풀이

### ▶️ 문제 이해

1. 배열을 입력받는다.
2. 배열을 거꾸로 반환한다.

### ▶️ 해설

1. 배열을 입력받는다.
    - 배열을 입력받기 위해서는 입력 제네릭 `T` 의 타입을 배열으로 제한하여야 한다.
    - `any` 보다 `unknown` 을 선호하는 사람으로서 `T extends unknown[]` 로 처리 해주었다.
2. 배열을 거꾸로 반환한다.
    - 보통 문자열 관련된 타입 문제는 재귀를 사용했던 적이 많았던 것 같아서 .. 이걸 때려 맞췄다.
    - 마지막 문자를 반환하고, 앞 문자들을 재귀적으로 `Reverse` 의 입력 인자로 넘겨 거꾸로 반환하는 방법을 생각했다.
    - 앞 문자를 가져오는 방법으로 `…infer F` 를 사용하였고, `T extends [...infer F, infer R]` 타입 조건을 허용하지 않을 경우 입력 값 그대로인 `T` 를 반환하도록 하였다.
    
    ```tsx
    type Reverse<T extends unknown[]> = T extends [...infer F, infer R] 
    	? [R, ...Reverse<F>] : T;
    ```
