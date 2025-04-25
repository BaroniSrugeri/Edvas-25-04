const express = require('express');
const port = 8080;
const app = express();

app.get('/produtos', (req, res,next) => {
    res.send([
        {nome: 'Camiseta', preco: 49.99},
        {nome: 'Short', preco: 39.90}
    ]);
});
app.listen(port,() => {
    console.log('listening on port' + port);
})