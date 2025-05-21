const size = process.argv[2]; // Get the second argument from command line
const numsize = Number(size); // Convert first argument to a number
if (!Number.isInteger(numsize)) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < numsize) {
    console.log("X".repeat(numsize)); // Print a row of X's
    i++;
  }
}
