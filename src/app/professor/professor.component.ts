import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor() { }

  professores: Professor [] = [];

  ngOnInit() {
    this.professores= [{
      'codigo': 1,
      'nome':'Joao da Cunha',
      'formacao':'Letras',
      'endereco':'Rua A',
      'cidade':'Uberlandia',
      'cep':'38408214',
      'pais':'Brasil',
      'telefone':'34998685479',
      'email':'joaocunha@iftm.edu.br'

    }]
  }

}
