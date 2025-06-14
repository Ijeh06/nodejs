 const fs = require ('fs');
const http = require('http');
const path = require('path');
const os = require('os');
const url = require('url');


// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err)
//         return;
//     }
//     console.log(data);

// })

// const content = 'Hello, World!';

// fs.writeFile('output.txt', content, (err) => {
//     if (err){
//         console.error(err);
//         return;
//     }
//     console.log('File has been saved!');
// })

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
// })

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:30000')
// })

//path module 
// const directory = '/user/local'
// const fileName = 'example.txt';

// const fullPath = path.join(directory, fileName);

// console.log(fullPath); // Output: /user/local/example.txt

// Os

// console.log('Platform:', os.platform());
// console.log('CPU Architecture:', os.arch());
// console.log('Total Memory:', os.totalmem());
// console.log('Free Memory:', os.freemem());

const myUrl = new URL('hhtps://example.com:8080/path/name?query=Ekene#hash');

console.log('Host',myUrl.host);
console.log('Pathname',myUrl.pathname);
console.log('Search Params',myUrl.searchParams.get('query'));