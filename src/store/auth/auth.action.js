import authUseCase from '../../app/usecases/auth.usecase';
import appUseCase from '../../app/usecases/app.usecase';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function RequestTokenAction() {
  return async dispatch => {
    try {
      await authUseCase.getToken();
    } catch (error) {
      appUseCase.handleError(error.message, 'Request Token Error');
    }
  };
}

export function LoginAction(username, password, callback) {
  return async dispatch => {
    try {
      await authUseCase.login(username, password, callback);
    } catch (error) {
      appUseCase.handleError(error.message, 'Login Error');
    }
  };
}
