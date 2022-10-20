interface Person {
    name: string;
    age: number;
}

// 변수에 인터페이스 활용
let jimin: Person = {
    name: 'jimin',
    age: 23,
}

// 함수에 인터페이스 활용
function getPerson(person: Person) {
    console.log(person);
}

const jim: Person = {
    name: 'jimin yoo',
    age: 23,
}

getPerson(jim);

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
    (a: number, b: number): number
}

let sum: sumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let stringArr: StringArray = ['a','b','c'];
stringArr[0] = 'd';

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

let objReg = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(objReg).forEach(function(value) {
    console.log(value);
})

// 인터페이스 확장 (상속)
interface CSPerson {
    name: string;
    age: number;
}

interface Developer extends CSPerson{
    language: string;
}

let jiminDev: Developer = {
    name: 'jimin',
    age: 23,
    language: 'typescript',
}