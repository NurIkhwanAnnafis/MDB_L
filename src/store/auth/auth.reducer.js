import * as type from './auth.action';

const initState = {
  user: null,
  request_token: null
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case type.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}

export default authReducer;
