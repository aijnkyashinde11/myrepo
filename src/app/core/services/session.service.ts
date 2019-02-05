import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from './../../../environments/environment';
import { ILoginModel } from '../../shared/models/login.model';

/**
 * Service for managing the session data for logged in user
 * [Injectable]-> Annotation to indicate that service will be injectale in application.
 */
@Injectable()
export class SessionService {
  isUserLoggedIn: EventEmitter<boolean> = new EventEmitter<any>();

  constructor(private cookie: CookieService) {}

  /**
   * [Create session for current logged in user.]
   * @param {LoginModel} loginModel [description]
   */
  setContext(loginModel: ILoginModel) {
    this.cookie.set('isLoggedIn', 'true', 0, undefined, undefined, environment.production);
    this.cookie.set('userName', loginModel.username, 0, undefined, undefined, environment.production);
    this.cookie.set('accessToken', loginModel.token, 0, undefined, undefined, environment.production);
    this.isUserLoggedIn.emit(true);
  }

  /**
   * [Clear current logged in user from session.]
   */
  resetSession() {
    this.isUserLoggedIn.emit(false);
    this.cookie.deleteAll();
  }

  /**
   * [Checks if user is logged in.]
   */
  isLoggedIn(): boolean {
    return this.cookie.get('isLoggedIn') === 'true';
  }

  /**
   * [Provides username of current logged in user from session.]
   */
  getUserName(): string {
    return this.cookie.get('userName');
  }
}
