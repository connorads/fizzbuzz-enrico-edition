import {myFun} from './index';

// % 3 fizz
// % 5 buzz
// % 3*5 fizzbuzz

it.each([
  [2, '2'],
  [1, '1'],
])('%s should return %s', (arg, exp) => {
  expect(myFun(arg)).toEqual(exp);
});
