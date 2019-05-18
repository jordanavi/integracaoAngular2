import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AreaConhecimento } from '../area-conhecimento';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
  export class AreaConhecimentosService{
    private url: string = 'http://localhost:9000/areaConhecimentos';
    constructor (private http: Http) {    }

    getAll(): Observable<AreaConhecimento[]>{
      return this.http.get(this.url)
                      .map(res => res.json())
                      .catch(this.handleError);
    }

    private handleError(error: any){
      let erro = error.message || 'Server error';
      console.error('Ocorreu um erro', error);
      return Observable.throw(erro);
    }
  }
  