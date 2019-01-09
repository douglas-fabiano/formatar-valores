module.exports = {
  cpfCnpj (cpfCnpj) {
    if (cpfCnpj !== null && cpfCnpj !== undefined && cpfCnpj.length > 0) {
      if (cpfCnpj.length === 11) {
        return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      } else if (cpfCnpj.length === 14) {
        return cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
      }
    } else {
      return cpfCnpj
    }
  },
  cep (cep) {
    if (cep !== null && cep !== undefined && cep.length > 0) {
      return cep.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3')
    } else {
      return cep
    }
  },
  moeda (moeda, casasDecimais) {
    if (moeda !== null && moeda !== undefined) {
      return moeda.toLocaleString('pt-BR', { minimumFractionDigits: casasDecimais })
    } else {
      return moeda
    }
  }
}
