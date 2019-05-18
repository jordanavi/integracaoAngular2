import { Component, OnInit } from '@angular/core';
import { Conteudo } from '../conteudo';


@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  constructor() { }

  conteudos: Conteudo [] = [];

  ngOnInit() {
    this.conteudos= [{
      'codigo': 1,
      'nome': 'conteudo de portugues',
      'descricao': 'esta e a descricao do conteudo de portuges...',
      'competencia' : "esta e a competencia do conteudo de portugues...",
      'disciplina': null,
      'areaConhecimento' : null
    }]
  }

}
