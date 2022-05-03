function decorator(
    classPrototype: any,
    nameMethod: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor {
    return {
        value: function (...args: string[]) {
            console.log('ClassProtorype', classPrototype.name);
            return args[0].toUpperCase();
        }
    }
}

export class Person {
    name: string;
    last_name: string;
    age: number;

    constructor(name: string, last_name: string, age: number) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }

    fullName(): string {
        return `${this.name} ${this.last_name}`;
    }

    @decorator
    message(value: string): string {
        return `${value}`;
    }
}

const person = new Person('Cristovao', 'Silva', 26);
console.log(person.message('Welcome!'));
