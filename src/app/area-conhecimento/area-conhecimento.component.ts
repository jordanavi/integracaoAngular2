import { Component, OnInit } from '@angular/core';
import { AreaConhecimento } from '../area-conhecimento';

@Component({
  selector: 'app-area-conhecimento',
  templateUrl: './area-conhecimento.component.html',
  styleUrls: ['./area-conhecimento.component.css']
})
export class AreaConhecimentoComponent implements OnInit {

  constructor() { }

  areaConhecimentos : AreaConhecimento [] = [];

  ngOnInit() {
    this.areaConhecimentos = [{
      'codigo' : 1,
      'nome' : 'Linguagens'
    }]
  }

}
