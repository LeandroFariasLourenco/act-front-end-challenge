import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { NgModule } from '@angular/core';

const modules = [
  CardModule,
  SkeletonModule,
  PaginatorModule,
  ButtonModule,
  InputTextModule,
  SidebarModule,
  TooltipModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class PrimeNgModule { }
