import { Person } from "./context/person";

const person = new Person('Fabio',17);
console.log('CAN DRIVE:',person.canDrive());
console.log('CAN VOTE:',person.canVote());

person.age = 20;
console.log('-------------------');

console.log('CAN DRIVE:',person.canDrive());
console.log('CAN VOTE:',person.canVote());
