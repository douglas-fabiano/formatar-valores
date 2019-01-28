


# Helper para Formatação de Valores

![Release](https://img.shields.io/npm/v/formatar-valores.svg?style=flat-square&label=release)

> Helper JS open-source para formatação de CPF/CNPJ, CEP e Moeda PT-BR.

## Uso

Faça o download com [NPM](https://www.npmjs.com).
```
npm i formatar-valores
```

Ou faça o download com [Yarn](https://yarnpkg.com/pt-BR/)
```
yarn add formatar-valores
```

### Importação do Pacote
```javascript
import formatar from 'formatar-valores'
```

### Formatando CPF/CNPJ

Para formatar basta chamar a função `cpfCnpj()` e passar o valor como parâmetro, veja um exemplo:

```javascript
let cpf = 00000000000

formatar.cpfCnpj(cpf)
// 000.000.000-00

---------------------

let cnpj = 00000000000000

formatar.cpfCnpj(cnpj)
// 00.000.000/0000-00
```
### Formatando CEP

Para formatar basta chamar a função `cep()` e passar o valor como parâmetro, veja um exemplo:

```javascript
let valor = 00000000

formatar.cep(valor)
// 00.000-000
```

### Formatando Moeda

Para formatar basta chamar a função `moeda()` e passar o valor e quantidade de casas decimais como parâmetro, veja um exemplo:

```javascript
let valor = 5649.8923

formatar.moeda(valor, 2)
// 5.649,89

------------------------

formatar.moeda(valor, 3)
// 5.649,892
```

### Remover formatação

Para remover basta chamar a função `remover()` e passar o tipo de valor como parâmetro e o valor, veja um exemplo:

```javascript
let cpfCnpj = '000.000.000-00'
let cep = '00.000-000'
let moeda = '1.000,00'

formatar.remover('cpfCnpj', cpfCnpj)
// 00000000000

formatar.remover('cep', cep)
// 00000000

formatar.remover('moeda', moeda)
// 1000.00
```