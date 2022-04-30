const array = [1, 2, 3, 4, 5, 3, 7, 9, 0];
console.log(array.filter((value) => value < 4));

const arrayNumber: Array<number> = [2, 3, 5, 7, 9, 8];

function myPromise(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
}

myPromise().then((result) => console.log(result));

interface Person<T, U> {
    first_name: T;
    last_name: T;
    age: U;
}

const person01: Person<string, number> = {
    first_name: 'Mike',
    last_name: 'Lee',
    age: 26,
}

const person02: Person<boolean, number> = {
    first_name: true,
    last_name: false,
    age: 26,
}

type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
    color: 'Black',
    vaccines: ['vaccine 01', 'vaccine 02'],
    age: 20,
};

const vaccines = getKey(animal, 'vaccines');
console.log(vaccines);

//-----------------------------------------//

export class School<T, U>{
    constructor(
        public name: T,
        public foundation: U
    ) { }
}

export class Stack<T>{
    private counter = 0;
    private _elements: { [k: number]: T } = {};

    push(element: T): void {
        this._elements[this.counter] = element;
        this.counter++;
    }

    pop(): T | string {
        if (this.isStackEmpty()) return 'operation not allowed!';

        this.counter--;
        const element = this._elements[this.counter];
        delete this._elements[this.counter];

        return element;
    }

    isStackEmpty(): boolean {
        return this.counter === 0;
    }

    get elements(): string | {} {
        return this.isStackEmpty() ? 'the stack is empty' : this._elements;
    }
}

const stack = new Stack();

stack.push('cat');
stack.push('dog');
stack.push('turtle');
stack.push('bird');

console.log(stack.elements);

stack.pop();

console.log(stack.elements);


//---------------------------------//

export function joinObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
    return Object.assign({}, obj1, obj2);
}

const obj1 = { key01: 'value 01' };
const obj2 = { key02: 'value 02' };

const union = joinObjects(obj1, obj2);
console.log(union);

//---------------------------------//

export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
    const result = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);

    return result;
}

console.log(sum(2,3,4,5,6));
