import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MarvelListResponse } from 'src/app/core/models';
import { MarvelService } from 'src/app/core/services';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-characters-shelf',
  templateUrl: './characters-shelf.component.html',
  styleUrls: ['./characters-shelf.component.scss']
})
export class CharactersShelfComponent implements OnInit {

  @Input() charactersResponse: MarvelListResponse;

  @ViewChild('shelf') shelf: ElementRef<HTMLDivElement>;

  loading = false;

  filtersOpen = false;

  constructor(
    private marvelService: MarvelService,
  ) { }

  ngOnInit() {
    this.listCharacters();
  }

  listCharacters(): void {
    this.loading = true;
    this.marvelService.getCharactersList()
      .pipe(finalize(() => this.loading = false))
      .subscribe((data) => {
        this.charactersResponse = data;
      }, console.log);
  }



  listCharactersByPage(event: Paginator): void {
    this.loading = true;
    window.scrollTo({
      top: this.shelf.nativeElement.offsetTop - 95,
      behavior: 'smooth'
    });
    this.marvelService.getCharactersListPaginated(event.first)
      .pipe(finalize(() => this.loading = false))
      .subscribe((data) => {
        this.charactersResponse = data;
      }, console.log);
    ;
  }

  toggleFilters(): void {
    this.filtersOpen = !this.filtersOpen;
  }

  searchHeroes(query: string): void {
    this.loading = true;
    this.marvelService.getCharactersListByName(query)
      .pipe(finalize(() => this.loading = false))
      .subscribe((data) => {
        this.charactersResponse = data;
      }, console.log);
  }
}
