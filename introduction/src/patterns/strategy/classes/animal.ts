export class Animal {
    private flyable: Fly;

    constructor(flyable: Fly) {
        this.flyable = flyable;
    }

    fly(): void {
        this.flyable.fly();
    }
}
