function decorator(
    classPrototype: any,
    nameMethod: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor {
    return {
        value: function (...args: string[]) {
            return args[0].toUpperCase();
        }
    }
}

function paramDecorator(classPrototype: any, name: string | symbol): any {
    let valuePropriety: any;

    function isString(value: any) {
        return typeof value === 'string';
    }

    return {
        get: () => {
            if (isString(valuePropriety)) return valuePropriety.toUpperCase();
            return valuePropriety;

        },
        set: (value: any) => {
            if (isString(value)) {
                valuePropriety = value.split('').reverse().join('');
            } else {
                valuePropriety = value;
            }
        }
    }
}

export class Person {
    @paramDecorator
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
console.log(person.name);
