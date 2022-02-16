import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InterceptorErro } from 'src/app/core/models/interceptorErro';
import { GlobalService } from 'src/app/core/services';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  httpError: InterceptorErro;

  clientRequestError: InterceptorErro;

  popupAberto: boolean;

  constructor(
    private globalService: GlobalService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.subscribeClientRequestError();
    this.subscribeHttpError();
  }

  subscribeHttpError(): void {
    this.globalService.error.subscribe((erro) => {
      if (!erro.mensagem) { return; }

      this.httpError = erro;
      this.popupAberto = true;
    }, console.error);
  }

  subscribeClientRequestError(): void {
    this.globalService.error.subscribe((clientError) => {
      if (!clientError.mensagem) { return; }

      this.clientRequestError = clientError;
      this.notificarErro();
    }, console.error);
  }

  notificarErro(): void {
    this.messageService.add({
      key: 'app-error-toast',
      detail: this.clientRequestError.mensagem,
      severity: 'error',
      summary: this.clientRequestError.tipo,
    });
  }

  navegarParaInicio(): void {
    this.router.navigate(['/']);
  }

  recarregarPagina(): void {
    window.location.reload();
  }

  alternarPopup(): void {
    this.popupAberto = !this.popupAberto;
  }
}
