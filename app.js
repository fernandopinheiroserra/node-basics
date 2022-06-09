const express = require("express");
const { randomUUID } = require("crypto"); 

const app = express();

app.use(express.json());

const products = [];

/**
 * Body => sempre que quiser enviar dados
 * params => /product/13354534321
 * Query => /product?id=218937128937&value=1237189273
 */

app.post("/products", (request, response) => {
    //nome e preco => name e price

const {name, price} = request.body;

const product = {
    name,
    price,
    id: randomUUID(),
}

products.push(product);

return response.json(product);

});


app.listen(4002, () => console.log("T.A.R.S está rodando na porta 4002..."));