import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { v4 as uuid } from 'uuid';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
export class JwtInterceptor implements HttpInterceptor {
    public unique_request_id: string = "";

    constructor() {}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.unique_request_id = uuid()
        request = request.clone({
            setHeaders: {
                "Transaction-Id": this.unique_request_id
            }
        });
        return next.handle(request);
    }
    
}