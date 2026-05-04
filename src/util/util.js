import { percentual } from "./constants.js"

const utils = {
  formatCurrencyBRL: function (num) {
      return num.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
  },

  percentualCalc: function (num) {
    return num * percentual;
  }
};

export default utils
