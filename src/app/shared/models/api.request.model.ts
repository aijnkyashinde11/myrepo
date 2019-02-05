import { HttpHeaders } from '@angular/common/http';
import { APIMethod } from './apimethod.enum';

export class APIRequest {
  public endpoint: string;
  public method: APIMethod;
  private headers: HttpHeaders;
  private rawBody: any;

  constructor(endpoint: string, method: APIMethod, payload?: any, headers?: HttpHeaders | null) {
    this.endpoint = endpoint;
    this.method = method;
    this.rawBody = payload;
    this.headers = headers || new HttpHeaders();
  }

  getPayload() {
    return this.rawBody;
  }

  prepareHeader(): object {
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
    return {
      headers: this.headers
    };
  }
}
