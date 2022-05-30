// import { increase as increase1 } from './counter';
// import { increase, getCount } from './counter.js';
import * as counter from './counter';

counter.increase();
const count = counter.getCount();
console.log(count);
