export class Calculator {
    constructor(public numero: number) { }

    add(n: number): this {
        this.numero += n;
        return this;
    }

    sub(n: number): this {
        this.numero -= n;
        return this;
    }

    div(n: number): this {
        this.numero /= n;
        return this;
    }

    mult(n: number): this {
        this.numero *= n;
        return this;
    }

}

export class ScientificCalculator extends Calculator {
    pow(n: number): this {
        this.numero **= n;
        return this;
    }
}

const calculator = new ScientificCalculator(5);
calculator.add(20).mult(2).div(5).sub(2).pow(2);
console.log(calculator);

//-------------------------------//

export class RequestBuilder {
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    }

    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    send(): void {
        console.log(`${this.method} data to ${this.url}`);
    }
}

const request = new RequestBuilder();
request
    .setUrl('http://www.somesite.com')
    .setMethod('post')
    .send();
