export class Person {
    constructor(
        private _name: string,
        private last_name: string,
        private age: number,
        protected _cpf: string,
    ) { }

    getMessage(): string {
        return 'Hello, I am a person';
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get name(): string {
        return this._name.toUpperCase();
    }

}

export class Student extends Person {
    getMessage(): string {
        console.log('I am testing a super class');
        return super.getMessage();
    }
}
export class Teacher extends Person {
    constructor(
        name: string,
        last_name: string,
        age: number,
        cpf: string,
        public school_class: string
    ) {
        super(name, last_name, age, cpf);
    }
}

const student = new Student('Mike', 'Tyson', 20, '000.000.000-00');
const teacher = new Teacher('Travor', 'Brant', 50, '111.111.111-11', 'Geography')

console.log(student.getMessage());
console.log(teacher);
student.cpf = '001.001.001-01';
console.log(student.name);
