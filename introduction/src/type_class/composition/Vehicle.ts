export class Vehicle {
    private readonly motor = new Motor();

    turnOn(): void {
        this.motor.turnOn();
    }

    turnOff(): void {
        this.motor.turnOff();
    }

}

export class Motor {
    turnOn(): void {
        console.log('The motor is turn on!');
    }

    turnOff(): void {
        console.log('The motor is turn off!');
    }
}

const car = new Vehicle();
car.turnOn();
car.turnOff();
