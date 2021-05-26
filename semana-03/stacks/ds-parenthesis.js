import {Stack} from './ds-stacks.js';

/**
 * Supposing there are only parenthesis in the string.
 * @param {String} s 
 */
const checkParenthesis = (s = '') => {
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {      
    const c = s.substr(i,1);
    if (stack.isEmpty() || c === '(') {
      stack.push(c);
    } else if (stack.peek().value === '(' && c === ')') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.size;
};

')())'
'))())'
'))()))'

