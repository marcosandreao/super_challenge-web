import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import { MessageService } from '../services/message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private messageService: MessageService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMsg = '';
                    if (error.error && error.error.message) {
                        let message = '';
                        if (typeof error.error.message  === 'string' || error.error.message instanceof String ) {
                            message = error.error.message;
                        } else {
                            message = error.error.message.join("\n");;
                        }
                        errorMsg = `Error: ${message}`;
                    } else {
                        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                    }
                    this.messageService.show(errorMsg, 6000);
                    return throwError(errorMsg);
                })
            )
    }
}