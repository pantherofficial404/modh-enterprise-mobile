// Project files
import { ILoginBody, ISignupBody } from "@app/types";
import { LoggerService, NetworkService } from '@app/services';
import Config from "@app/config";

const logger = new LoggerService('app:auth.service');

class AuthService {
  public getToken() {
    return '';
  }

  public logout() {
    return true;
  }

  public async login(payload: ILoginBody) {
    const response = await NetworkService.post(`${Config.SERVER_URL}/auth/login`, payload);
    return response;
  }

  public async signup(payload: ISignupBody) {
    const response = await NetworkService.post(`${Config.SERVER_URL}/auth/signup`, payload);
    console.log(response);
  }

  public isAuthenticated() {
    return false;
  }
}

export default new AuthService();