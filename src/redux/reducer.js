import {combineReducers} from 'redux';

// function yang mana akan me return sebuah state

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
  title: 'Register Page',
  desc: 'Ini adalah desc untuk register',
};

const initialStateLogin = {
  form: {
    email: '',
    password: '',
  },
  info: 'Tolong masukkan password anda',
  isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Register Page 2',
    };
  }
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const LoginReducer = (state = initialStateLogin, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
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
