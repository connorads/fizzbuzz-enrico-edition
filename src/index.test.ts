import {myFun} from './index';

// % 3 fizz
// % 5 buzz
// % 3*5 fizzbuzz

it.each([
  [2, '2'],
  [1, '1'],
  [4, '4'],
  [3, 'fizz'],
])('%s should return %s', (arg, exp) => {
  expect(myFun(arg)).toEqual(exp);
});
