const pal = (s = '') => {
  const arr = s.toLocaleLowerCase()
              .normalize('NFD') // Canonical Decomposition http://www.unicode.org/reports/tr15/
              .replace(/[\u0300-\u036f]/g, '') // https://www.unicodepedia.com/groups/combining-diacritical-marks/
              .replace(/\s+/g, '').split('');
  const i = (arr.length % 2 === 0) ? arr.length / 2 : (arr.length - 1) / 2;
  for (let j = 0; j <= i; j++) {
    if (arr[j] !== arr[arr.length - j - 1]) {
      return 'No es un palíndromo.'
    }    
  }
  return "Si es un palíndromo."
}

const r = pal('La ruta nos aportó otro paso natural');
console.log(r);