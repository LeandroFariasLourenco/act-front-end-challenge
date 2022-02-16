import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InterceptorErro } from '../models/interceptorErro';
import { GlobalService } from '../services';
import { ERRORS } from '../constants';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private globalService: GlobalService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap(() => { }, (httpEvent) => {
      const erro: InterceptorErro = {
        mensagem: '',
        tipo: ''
      };
      switch (httpEvent.status) {
        case 500:
          erro.mensagem = ERRORS[500].mensagem;
          erro.tipo = ERRORS[500].tipo;
          return this.globalService.setError(erro);
        case 401:
          erro.mensagem = ERRORS[401].mensagem;
          erro.tipo = ERRORS[401].tipo;
          return this.globalService.setError(erro);
        case 400:
          erro.mensagem = ERRORS[400].mensagem;
          erro.tipo = ERRORS[400].tipo;
          return this.globalService.setError(erro);
        case 404:
        case 0:
          erro.mensagem = ERRORS[404].mensagem;
          erro.tipo = ERRORS[404].tipo;
          return this.globalService.setError(erro);
        default: return;
      }
    }));
  }
}
