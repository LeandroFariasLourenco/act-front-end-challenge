import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarvelCharacter, MarvelListResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private url = `${environment.marvel.endpoint}/v1/public`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getCharactersList(): Observable<MarvelListResponse> {
    return this.httpClient.get<MarvelListResponse>(`${this.url}/characters?apikey=${environment.marvel.publicKey}`);
  }

  getCharactersListPaginated(offset: number): Observable<MarvelListResponse> {
    return this.httpClient.get<MarvelListResponse>(`${this.url}/characters?apikey=${environment.marvel.publicKey}&offset=${offset}`);
  }

  getCharactersListByName(name: string): Observable<MarvelListResponse> {
    return this.httpClient.get<MarvelListResponse>(`${this.url}/characters?nameStartsWith=${name}&apikey=${environment.marvel.publicKey}`);
  }

  getCharacterById(id: number): Observable<MarvelListResponse> {
    return this.httpClient.get<MarvelListResponse>(`${this.url}/characters/${id}?apikey=${environment.marvel.publicKey}`);
  }
}
