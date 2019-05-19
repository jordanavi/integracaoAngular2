import { Component, OnInit } from '@angular/core';
import { Conteudo } from '../conteudo';
import { ConteudosService } from './conteudos.service';


@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  constructor(private conteudoService: ConteudosService) { }

  conteudos: Conteudo [] = [];

  ngOnInit() {
    this.conteudoService.getAll()
      .subscribe(data =>this.conteudos = data, err =>{alert('Aconteceu um erro!'); });

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
