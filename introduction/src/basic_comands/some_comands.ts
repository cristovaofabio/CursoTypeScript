let firstName: string = 'Tiller';
let age: number = 25;
let addult: boolean = true;

let arrayNumbers: Array<number> = [1, 2, 4, 6, 3, 8];
let arrayString: Array<string> = ['a', 'b', 'c'];

let person: { firstName: string, lastName: string, height?: string, age: number } = {
    firstName: 'Mike',
    lastName: 'James',
    age: 30,
};

console.log(person.firstName);

function sum(first: number, second: number): number {
    return first + second;
}

const result = sum(20, 32.5);

console.log(result);

/*
function showMessage(msg: any) {
    return msg;
}
*/

function printValues(...args: string[]): void {
    args.forEach(element => {
        console.log(element);
    });
}

const objectExemple: {
    keyA: string;
    keyB: string;
    [key: string]: unknown
} = {
    keyA: '',
    keyB: ''
}

printValues('a', 'b', 'c', 'd');

objectExemple.keyA = 'some text';
objectExemple.keyB = 'another text';
objectExemple.keyC = 'text C';
objectExemple.keyD = 'text D';
objectExemple.keyE = 'text E';

console.log(objectExemple.keyD);

function multiplication(...args: Array<number>): number {
    return args.reduce((accumulator, value) => accumulator * value);
}

const resultMult = multiplication(1, 2, 3, 4, 5);
console.log(resultMult);

const dataClient: [string, number] = ['Christopher', 1.83];

// dataClient[0]='Bob';
console.log(dataClient[0]);

function createPerson(firstName: string, lastName: string, age?: number)
    : {
        firstName: string;
        lastName: string;
        age?: number;
    } {
    return {
        firstName, lastName, age
    };
}

const person1 = createPerson('Michael', 'Johnson');
const person2 = createPerson('Tom', 'Brien', 30);

console.log(person1);
console.log(person2);

enum Colors { RED, BLUE, YELLOW, WHITE, GRAY }

console.log('Working with enum', Colors.BLUE);

function stringOrNumber(number1: number | string, number2: number | string): string | number {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') return '' + number1 + number2;
    return number1 + number2;
}

console.log(stringOrNumber(1, 2));
console.log(stringOrNumber('1', 2));

function chooseColor(color: 'red' | 'blue' | 'green'): void {
    console.log('Chosen color: ',color);
}

chooseColor('blue');
