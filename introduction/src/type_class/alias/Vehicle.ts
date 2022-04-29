type Vehicle = {
    mark: string;
    fabrication: number;
}

type Car = {
    brand: Vehicle['mark'];
    year: Vehicle['fabrication'];
    name: string;
}

const car: Car = {
    brand: 'Lamborghini',
    year: 2022,
    name: 'Huracán'
}

console.log(car);
