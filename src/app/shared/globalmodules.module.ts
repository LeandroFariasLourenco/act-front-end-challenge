import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

const modules = [
  ReactiveFormsModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  FormsModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService
  ]
})
export class GlobalModules { }
