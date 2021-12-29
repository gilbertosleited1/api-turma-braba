const { IsValidCep } = require("./is-valid-cep-controllers");

const BuscaCepControllers = async (request, response ) => {
    try {
        const isValid = await IsValidCep(request.params);
        if(!isValid){
            response.status(400).send({
                status: false,
                errorDetail: isValid
            })
        } else {
            response.status(200).send({
                status: true, 
                cep: isValid
            });
        };
    } catch (error) {
        console.log('Ocorreu um erro em Busca Cep Controller --->>> ', error);
        response.status(400).send({
            status: false,
            errorDetail: error.parent, 
            errorFull: error, 
            errorCode: response.statusCode, 
            errorMessage: response.statusMessage,
        });
    };
};

module.exports = {
    BuscaCepControllers,
};
