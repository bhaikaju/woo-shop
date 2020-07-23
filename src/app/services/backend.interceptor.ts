import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

export const SkipInterceptor = 'X-Skip-Interceptor';
export const WriteObject = 'X-Write-Object';



@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //  This will skip the interception if SkipInterceptor header is present
    if (request.headers.has(SkipInterceptor)) {
      const headers = request.headers.delete(SkipInterceptor);
      return next.handle(request.clone({headers}));
    }

  //  This will also skip the interception if Write-Object header is present
    if (request.headers.has(WriteObject)) {
      const headers = request.headers.delete(WriteObject);
      const updatedRequest = request.clone({
        setParams: {
          consumer_key : environment.writableKeys.consumer_key,
          consumer_secret: environment.writableKeys.consumer_secret
        },
        headers
      });

      return next.handle(updatedRequest);
    }

  //  If both the headers are not present, process normally
    const modifiedRequest = request.clone({
      setParams: {
        consumer_key: environment.readOnlyKeys.consumer_key,
        consumer_secret: environment.readOnlyKeys.consumer_secret
      }
    });

    return next.handle(modifiedRequest);

  }
}
