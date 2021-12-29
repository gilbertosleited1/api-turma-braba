const router = require('express').Router();

module.exports = (app) => {
    router.get('/', (request, response) => {
        response.send({
            message: "Para poder consultar o cep, utilize a rota: http://localhost:3000/buscacep/numero_do_cep_que_deseja_pesquisar"
        })
    }); 

    app.use('/', router);
};
