type Last<T extends any[]> = 
    T extends [...infer P, infer U] ? U: never;

type arrLast1 = ["a", "b", "c"];
type arrLast2 = [3, 2, 1];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1