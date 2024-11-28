const parolaPassata = process.argv[2];
if (parolaPassata === undefined || parolaPassata === null)
    console.log("Hello guest");
else
    console.log(`Hello ${parolaPassata}`);

