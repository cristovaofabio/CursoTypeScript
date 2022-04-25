export class Person {
    constructor(
        public name: string,
        public last_name: string,
        private age: number,
        protected cpf: string,
    ) { }

}

export class Student extends Person {
    //--------------//
}
export class Teacher extends Person {
    //--------------//
}

const student = new Student('Mike', 'Tyson', 50, '000.000.000-00');
console.log(student);
