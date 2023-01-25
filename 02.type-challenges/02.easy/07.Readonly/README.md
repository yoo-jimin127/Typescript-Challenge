# 07. Readonly (Easy)

## ✅ 문제
[07.Readonly 문제 보기](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md)
- 내장 타입인 `Readonly<T>` 제네릭을 직접 구현하는 문제.
- `T`의 모든 프로퍼티가 `readonly`로 설정된 타입을 만들 것 (생성된 타입의 프로퍼티들이 재할당될 수 없음을 의미)

```ts
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```

## ✅ 정답 코드
```ts
type MyReadonly<T> = { 
    readonly [K in keyof T]: T[K] 
};
```

## ✅ 풀이
- 본 문제 풀이를 위해 적용되는 개념 : 
    - [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
    - [Utility Types](https://joshua1988.github.io/ts/usage/utility.html#%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0-%ED%83%80%EC%9E%85%EC%9D%B4%EB%9E%80)

### ▶️ 해설
- [04.Pick](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md) 풀이에서 사용했던 Mapped Types를 사용해 풀이
```ts
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
```
- `T`에 속한 모든 속성들을 `K`로 명명해 불러오기 위해 `[K in key of T]`를 사용
- 객체 내부의 모든 프로퍼티들은 읽기 전용으로 생성되어야 하므로 `readonly`를 사용해 각 프로퍼티에 **접근 제어자를 추가해 순회**하는 방식