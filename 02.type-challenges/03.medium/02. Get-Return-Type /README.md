# 09. Get Return Type(Medium)

## ✅ 문제

유틸리티 타입 `ReturnType<T>` 을 사용하지 않고 직접 구현해보세요.

```tsx
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"
```

## ✅ 정답 코드

```tsx
type MyReturnType<T> = T extends (...args: any[]) 
	=> infer U ? U : T;
```

## ✅ 풀이

### ▶️ 문제 이해

1. `MyReturnType<T>` 의 `T` 는 함수의 형태로 들어와야 함
2. 인자로 들어온 함수 `T` 의 반환값을 리턴해야 함

### ▶️ 해설

1. `MyReturnType<T>` 의 `T` 는 함수의 형태로 들어와야 함
    - `T extends (...args: any[])` 로 제한
2. 인자로 들어온 함수 `T` 의 반환값을 리턴해야 함
    - 저번 문제 [Parameters](https://www.notion.so/e89a0270f4f2429286ed9ea659bbf584)와 동일하게 `infer` 를 사용해 타입 추론