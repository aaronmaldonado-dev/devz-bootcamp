/**
 * Finds 2 indices in a that sums t. 
 * @param {Array} a - no Array type definition for jsDocs 
 * @param {number} t 
 * @returns {string}
 */
const findSumIndices01 = (a = [],t = null) => {
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

/**
 * Finds 2 indices in a that sums t - O(n)
 * @param {Array} a - no Array type definition for jsDocs 
 * @param {number} t 
 * @returns {string}
 */
const findSumIndices02 = (a = [],t = null) => {
  if (!t || a.length === 0) return 'Provide valid arguments';
  let i = 0;
  while (a.length > 1 && i <= a.length) {
    if (a[0] + a[i] === t) {
      return `
        First pair of array items that sum ${t} are:
        a[${0}] = ${a[0]}
        a[${i}] = ${a[i]};
      `
    } else {
      i++;
    }
    if (i === a.length) {
      i = 0;
      a.shift();
    }
  }
  return 'There is no available solution';
}

/**
 * Finds 2 indices in a that sums t - O(n)
 * @param {Array} a - no Array type definition for jsDocs 
 * @param {number} t 
 * @returns {string}
 */
const findSumIndices03 = (a = [],t = null) => {
  const m = new Map();
  for (let i = 0; i < a.length; i++) {
    m.set(a[i], i);
  }

  for (let i = 0; i < a.length; i++) {
    const c = t - a[i];
    const mv = m.get(c);
    if (mv && c !== a[i]) {
      return `
        First pair of array items that sum ${t} are:
        a[${i}] = ${a[i]}
        a[${mv}] = ${a[mv]};
      `
    }
  }
}

const t = 12;
const a = [3,6,8,2,4,1];

const res = findSumIndices03(a, t);
console.log(res);