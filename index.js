const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (error, data) => {
    if (error) {
        throw new Error(error.message);
    }
    console.log(data.toString());
});
console.log('Hello...')
process.on('uncaughtException', error => {
    console.error(`There was an uncaught error: ${error}`);
    process.exit(1);
})

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (error) => {
    if (error) throw error;
    console.log('write complete');
});
fs.writeFile(path.join(__dirname, 'files', 'append.txt'), 'Nice to meet you.', (error) => {
    if (error) throw error;
    console.log('Write complete');
    fs.appendFile(path.join(__dirname, 'files', 'append.txt'), '\n\nYes it is', (error) => {
        if (error) throw error;
        console.log('Append complete');
        fs.rename(path.join(__dirname, 'files', 'reply.txt'),path.join(__dirname, 'files', 'newReply.txt'));
    })
    
})