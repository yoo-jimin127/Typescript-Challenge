# 04. Pick (Easy)

## ✅ 문제
[04.Pick 문제 보기](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md)
- `04.Pick` 문제는 내장 유틸리티 타입인 `Pick<T, K>`를 직접 구현하는 문제이다.
- `T`에 있는 프로퍼티 중 `K`에 속하는 프로퍼티를 선택하는 타입을 만드는 것을 목적으로 한다.

- 예시)
```ts
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

## ✅ 정답 코드
```ts
type MyPick<T, K extends keyof T> = { 
    [P in K]: T[P] 
}
```

## ✅ 풀이
- 본 문제 풀이를 위해 적용되는 개념 : 
    - [Utility Types](https://joshua1988.github.io/ts/usage/utility.html#%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0-%ED%83%80%EC%9E%85%EC%9D%B4%EB%9E%80)
    - [Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
    - [MappedTypes](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
    - [Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
    - [extends (feat. keyof)](https://icerabbit.tistory.com/94)

### ▶️ Utility Types
- `Utility Type` : 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입 문법
    - 기존의 인터페이스, 제네릭 등의 기본 문법으로 타입을 변환할 수 있으나 유틸리티 사용을 통해 간결한 문법으로 타입 정의 가능

- `Pick` utility type : 특적 타입에서 몇 개의 속성을 선택(pick)하여 타입 정의 가능

### ▶️ Lookup Types
- `Lookup Type` : 타입의 이름을 통해 **어떤 타입의 프로퍼티에 접근**할 수 있도록 해줌
    - 객체에서 키를 이용해 값을 얻어오는 과정과 유사

### ▶️ Mapped Types
- `Mapped Type` : 각 프로퍼티들을 **새로운 타입으로 변환**해줄 수 있음
    - javascript의 `map()` API 함수를 타입에 적용한 것과 같은 효과

- 예제)
```ts
{ [ P in K ] : T }
{ [ P in K ] ? : T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ? : T }
```

### ▶️ 타입을 이용한 풀이
- Union 타입인 `K`를 받아와 `K`의 각 원소를 순회
    → `K`로만 구성된 키를 가지도록 하는 새로운 타입을 만들어 반환(`Mapped Type` 적용 - `[P in K] : T[P]`)      
- `Lookup Type`을 사용해 값의 타입을 가져와 사용 (이 때, 값의 타입 자체는 변하지 않음)

```ts
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
```
- `K`에 속한 모든 타입을 `P`로 명명해 새로운 객체의 키로 만듦
- 해당 객체의 값이 되는 타입은 `extends keyof`로 주어지는 타입인 `T`로부터 받아옴
    - `extends` : 
        - 인터페이스의 확장에 사용
        - 정의된 타입을 이용해 제네릭의 타입을 제한하는 방법으로 사용
    - `keyof INTERFACE` : INTERFACE의 key들 중 하나가 제네릭이 됨을 명시
