export class ShoppingCar {
    private readonly products: Product[] = [];

    insertProducts(...products: Product[]): void {
        for (const product of products) {
            this.products.push(product);
        }
    }

    countProducts(): number {
        return this.products.length;
    }

    totalValue(): number {
        let total = this.products.reduce((sum, product) => sum + product.price, 0);
        return this.formatNumber(total);
    }

    private formatNumber(value: number): number {
        return value.toFixed(2) as unknown as number
    }
}

export class Product {
    constructor(
        private _name: string,
        private _price: number,
    ) { }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}

const product1 = new Product('shirt', 49.99);
const product2 = new Product('pants', 69.5);
const product3 = new Product('socks', 9.99);
const shoppingCar = new ShoppingCar();
shoppingCar.insertProducts(product1, product2, product3);

console.log(shoppingCar);
console.log(shoppingCar.totalValue());
console.log(shoppingCar.countProducts());
