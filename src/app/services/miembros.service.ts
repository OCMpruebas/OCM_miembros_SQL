import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Miembro } from '../interfaces/miembro.interface';
import { Observable, BehaviorSubject, interval, of } from 'rxjs';
import { delay, map, share, take } from 'rxjs/operators';
// import 'rxjs/Rx';
// import {map} from 'rxjs/operators';

@Injectable()
export class MiembrosService {

  miembrosURL = `https://heroesapp-74fe2.firebaseio.com/heroesapp-74fe2.json`;
  miembroURL = `https://heroesapp-74fe2.firebaseio.com/heroesapp-74fe2/`;

  constructor( private http: Http ) { }

  nuevoMiembro( miembro: Miembro ) {
    const body = JSON.stringify( miembro );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(  this.miembrosURL, body, { headers }  ).pipe(
          map( res => {
            console.log(res.json());
            return res.json();
          } ));
  }

  actualizarMiembro( miembro: Miembro, key$: string ) {
    const body = JSON.stringify( miembro );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${ this.miembroURL }/${ key$ }.json`;
    return this.http.put(  url , body, { headers }  ).pipe(
          map( res => {
            console.log(res.json());
            return res.json();
          } ));
  }

  getMiembro( key$: string ) {
    const url = `${ this.miembroURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(
      map( res => res.json() ));
  }

  getMiembros( ) {
      return this.http.get( this.miembrosURL ).pipe(
      map( res => res.json() ));
       }

  borrarMiembro( key$: string) {
    const url = `${  this.miembroURL  }/${ key$ }.json`;
    return this.http.delete( url ).pipe(
        map( res => res.json() ));
  }

}
