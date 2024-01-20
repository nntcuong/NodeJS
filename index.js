const fs = require('fs');

fs.readFile('./files/starter.txt', (error, data) => {
    if (error) {
        throw new Error(error.message);
    }
    console.log(data.toString());
});
