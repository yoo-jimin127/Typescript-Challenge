type MyPush<T extends unknown[], U> = [...T, U];
type MyResult = MyPush<[1, 2], "3">; // [1, 2, '3']
