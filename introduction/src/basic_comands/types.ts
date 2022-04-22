type hasFirstName = { name: string }
type hasLastName = { lastname: string }
type hasAge = { age: number }
type Person = hasFirstName & hasLastName & hasAge;

const person: Person = {
    name: 'Jungen',
    lastname: 'Miller',
    age: 50,
}

console.log(person);

export { person };

//----------------------------------------------//

type User = { username: string, password: string };
type CheckUser = (user: User, sentValue: User) => boolean;

const verifyUser: CheckUser = (user, sentValue) => {
    return user.username === sentValue.username && user.password === sentValue.password;
}

const bdUser = { username: 'cristovao', password: '123456' };
const sentUser = { username: 'cristovao', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);

//----------------------------------------------//

const body = document.querySelector('body');
if (body) body.style.background = 'red';

const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';
