import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  constructor() { }

  disciplinas: Disciplina [] = [];

  ngOnInit() {
    this.disciplinas = [{
      'codigo' : 1,
      'descricao' : 'Esta e a disciplina de portugues'
    }]
  }

}
