function logMessage(value: string | number) {
    if (typeof value == 'number') {
        value.toLocaleString();
    }

    if (typeof value == 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

/** union type */
function askSomeone(someone: Developer | Person) {
    someone.name;
}

askSomeone({ name: 'dev', skill: 'web' });
askSomeone({ name: 'jimin', age: 23 });

/** intersection */
function setSomeone(someone: Developer & Person) {
    someone.age;
    someone.name;
    someone.skill;
}

setSomeone({ name: 'jimin', skill: 'web', age: 23 });