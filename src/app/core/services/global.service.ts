import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InterceptorErro } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  /**
   * @description Observables
   */
  loading: Observable<boolean>;
  error: Observable<InterceptorErro>;

  /**
   * @description Subjects
   */
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<InterceptorErro>({ mensagem: '', tipo: '' });

  constructor() {
    this.loading = this.loadingSubject.asObservable();
    this.error = this.errorSubject.asObservable();
  }

  setError(error: InterceptorErro) {
    this.errorSubject.next(error);
    this.loadingSubject.next(false);
  }
}
