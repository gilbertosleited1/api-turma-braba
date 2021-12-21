const { BuscaCep } = require("../../application/buscapCep");

var responseHTTP; 
const IsValidCep = async (data) => {
    try {
        const numberCep = data.cep
        const cepMaior = (numberCep.length > 8 && (responseHTTP = "O número de Cep digitado, é maior que 8 números. Favor validar o número digitado"));
        const cepMenor = (numberCep.length < 8 && (responseHTTP = "O número de Cep digitado, é menor que 8 números. Favor validar o número digitado"));
        const alpahCep = (isNaN(numberCep) && (responseHTTP = "O número de cep digitado, contém letras, por isso, não é válido. Favor validar o número digitado."));
        if((!cepMaior && !cepMenor && !alpahCep)){
            const cep = await BuscaCep(numberCep);
            return cep;                
        } else {
            return responseHTTP;
        }        
    } catch (error) {
        console.log('Ocorreu um erro durante Validação do Cep ---->>> ', error);
    };
};

module.exports = {
    IsValidCep,
};
