export default {
  formatCurrency: function (num) {
      return num.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
  }
}