import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

import { GlobalModules } from './globalmodules.module';
import { PrimeNgModule } from './primeng.module';

/** Components **/
// import { LoadingComponent } from './components/loading/loading.component';

/** Pipes **/
import { IsArrayPipe } from './pipes/is-array.pipe';
import { TypeOfPipe } from './pipes/typeof.pipe';
import { ConsoleLogPipe } from './pipes/console-log.pipe';
import { CastPipe } from './pipes/cast.pipe';

/** Directives **/
// import { ErrorComponent } from './components/error/error.component';
import { CharacterPanelComponent } from './components/character-panel/character-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CharactersShelfComponent } from './components/characters-shelf/characters-shelf.component';
import { HeaderComponent } from './components/header/header.component';

const modules = [
  // Components
  // LoadingComponent,
  // ErrorComponent,
  CharactersShelfComponent,
  CharacterPanelComponent,
  FooterComponent,
  HeaderComponent,

  // Directives

  // Pipes
  ConsoleLogPipe,
  IsArrayPipe,
  TypeOfPipe,
  CastPipe
];

@NgModule({
  declarations: [
    ...modules,
  ],
  imports: [
    CommonModule,
    GlobalModules,
    PrimeNgModule
  ],
  exports: [
    CommonModule,
    ...modules
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService,
  ]
})
export class DeclarationsModule { }
