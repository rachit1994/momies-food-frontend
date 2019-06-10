import produce from 'immer';
import { REGISTER_FORM } from './constants';

export const initialState = {
    email: '',
    name: '',
    number: '',
    address: '',
    area: '',
    city: '',
    dishes: '',
    often: 'How often can you cook?',
    serviceOptions: '',
    comments: '',
    password: '',
    error: {
      email: false,
      name: false,
      number: false,
      address: false,
      area: false,
      city: false,
      dishes: false,
      often: false,
      serviceOptions: false,
      comments: false,
      password: false,
      message: false
    },
    success: false
};

const checkValidation = (key, value) => {
  if ( key != 'comments' && !value || value.length == 0 ) {
    return true;
  } else if (key == 'email') {
    return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
  } else if (key == 'password') {
    console.log('coming', (value.length <= 6 || value.length > 128));
    return value.length <= 6 || value.length >= 128
  }
}
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER_FORM:
        const { key, value } = action;
        draft[key] = value;
        draft.error[key] = checkValidation(key, value);
        break;
      case 'success':
        draft.success = action.message;
        break;
      case 'error':
        draft.error.message = action.message
        break;
    }
  });

export default registerReducer;

  