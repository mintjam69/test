//****************** Calc ************************** */

function calculator(a, b, operator) {
  let result;

  if (operator === '+') {
    result = a + b;
  } else if (operator === '-') {
    result = a - b;
  } else if (operator === '*') {
    result = a * b;
  } else if (operator === '/') {
    if (b === 0) {
      return 'Помилка: ділення на нуль!';
    }
    result = a / b;
  } else {
    return 'Невідомий оператор!';
  }

  return 'Результат: ' + result;
}

// Приклади використання:
console.log(calculator(10, 5, '+')); // Результат: 15
console.log(calculator(10, 5, '-')); // Результат: 5
console.log(calculator(10, 5, '*')); // Результат: 50
console.log(calculator(10, 5, '/')); // Результат: 2

//****************** Calc ************************** */


//****************** Calc через Switch ************************** */

function calculator(a, b, operator) {
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b === 0) {
        return 'Помилка: ділення на нуль!';
      }
      result = a / b;
      break;
    default:
      return 'Невідомий оператор!';
  }

  return 'Результат: ' + result;
}

// Приклади використання:
console.log(calculator(10, 5, '+')); // Результат: 15
console.log(calculator(10, 5, '-')); // Результат: 5
console.log(calculator(10, 5, '*')); // Результат: 50
console.log(calculator(10, 5, '/')); // Результат: 2
console.log(calculator(10, 0, '/')); // Помилка: ділення на нуль!
console.log(calculator(10, 5, '^')); // Невідомий оператор!

//****************** Calc через Switch ************************** */