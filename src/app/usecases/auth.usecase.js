/* eslint-disable camelcase */
import { authLogin, reqToken } from '../repositories/auth.repository';

export default {
  async login(username, password, callback) {
    const request_token = this.getActiveRequestToken();
    const user = await authLogin({ username, password, request_token });
    if (!user.error) {
      callback();
    }
  },

  async getToken() {
    try {
      const user = await reqToken();
      this.saveRequestToken(user.data);
    } catch (error) {
      throw error;
    }
  },

  logout() {
    localStorage.clear('access_token');
  },

  checkIsActive() {
    const user = this.getActiveSession();
    if (!user) {
      return false;
    }

    return true;
  },

  getActiveSession() {
    const accessToken = localStorage.getItem('access_token');
    return JSON.parse(accessToken);
  },

  getActiveRequestToken() {
    const requestToken = localStorage.getItem('request_token');
    return requestToken;
  },

  saveSession(user) {
    localStorage.setItem('access_token', user.token);
  },

  saveRequestToken(user) {
    localStorage.setItem('request_token', user.request_token);
  }
};
