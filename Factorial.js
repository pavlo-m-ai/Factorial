const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function factorial(n) {
    n = parseInt(n); 
    if (isNaN(n)) {
        return "Введено нечислове значення";
    }

    if (n < 0) {
        return "Факторіал не існує для від'ємних чисел";
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}
    rl.question('Введіть число для обчислення факторіалу: ', (number) => {
    console.log("Факторіал " + number + " дорівнює " + factorial(number));
    rl.close(); 
});
