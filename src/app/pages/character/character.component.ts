import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { MarvelCharacter } from 'src/app/core/models';
import { MarvelService } from 'src/app/core/services';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: MarvelCharacter;

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marvelService: MarvelService,
  ) { }

  ngOnInit(): void {
    this.listCharacterDetails();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  listCharacterDetails(): void {
    this.loading = true;
    this.marvelService.getCharacterById(this.route.snapshot.params.id)
      .pipe(finalize(() => this.loading = false))
      .subscribe(({ data }) => this.character = data.results[0], console.log);
  }

  goBack(): void {
    this.router.navigate(['home']);
  }

  navigateToExternalUrl(url: string): void {
    window.open(url);
  }

}
