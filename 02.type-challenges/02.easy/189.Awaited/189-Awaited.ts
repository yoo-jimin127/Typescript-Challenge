type MyAwaited<T> = T extends Promise<infer R> ? Awaited<R> : T;

type MyExample = Promise<string>;
type result = MyAwaited<MyExample>;
