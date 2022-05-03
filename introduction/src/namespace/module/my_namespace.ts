namespace myNewNamespace {
    const year = 2022;

    export class PersonNamespace {
        constructor(public name: string) { }
    }

    const person = new PersonNamespace('Fabio');
    console.log(person);
}
