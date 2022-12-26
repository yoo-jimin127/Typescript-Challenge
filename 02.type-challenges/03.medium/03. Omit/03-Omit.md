# 03. Omit(Medium)

## ✅ 문제
내장 타입인 `Omit<T, K>` 제네릭을 직접 구현해보세요.     
`T`에 속한 모든 프로퍼티 중 에서 `K`에 해당하는 프로퍼티를 지우는 타입을 만들어야 합니다.    
```tsx
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
```

## ✅ 정답 코드
```tsx
type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P]: T[P] };
```

## ✅ 풀이
### ▶️ 문제 이해
1. 오브젝트의 각 프로퍼티를 순회하며 새로운 오브젝트를 만들기    
2. `as`를 통해 필요하지 않은 키에 대한 필터링을 거친 후 키 리매핑하기     

### ▶️ 풀이
1. 오브젝트의 각 프로퍼티를 순회하며 새로운 오브젝트를 만들기      
```tsx
type MyOmit<T, K extends keyof T> = { [P in keyof T] : T[P] };
```
- 위 코드를 통해 `T`의 모든 키를 매핑을 통해 새로운 오브젝트 타입 `P`로 만들게 됨
- 키에 대한 값은 `T[P]`로 저장됨    

2. `as`를 통해 필요하지 않은 키에 대한 필터링을 거친 후 키 리매핑하기     
```tsx
type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P] : T[P] };
```
- 프로퍼티가 `K`에 속할 경우 never를 반환하도록 함

### ▶️ 참고하면 좋은 자료
- [type assertion](https://radlohead.gitbook.io/typescript-deep-dive/type-system/type-assertion)