const { Cep } = require("../domain/cep")

const BuscaCep = async (cep) => {
    try {
        const returnCep = await Cep(cep);
        return returnCep;        
    } catch (error) {
        console.log('Ocorreu um erro em Busca Cep ---->>>> ', error)
    }
};

module.exports = {
    BuscaCep,
};
