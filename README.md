### API para Busca de CEP - On Boargind Turma Braba 

Código desenvolvido em NodeJS para retornar o endereço através da consulta do CEP digitado. 

### Tecnologia Utilizada 
- NodeJS
- ExpressJS 
- Node-Fetch 

### Estrutura Utilizada 

Esrutura escolhida para ser usada, foi a conhecida DDD (Driven Domain Design); 

## Organização das Pastas 
```
> application 
    > buscaCep.js - Responsável por enviar o cel para consulta da url. 
> bin 
    > www - Responsável por iniciar o servidor. 
> domain 
    > cep.js - Estrutura responsável por consultar a url do cep enviado e retornar os dados do endereço. 
> functions 
    > ErrorHandler.js - Função acionado quando ocorre erro durante início do server.  
    > ErrorStatus.js - Função acionado quando ocorre erro durante início do server e retorna o statusCode.
> infrastructure (Vazio pois não existe estrutura de banco de dados.)
> interface
    > controllers 
        > buscaCepControllers.js - Responsável por acionar as validações dos Requests. 
        > isValidCepControllers.js - Validador das Informações do Cep. 
    > http
        >buscaCep.js - Criação da Rota /buscacep
> objects
    > CorsOptions.js - Responsável por tratar os erros de cors durante solicitação via navegador.
    > PipeOrPort.js - Responsável por identificar se é porta ou pipe. 
```
### Rotas do Projeto 

- Principal: localhost:3000/ 
- Busca do Cep: localhost:3000/buscacep/42700000

