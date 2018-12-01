
// import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
// import 'rxjs/Rx';
import { Observable, BehaviorSubject, interval, of } from 'rxjs';
import { delay, map, share, take } from 'rxjs/operators';

@Injectable()
export class HeroesService {

 // Curso
  // heroesURL:string = "https://heroesapp-59949.firebaseio.com/heroes.json";
  // heroeURL:string = "https://heroesapp-59949.firebaseio.com/heroes/";

  // MAM
  heroesURL = `https://heroesapp-74fe2.firebaseio.com/heroesapp-74fe2.json`;
  heroeURL = `https://heroesapp-74fe2.firebaseio.com/heroesapp-74fe2/`;


  constructor( private http: Http ) { }

  nuevoHeroe( heroe: Heroe ) {

    const body = JSON.stringify( heroe );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(  this.heroesURL, body, { headers }  ).pipe(
          map( res => {
            console.log(res.json());
            return res.json();
          } ));
  }

  actualizarHeroe( heroe: Heroe, key$: string ) {

    const body = JSON.stringify( heroe );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.put(  url , body, { headers }  ).pipe(
          map( res => {
            console.log(res.json());
            return res.json();
          } ));
  }

  getHeroe( key$: string ) {

    const url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(
      map( res => res.json() ));

  }

  getHeroes( ) {

    return this.http.get( this.heroesURL ).pipe(
      map( res => res.json() ));

  }

  borrarHeroe( key$: string) {

    const url = `${  this.heroeURL  }/${ key$ }.json`;
    return this.http.delete( url ).pipe(
        map( res => res.json() ));

  }


}
