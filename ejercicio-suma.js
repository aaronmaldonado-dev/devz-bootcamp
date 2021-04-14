/**
 * Finds 2 indices in a that sums t. 
 * @param {Array} a - no Array type definition for jsDocs 
 * @param {number} t 
 * @returns {string}
 */
const findSumIndices = (a = [],t = null) => {
  if (!t || a.length === 0) return 'Provide valid arguments';
  // Because of the 2 nested loops, runtime is O(n^2/2).
  // Dropping non dominant terms O(n^2) 
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j <= a.length; j++) {
      if (a[i] + a[j] === t) {
        return `
          First pair of array items that sum ${t} are:
          a[${i}] = ${a[i]}
          a[${j}] = ${a[j]};
        `
      }
    }    
  }
  return 'There is no available solution';
}

const t = 12;
const a = [3,5,2,7,6]
const res = findSumIndices(a, t);

console.log(res);