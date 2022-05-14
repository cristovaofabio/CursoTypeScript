import { Adolescent } from "../states/adolescent";
import { Adult } from "../states/adult";
import { Young } from "../states/young";

export class Person {
    private ageGroup: AgeGroup; //state
    private name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
        this.ageGroup = this.setState();
    }

    setState(): AgeGroup {
        if (this._age >= 18) {
            return new Adult();
        } else if (this._age >= 16 && this._age < 18) {
            return new Adolescent();
        } else {
            return new Young();
        }
    }

    set age(value: number){
        this._age = value;
        this.ageGroup = this.setState();
    }

    canVote(): boolean {
        return this.ageGroup.canVote();
    }
    canDrive(): boolean {
        return this.ageGroup.canDrive();
    }
}
