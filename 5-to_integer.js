const firstArg = process.argv[2];
const num = Number(firstArg);
console.log(Number.isInteger(num) ? `My number: ${num}` : "Not a number");