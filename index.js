export default {
  cpfCnpj (valor) {
    if (valor !== null && valor !== undefined && valor.length > 0) {
      if (valor.length === 11) {
        return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      } else if (valor.length === 14) {
        return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
      }
    } else {
      return valor
    }
  },
  cep (valor) {
    if (valor !== null && valor !== undefined && valor.length > 0) {
      return valor.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3')
    } else {
      return valor
    }
  },
  moeda (valor, parametro) {
    if (valor !== null && valor !== undefined) {
      return valor.toLocaleString('pt-BR', { minimumFractionDigits: parametro })
    } else {
      return valor
    }
  },
  remover (parametro, valor) {
    if (parametro === 'cpfCnpj') {
      return valor.replace(/[.]/g, '').replace('/', '').replace('-', '')
    } else if (parametro === 'cep') {
      return valor.replace('.', '').replace('-', '')
    } else if (parametro === 'moeda') {
      return valor.replace(/[.]/g, '').replace(',', '.').trim()
    } else {
      return valor
    }
  }
}
