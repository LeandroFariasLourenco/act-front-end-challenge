import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelCharacter } from 'src/app/core/models';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss']
})
export class CharacterPanelComponent implements OnInit {

  @Input() character: MarvelCharacter;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigateToCharacterPage(): void {
    this.router.navigate(['character', this.character.id]);
  }
}
