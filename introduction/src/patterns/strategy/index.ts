import { Animal } from "./classes/animal";
import { CanFly } from "./classes/can_fly";
import { CanNotFly } from "./classes/can_not_fly";

const dog = new Animal(new CanNotFly());
dog.fly();

const bird = new Animal(new CanFly());
bird.fly();
