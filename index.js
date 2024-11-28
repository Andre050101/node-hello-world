//Solution 1 (normal if-else control) 
const parolaPassata = process.argv[2];
if (parolaPassata === undefined || parolaPassata === null)
    console.log("Hello guest");
else
    console.log(`Hello ${parolaPassata}`);

//Solution 2 (with nullish coalescing operator (??))
console.log(`Hello ${parolaPassata ?? "guest"}`);
