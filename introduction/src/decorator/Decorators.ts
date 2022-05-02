export class Animal {
    constructor(public color: string) { }
}

function newDecorator<T>(target: T) {
    console.log('I am testing the decorator');
    return target;
}

const animalDecorared = newDecorator(Animal);
const animal = new animalDecorared('purple');
console.log(animal);

//--------------------------------//

function setApiVersion(apiVersion: string) {
    return (target: any) => {
        return class extends target {
            version = apiVersion;
        };
    };
}

@setApiVersion('1.0.0')
class Api { }

console.log(new Api())

//--------------------------------//

interface Constructor {
    new(...args: any[]): any;
}

function decorator(value1: string, value2: string) {
    return function <T extends Constructor>(target: T): T {

        return class extends target {
            name: string;
            age: number;

            constructor(...args: any[]) {
                super(...args);
                this.name = this.phraseName(args[0]);
                this.age = args[1];
            }

            phraseName(value: string): string {
                return `${value.toUpperCase()} is ${value1} and ${value2}`;
            }
        };
    }
}

function anotherDecorator() {
    return function (target: Constructor) {
        console.log('I am an another decorator');
        return target;
    };
}

@anotherDecorator()
@decorator('smart', 'nice')
export class Person {
    constructor(
        public name: string,
        public age: number,
    ) { }
}

const person = new Person('Cristovao', 26);
console.log(person);
