import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

import { GlobalModules } from './globalmodules.module';
import { PrimeNgModule } from './primeng.module';

import { ConsoleLogPipe } from './pipes/console-log.pipe';

import { CharacterPanelComponent } from './components/character-panel/character-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CharactersShelfComponent } from './components/characters-shelf/characters-shelf.component';
import { HeaderComponent } from './components/header/header.component';

const modules = [
  // Components
  CharactersShelfComponent,
  CharacterPanelComponent,
  FooterComponent,
  HeaderComponent,

  // Pipes
  ConsoleLogPipe,
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
