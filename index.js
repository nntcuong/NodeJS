const fs = require('fs');

fs.readFile('./files/hello.txt', (error, data) => {
    if (error) {
        throw new Error(error.message);
    }
    console.log(data.toString());
});
process.on('uncaughtException',error => {
    console.error(`There was an uncaught error: ${error}`);
    process.exit(1);
})