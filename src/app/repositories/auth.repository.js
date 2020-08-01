import httpService, { API_KEY } from '../services/http.service';
import appUseCase from '../usecases/app.usecase';

export async function reqToken() {
  try {
    const response = await httpService.get('authentication/token/new', {
      params: {
        api_key: API_KEY
      }
    });
    appUseCase.handleInformation(
      'Happy Writing Your Imagination!',
      'Request Token Success'
    );
    return response;
  } catch (error) {
    appUseCase.handleInformation(
      'Pending Writing Your Imagination!',
      'Request Token Failed'
    );
    return Error(error);
  }
}

export async function authLogin(credential) {
  try {
    const response = await httpService.post(
      'authentication/token/validate_with_login',
      credential,
      {
        params: {
          api_key: API_KEY
        }
      }
    );
    return response;
  } catch (error) {
    return { error: true, message: error };
  }
}
