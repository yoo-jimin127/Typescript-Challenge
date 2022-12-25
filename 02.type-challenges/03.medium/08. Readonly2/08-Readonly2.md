# 08. Readonly2(Medium)

## ✅ 문제
[08. Readonly2 문제 보기](https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md)    
두 인자 `T`와 `K`를 받는 제네릭 `MyReadonly2<T, K>`를 구현해보세요.    
`K`는 `T`의 프로퍼티들 중 `readonly`로 변경되어야 하는 목록을 나타냅니다.     
`K`가 주어지지 않았다면, 기존의 `Readonly<T>` 제네릭처럼 모든 프로퍼티들을 `readonly`로 만들어야 합니다.    

- 예시
```tsx
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
```

## ✅ 정답 코드
- Utility type을 사용하지 않고 접근한 코드    
```tsx
type MyReadonly2<T, K extends keyof T = keyof T> = 
T & { readonly [P in K]: T[P]; };
```

- `Omit` utility type을 사용해 접근한 코드    
```tsx
type MyReadonly2<T, K extends keyof T = keyof T> =
  { readonly [P in K]: T[P] } & Omit<T, K>;
```

## ✅ 풀이

### ▶️ 문제 이해
- 고려할 케이스    
    1. `K` 가 주어지지 않은 경우    
        - 기존의 `Readonly<T>` 제네릭과 동일하게 모든 프로퍼티를 `readonly` 로 만들어줌    
    2. `K` 가 주어진 경우    
        - `T` 의 프로퍼티 중 `readonly` 로 변경되어야 하는 것들을 지정    

### ▶️ 해설
1. `K` 가 주어지지 않은 경우    
- 기존의 `Readonly<T>` 제네릭과 동일하게 모든 프로퍼티를 `readonly` 로 만들어줌    
지난 문제 [07.Readonly](https://www.notion.so/2985dddbbd3c43c0a4210853ab8c4378) 와 동일하게 `K`가 주어지지 않으면 `T` 를 리턴함.
```tsx
type MyReadonly2<T, K> = T;
```
`K` 가 주어졌을 때를 고려하기 위해 리턴 값을 `&` 로 사용해 교차 타입을 만들어 줌.    

1. `K` 가 주어진 경우    
- `T` 의 프로퍼티 중 `readonly` 로 변경되어야 하는 것들을 지정    
`readonly` 를 적용해 프로퍼티를 리턴하도록 접근함.    

```tsx
type MyReadonly2 = <T, K> = 
	T & {readonly [P in K] : T[P] };
```

위와 같이 코드를 작성해주니,     
`Type 'P' cannot be used to index type 'T'` 오류가 발생함.    
→ 입력 제네릭 `K` 를  `extends keyof` 를 사용해 `T` 의 키로 제한    

```tsx
type MyReadonly2 = <T, K extends keyof T> = 
	T & { readonly [P in K] : T[P] };
```
- `K` 가 주어지지 않은 경우에 대해 기존 `Readonly<T>` 와 같이 동작하도록 처리 필요      
    → `K` 의 기본 타입을 `T` 의 모든 키로 설정해줌     
```tsx
type MyReadonly2 = <T, K extends keyof T = keyof T> =
	T & { readonly [P in K] : T[P] };
```

### ▶️ 참고하면 좋은 자료
- [교차 타입](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)