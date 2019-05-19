import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';
import { ProfessoresService } from './professores.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(private professorService: ProfessoresService) { }

  professores: Professor [] = [];

  ngOnInit() {
    this.professorService.getAll()
      .subscribe(data =>this.professores = data, err =>{alert('Aconteceu um erro!'); });

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
