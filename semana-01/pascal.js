/**
 * O(n)
 * Calculates factorial of n through iteration
 * Tested limit: 170 then it goes up to Infinity
 * @param {number} n
 * @returns {number}
 */
const factorial = (n = 0) => {
  if (n === 0 || n === 1) return 1;
  let r = 1;
  for (let i = 1; i < n; i++) {
    r *= (i + 1);
  }
  return r;
};

/**
 * O(n^2)
 * Computes Pascal's triangle n row according to combination formula.
 * https://www.wolframalpha.com/input/?i=pascal+triangle&assumption
 * anr = n! / r! (n - r)!
 * @param {number} n
 * @returns {Array} - jsdoc does not have array type definition
 */
const pascalRow = (n) => {
  const arr = [];
  // O(n) for the outside loop
  for (let r = 0; r <= n; r++) {
    // O(3n) taking into account that r<=n it reduces to O(n) - not sure though
    const c = factorial(n) / ( factorial(r) * factorial(n -r) );
    arr.push(c);
  }
  return arr;
}

// Row counting starts with 0.
const a = pascalRow(20);
console.log(a);