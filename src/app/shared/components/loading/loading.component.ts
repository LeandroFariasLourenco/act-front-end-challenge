import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/core/services';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading = false;

  removerElemento = false;

  constructor(
    private globalService: GlobalService
  ) { }

  removerElementoDaView(novoEstado: boolean): void {
    this.removerElemento = novoEstado;
  }

  ngOnInit(): void {
    this.subscribeLoading();
  }

  subscribeLoading(): void {
    this.globalService.loading.subscribe((isLoading) => {
      const { body } = window.document;
      this.loading = isLoading;
      this.removerElementoDaView(isLoading);
      if (!isLoading) {
        return body.classList.remove('no-overflow');
      }

      return body.classList.add('no-overflow');
    }, console.error);
  }
}
