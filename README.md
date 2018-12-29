
# Helper para Formatação de Valores


![Release](https://img.shields.io/npm/v/formatar-valores.svg?style=flat-square&label=release)

> Biblioteca JS open-source para formatação de CPF/CNPJ, CEP e Moeda PT-BR.

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
import formatar from 'formatar-valores
```

### Formatando CPF

Para formatar basta chamar a função `cpf()` e passar o valor como parâmetro, veja um exemplo:

```javascript
let valor = 00000000000

formatar.cpf(valor)
// 000.000.000-00
```
### Formatando CNPJ

Para formatar basta chamar a função `cnpj()` e passar o valor como parâmetro, veja um exemplo:

```javascript
let valor = 00000000000000

formatar.cnpj(valor)
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
