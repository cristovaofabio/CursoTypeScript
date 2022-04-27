type TypePerson = {
    first_name: string,
    last_name: string,
    fullName(): string,
}

type TypeNationality = {
    country: string,
    capital: string,
    fullInfoCountry(): string,
}

export class Person implements TypePerson, TypeNationality {
    constructor(
        public first_name: string,
        public last_name: string,
        public country: string,
        public capital: string
    ) { }

    fullInfoCountry(): string {
        return this.capital + ' - ' + this.country;
    }

    fullName(): string {
        return this.first_name + ' ' + this.last_name;
    }
}

const person = new Person('Josh', 'Muller', 'Germany', 'Berlin');
console.log(person.fullName());
console.log(person.fullInfoCountry());
