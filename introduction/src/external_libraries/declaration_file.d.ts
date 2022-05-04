declare module "mod" {
    module "lodash" {
        interface LoDashStatic {
            mul(array: number[]): number;
        }
    }
}

declare var _: _.LoDashStatic;

declare var myGlobal: string;
