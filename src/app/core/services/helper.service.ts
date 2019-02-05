import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

/**
 * Helper Services
 * [Injectable]-> Annotation to indicate that service will be injectale in application.
 */
@Injectable()
export class HelperService {
  constructor(private cookie: CookieService) {}

  /**
   * [Create new browser cookie.]
   * @param {string} key [Cookie name]
   * @param {string} value [Cookie data]
   */
  setCookie(key: string, value: any) {
    return this.cookie.set(key, value, 0, undefined, undefined, environment.production);
  }

  /**
   * [Provides saved cookie data.]
   * @param {string} key [Cookie name]
   */
  getCookie(key: string): string {
    return this.cookie.get(key);
  }

  /**
   * [Checks if cookie exists.]
   * @param {string} key [Cookie name]
   */
  hasCookie(key: string): boolean {
    return this.cookie.check(key);
  }

  /**
   * [Checks if object contains any value.]
   * @param {any} data [description]
   */
  isEmpty(data: any): boolean {
    if (data instanceof Array) {
      return data === null || data === undefined || data.length === 0;
    } else {
      if (data) {
        data = data.toString().trim();
      }
      return data === null || data === undefined || data === '';
    }
  }
}
