# 11. Tuple to Object (Easy)

## ✅ 문제
[11.Tuple to Object 문제 보기](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md)
- 배열(튜플)을 받아, 각 요소를 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하는 문제.

- 예시)
```ts
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
const result: TupleToObject<typeof tuple>;
```

## ✅ 정답 코드
```ts
type TupleToObject<T extends readonly (string | number | boolean)[]> = {
  [K in T[number]]: K;
};
```

## ✅ 풀이
### ▶️ Indexed Type
- `Indexed Type` : 타입을 동적으로 사용할 때 사용하는 방법
    - 다른 유형의 특정 속성 조회가 가능함
```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
// type Age = number
```
- `union` type, `keyof`, 다른 타입 사용 가능
```ts
type I1 = Person["age" | "name"];
// type I1 = string | number

type I2 = Person[keyof Person];
// type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
// type I3 = Person[AliveOrName];
```

### ▶️ Const Assertion
- `const assertion` : let 변수에 대해서도 const 변수를 사용할 때와 같은 타입 추론 규칙을 적용할 수 있음

- const assertion을 이용해 배열 값으로 구성된 union 타입 생성    
ex)    
```ts
const alphabet = ['a', 'b', 'c'];
// purpose
// type Names = 'a' | 'b' | 'c';

// how to make
const alphabet = ['a', 'b', 'c'] as const;
type Names = typeof alphabet[number];
```
- 자료 참고 : [const assertion](https://code-masterjung.tistory.com/50)

### ▶️ 해설
- 접근 방식
    - 목표 : 배열(튜플)을 받아 `key:value`를 반환하는 객체 구현    
    1. 객체 형태로의 반환을 위해 `{}`를 사용해 반환 값 감싸줌     
    2. 입력받은 T(예제에서의 튜플)의 값을 바탕으로 `key:value`형태를 만들기 위해 `[K in keyof T]`로 튜플 순회    
        → 반환 값 : 인덱스가 문자열 처리된 값     
    3. const assertion을 적용해 `[K in T[number]]`으로 변경    
        → 배열 값으로 구성된 union 타입 생성      
```ts
type TupleToObject<T extends readonly (string | number | boolean)[]> = {
  [K in T[number]]: K;
};
```

- 본 문제 풀이를 위해 적용되는 개념 : 
    - [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
    - [Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)