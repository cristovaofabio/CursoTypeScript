//  npm i lodash
// npm i @types/lodash -D

import _ from './module';

const array = [1,2,5,3,8];

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));

console.log(global.myGlobal);
