module.exports = {
  cpf (cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  },
  cnpj (cnpj) {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  },
  cep (cep) {
    return cep.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3')
  },
  moeda (moeda, casasDecimais) {
    return moeda.toLocaleString('pt-BR', { minimumFractionDigits: casasDecimais })
  }
}
