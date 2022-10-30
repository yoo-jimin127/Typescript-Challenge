interface PersonInterface {
    name: string;
    age: number;
}

type PersonAlias = {
    name: string;
    age: number;
}

let anony: PersonAlias = {
    name: 'jimin',
    age: 23,
}

type MyString = string;
let str: MyString = 'hello';

type Todo = {id: string; title: string; done: boolean };
function getTodo(todo: Todo) { console.log(todo) }