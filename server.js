//Projeto de servidor node T.A.R.S (Tensionador Algorítimico de Resposta Sarcástica)

const http = require("http");

// na criação de um server do node, temos o conceito:
// req -> alguem está requisitando alguma coisa
// res -> entidade que requisitou recebe uma resposta 

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});

    if(request.url === '/produto') {
        response.end(JSON.stringify({
            message: "Rota de produto...já que você está acessando o endpoint de produto..."
        }))
    }

    if(request.url === '/usuarios'){
        response.end(JSON.stringify({
            message: "Rota de usuários...morte aos usuários.... * "
        }))
    }

    response.end(JSON.stringify({
            message: 'Você não conectou na porta correta.... * (luz piscou uma vez)'
        }))

}).listen(4001, () => console.log("T.A.R.S está rodando na porta 4001..."))