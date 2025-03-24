const bcrypt = require("bcrypt");

const password = "admin123";
const saltRounds = 10;

async function testHash() {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log("Generated Hash:", hash);

    const match = await bcrypt.compare(password, hash);
    console.log("Does the password match?", match);
}

testHash();
