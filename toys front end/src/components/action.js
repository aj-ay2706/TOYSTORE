// Action creators for setting email, pass, and name
export const setEmail = (email) => ({ type: 'SET_EMAIL', payload: email });
export const setPass = (pass) => ({ type: 'SET_PASS', payload: pass });
export const setName = (name) => ({ type: 'SET_NAME', payload: name });
export const setCart=(cart)=>({type:'SET_CART',payload:cart});