const getCombinations = (n) => {
  const arr = [];
  const maxValue = Math.pow(2, n);
  for (let i = 0; i < maxValue; i++) {
    arr.push(i.toString(2).padStart(n, '0'));    
  }
  const filtered = arr.filter(item => {
    const arrItem = item.split('');
    for (let i = 0; i < n - 1; i++) {
      const sum = parseInt(arrItem[i]) + parseInt(arrItem[i + 1]);
      if (sum > 1) return false;
    }
    return true;
  });
  return filtered;
};

console.log(getCombinations(5));


