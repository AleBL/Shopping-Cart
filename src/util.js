import consts from "./constants.js"

export default {
  formatCurrencyBRL: function (num) {
      return num.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
  },

  percentualCalc: function (num) {
    return num * consts.percentual;
  }
}
