# 09. Deep Readonly(Medium)

## ✅ 문제
[09.Deep Readonly 문제 보기](https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md)
`DeepReadonly<T>` 제네릭을 구현해보세요. 
오브젝트의 모든 속성과 하위의 오브젝트 들은 재귀적인 방식을 통해 `readonly`로 설정됩니다.
이 챌린지에서는 오브젝트만을 다루는 것으로 가정합니다. 
배열이나 함수, 클래스 등은 고려하지 않아도 됩니다. 물론 다른 경우들까지 고려한 해답에 도전해 보는 것도 좋습니다.

- 예시
```tsx
type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type Todo = DeepReadonly<X> // should be same as `Expected`
```

## ✅ 정답 코드
```tsx
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown>
    ? DeepReadonly<T[P]> : T[P]; 
};
```

## ✅ 풀이
### ▶️ 문제 이해
- **재귀적**으로 `Readonly<T>` 와 같이 오브젝트의 모든 속성과 하위 오브젝트를 `readonly`로 설정
1. 기본 `Readonly<T>` 구현
2. 재귀적으로 하위 오브젝트를 `readonly` 로 만들어주기

### ▶️ 해설
1. 기본 `Readonly<T>` 구현
```tsx
type DeepReadonly<T> = { readonly [P in keyof T] : T[P] };
```

1. 재귀적으로 하위 오브젝트를 `readonly` 로 만들어주기
`DeepReadonly` 를 사용해 깊이가 1 이상인 오브젝트에 대해서도 `readonly` 처리
- Record util : key로 문자열 리터럴 허용
    - 속성을 제한하고 싶을 떄 문자열 리터럴응 사용해 key에 허용 가능한 값을 제한

### ▶️ 참고하면 좋은 자료
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)
- [Record util types](https://developer-talk.tistory.com/296)
