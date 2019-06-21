import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse} from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

export class HttpConfigInterceptor implements HttpInterceptor {
    
    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        const token = localStorage.getItem("token");

        if(token) {
            request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`)
            })
        }

        return next.handle(request).pipe(
            map((event:HttpEvent<any>) => {
                if(event instanceof HttpResponse) {
                    console.log(event)
                }

                return event;
            }),
            catchError((error:HttpErrorResponse) => {
                console.log(error)
                return throwError(error);
            })
        )
    }
}