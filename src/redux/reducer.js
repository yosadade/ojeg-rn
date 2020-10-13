import {combineReducers} from 'redux';

// function yang mana akan me return sebuah state
const initialState = {
  name: 'prawito hudoro',
};

const initialStateRegister = {
  title: 'Register Page',
  desc: 'Ini adalah desc untuk register',
};

const initialStateLogin = {
  info: 'Tolong masukkan password anda',
  isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
  return state;
};

const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

// const reducer = (state = initialState, action) => {
//   return state;
// };

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
