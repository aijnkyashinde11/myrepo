import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { APIRequest } from '../../shared/models/api.request.model';
import { APIMethod } from '../../shared/models/apimethod.enum';




/**
 * Service for manage API executions like GET, POST, PUT, DELETE.
 * [Injectable description] -> Annotation to indicate that service will be injectale in application.
 */
@Injectable()
export class ApiService {
  private baseURl: string = environment.API;

  /**
   * Constructor for ApiService.
   * @param {Http} public apiExecuter [HTTP client to execute methods like GET, POST, PUT, DELETE]
   */
  constructor(public apiExecuter: HttpClient) { }

  /**
   * [Execute Http request.]
   * @param {APIRequest} apiRequest [description]
   */
  executeAPI<T>(apiRequest: APIRequest): Observable<T> {
    switch (apiRequest.method) {
      case APIMethod.GET:
        return this.apiExecuter
          .get<T>(this.baseURl + apiRequest.endpoint, apiRequest.prepareHeader())
          .pipe(catchError(data => Observable.throw(data)));
      case APIMethod.POST:
        return this.apiExecuter
          .post<T>(this.baseURl + apiRequest.endpoint, apiRequest.getPayload(), apiRequest.prepareHeader())
          .pipe(catchError(data => Observable.throw(data)));
      case APIMethod.PUT:
        return this.apiExecuter
          .put<T>(this.baseURl + apiRequest.endpoint, apiRequest.getPayload(), apiRequest.prepareHeader())
          .pipe(catchError(data => Observable.throw(data)));
      case APIMethod.DELETE:
        return this.apiExecuter
          .delete<T>(this.baseURl + apiRequest.endpoint, apiRequest.prepareHeader())
          .pipe(catchError(data => Observable.throw(data)));
    }
  }
}
