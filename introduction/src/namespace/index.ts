/*
/// <reference path="module/my_namespace.ts"/>

console.log(myNewNamespace.PersonNamespace);
*/

import { sum } from './js/module';

const result = sum(10, 30) as number;
console.log(result);
