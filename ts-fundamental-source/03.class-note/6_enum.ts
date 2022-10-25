enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
let yourShoes = Shoes.Adidas;
console.log(myShoes);
console.log(yourShoes); 

// 예제
function askQuestion(answer: string) {
    if (answer == 'yes') {
        console.log('정답입니다.');
    }
    if (answer == 'no') {
        console.log('오답입니다.');
    }
}
askQuestion('yes'); // ⭕️
askQuestion('네'); // ❌ 
askQuestion('Y'); // ❌

enum Answer {
    Yes = 'Y',
    No = 'N',
}

function findQuestion(answer: Answer) {
    if (answer == Answer.Yes) {
        console.log('정답입니다.');
    }
    if (answer == Answer.No) {
        console.log('오답입니다.');
    }
}

findQuestion(Answer.Yes); // ⭕️
// findQuestion('yes'); // ❌