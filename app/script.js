const http = require('http');
const port = 3000;

const sayfalar = {
    '/': '<h2>index sayfası</h2>',
    '/index': '<h2>index sayfası</h2>',
    '/hakkimda': '<h2>hakkımda sayfası</h2>',
    '/iletisim': '<h2>iletişim sayfası</h2>'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
    let adres = req.url;
    //if (sayfalar[adres])
    //    res.write(sayfalar[adres]);
    //else
    //    res.write('<h2>404</h2>');
    res.write(sayfalar[adres] | '<h2>404</h2>')
    res.end();
});

server.listen(port, () => {
    console.log(`localhost' ta ${port} portu çalışıyor`);
})
