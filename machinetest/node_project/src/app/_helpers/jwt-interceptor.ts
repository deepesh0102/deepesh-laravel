import { Injectable} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.handleAccess(request, next);
      }
     
      private handleAccess(request: HttpRequest<any>, next: HttpHandler):
          Observable<HttpEvent<any>> {
        const token =  this.authService.getToken();
        let changedRequest = request;
        // HttpHeader object immutable - copy values
        const headerSettings: {[name: string]: string | string[]; } = {};
     
        for (const key of request.headers.keys()) {
          headerSettings[key] = request.headers.getAll(key);
        }
        if (token) {
          headerSettings['x-access-token'] = token;
        }
        headerSettings['Content-Type'] = 'application/json';
        const newHeader = new HttpHeaders(headerSettings);
     
        changedRequest = request.clone({
          headers: newHeader});
        return next.handle(changedRequest);
      }
     
    }
