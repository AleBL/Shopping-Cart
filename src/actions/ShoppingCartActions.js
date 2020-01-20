import { changeCoupon } from "./ActionTypes" 

export default {
  changeCoupon = (inputText) => {
    return { type: changeCoupon, payload: inputText }
  }
}