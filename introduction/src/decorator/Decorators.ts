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

@decorator
export class Person {
    constructor(
        public name: string,
        public age: number,
    ) { }
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
        name: string;
        age: number;

        constructor(...args: any[]) {
            super(...args);
            this.name = this.superName(args[0]);
            this.age = args[1];
        }

        superName(value: string): string {
            return value.toUpperCase();
        }
    };
}

const person = new Person('Cristovao', 26);
console.log(person);
