const fetch = require('node-fetch');

const Cep = async (cep) => {
    try {
        const response = await fetch("https://viacep.com.br/ws/"+`${cep}` + '/json/');
        const body = response.json();
        return body;        
    } catch (error) {
        console.log('Ocorreu um erro em Domain CEP ---->>>>> ', error);
    };
};

module.exports = {
    Cep,
};

