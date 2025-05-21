const [firstArg, secondArg] = process.argv.slice(2); // Extracts first two arguments
console.log(`${firstArg || 'undefined'} is ${secondArg || 'undefined'}`);
