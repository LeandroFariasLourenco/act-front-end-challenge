import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeclarationsModule } from './declarations.module';
import { GlobalModules } from './globalmodules.module';
import { PrimeNgModule } from './primeng.module';

const modules = [
  CommonModule,
  DeclarationsModule,
  GlobalModules,
  PrimeNgModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule { }
