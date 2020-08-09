// Project files
import { ILoginBody, ISignupBody } from "@app/types";
import { LoggerService } from '@app/services';

const logger = new LoggerService('app:auth.service');

class AuthService {
  public getToken() {
    return '';
  }

  public logout() {
    return true;
  }

  public async login(payload: ILoginBody) {
    logger.log(JSON.stringify(payload));
  }

  public async signup(payload: ISignupBody) {
    logger.log(JSON.stringify(payload));
  }

  public isAuthenticated() {
    return false;
  }
}

export default new AuthService();