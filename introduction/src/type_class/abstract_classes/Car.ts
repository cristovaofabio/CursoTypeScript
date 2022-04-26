export abstract class Car {
    abstract mark: string;
    constructor(
        protected max_speed: number,
        protected now_speed: number,
        protected year_production: number
    ) { }

    abstract welcomeMessage(): void;

    speedUp(value: number): void {
        if ((value + this.now_speed) < this.max_speed)
            this.now_speed = this.now_speed + value;
    };
}

export class ElectricCar extends Car {
    mark = 'Tesla';

    welcomeMessage(): void {
        console.log('Hi, I am a electric car');
    }
}

export class GasolineCar extends Car {
    mark = '';

    welcomeMessage(): void {
        console.log('Hi, I am a gasoline car');
    }
}

const electricCar = new ElectricCar(240, 0, 2020);
electricCar.speedUp(100);
electricCar.welcomeMessage();
console.log(electricCar);
