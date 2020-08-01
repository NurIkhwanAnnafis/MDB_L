import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './app/app.reducer';
import auth from './auth/auth.reducer';

const appReducer = combineReducers({
  app,
  auth,
  form: formReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
