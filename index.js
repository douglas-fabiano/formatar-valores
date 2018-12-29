module.exports = {
  cpfCnpj (cpfCnpj) {
    if (cpfCnpj.length === 11) {
      return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    } else if (cpfCnpj.length === 14) {
      return cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
    }
  },
  cep (cep) {
    return cep.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3')
  },
  moeda (moeda, casasDecimais) {
    return moeda.toLocaleString('pt-BR', { minimumFractionDigits: casasDecimais })
  }
}
