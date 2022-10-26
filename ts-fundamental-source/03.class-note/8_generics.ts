// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('hi');
// logText(true);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('hi');
str.split('');

const num = logText<number>(10);
num.toString();

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    })
    return text;
}
logTextLength<string>(['hi', 'abc']);

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function printTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
printTextLength('a');
// printTextLength(10);
printTextLength( {length: 10});

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption('name');