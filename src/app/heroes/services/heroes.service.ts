import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getHeroes (): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

}
