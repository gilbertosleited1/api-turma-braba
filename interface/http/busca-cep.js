const router = require('express').Router();

const buscaCepControllers = require('../controllers/buscaCepControllers');

module.exports = (app) => {
    router.get('/:cep', buscaCepControllers.BuscaCepControllers); 

    app.use('/buscacep', router);
};
