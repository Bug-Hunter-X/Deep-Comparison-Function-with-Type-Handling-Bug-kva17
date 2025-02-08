function check(a, b) {
  if (a === b) {
    return true; 
  }
  if (typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (let key in a) {
    if (!b.hasOwnProperty(key) || !check(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

console.log(check({ a: 1, b: { c: 3 } }, { b: { c: 3 }, a: 1 })); // true
console.log(check({ a: 1, b: { c: 3 } }, { b: { c: 4 }, a: 1 })); // false
console.log(check({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 }, d: 4 })); //false
console.log(check(1, 1)); // true
console.log(check(1, 2)); // false
console.log(check({a:1},1));//false
console.log(check(1,{a:1}));//false