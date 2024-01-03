const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log('request made');
    console.log(req.url, req.method);
    // setting header type of response
    res.setHeader('Content-Type', 'text/html');
    // res.write('hello, there!!');
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 201;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', './about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })

    // res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening request at port 3000');
});