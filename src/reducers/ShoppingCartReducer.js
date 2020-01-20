import * as actionTypes from "../actions/ActionTypes"

const initialState = { 
  products: [],
  cartItems: [],
  coupons: [],
  couponsApplied: [],
  couponCode: "" 
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.changeCoupon:
            return {...state, couponCode: action.payload }
        default:
            return state
    }
}