// JS 문자열 선언
let js_str = 'hello';

// TS 문자열 선언
let ts_str: string = 'hello';

// TS 숫자 선언
let num: number = 10;

// TS 배열 선언
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['a', 'b', 'c'];
let items: number[] = [1, 2, 3];

// TS 튜플
let ts_address: [string, number] = ['pangyo', 20];
    // 2개의 요소에 대한 타입만 정의해주었으므로 타입을 정의해준 요소의 수보다 많은 튜플 요소를 정의할 수 없음

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'jimin',
//     age: 23,
// };

let person: {name: string, age: number} = {
    name: 'jimin',
    age: 23,
}

// TS 진위 값
let show: boolean = true;