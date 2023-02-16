# 1042. IsNever(Medium)

## ✅ 문제

입력 타입 `T`를 사용하는 `IsNever` 타입을 구현합니다. 

타입이 확인되지 않으면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

- 예시

```tsx
type A = IsNever<never>  // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false
```

## ✅ 정답 코드

```tsx
type IsNever<T> = [T] extends [never] ? true : false
```

## ✅ 풀이

### ▶️ 문제 이해

- `T` 에 입력되는 값이 `never` 인지 확인
    - `never`일 경우 `true` 리턴
    - `never`가 아닐 경우 `false` 리턴

### ▶️ 해설

- `T` 에 입력되는 값이 `never` 인지 확인
    - `never`일 경우 `true` 리턴
    - `never`가 아닐 경우 `false` 리턴

```tsx
type IsNever<T> = T extends never ? true : false
```

처음에 위와 같이 코드를 구현하였으나, 

*`Expect*<*Equal*<*IsNever*<*never*>, *true*>>,` 테스트케이스를 통과하지 못한다.

대괄호로 감싸주지 않을 경우,`never` 가 들어왔을 경우 제대로 처리해주지 못한다는 이유이다.

```tsx
type IsNever<T> = [T] extends [never] ? true : false
```

여기서 드는 궁금증은 `never` 의 타입 검사 방식이다.

왜 다른 타입은 대괄호로 감싸주지 않아도 정상적으로 타입 체킹이 가능함에 반해,

`never` 테스트 케이스에는 반영되지 않는 것일까?

정말 좋은 자료를 발견하게 되었다.

아래 `Res` 타입의 값은 true와 false 모두에 해당한다고 한다.

```tsx
type IsNever<T> = T extends never ? true : false

type Res = IsNever<never> // true false 둘 다!
```

`Res` 타입의 값이 위와 같이 나오는 이유는 아래와 같다.

- 타입스크립트는 조건부 타입에 대해 자동적으로(암묵적으로) 유니언 타입을 할당
- `never` 는 빈 유니언 타입
- 할당이 발생할 때, 할당할 것이 없기에 조건부 타입은 `never` 로 평가됨

따라서 위의 암묵적 유니언 타입의 할당을 막기 위해 `T` 를 튜플로 매핑하는 방식이 있다.

```tsx
type IsNever<T> = [T] extends [never] ? true : false;
type Res1 = IsNever<never> // 'true' ✅
type Res2 = IsNever<number> // 'false' ✅
```

- [타입스크립트 공식 문서의 조건부 타입에서의 `never` 정의](https://github.com/microsoft/TypeScript/blob/main/tests/cases/conformance/types/conditional/conditionalTypes1.ts#L212)

### ▶️ 참고하면 좋은 자료

- [https://github.com/microsoft/TypeScript/blob/main/tests/cases/conformance/types/conditional/conditionalTypes1.ts#L212](https://github.com/microsoft/TypeScript/blob/main/tests/cases/conformance/types/conditional/conditionalTypes1.ts#L212)
- [https://ui.toast.com/posts/ko_20220323#never-타입은-어떻게-검사할까](https://ui.toast.com/posts/ko_20220323#never-%ED%83%80%EC%9E%85%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B2%80%EC%82%AC%ED%95%A0%EA%B9%8C)
