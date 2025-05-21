const x = Number(process.argv[2]); // Convert first argument to a number

console.log(Number.isInteger(x) ? "C is fun\n".repeat(x).trim() : "Missing number of occurrences");