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

