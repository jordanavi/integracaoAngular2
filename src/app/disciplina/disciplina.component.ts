import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina';
import { DisciplinasService } from './disciplinas.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  constructor(private disciplinaService: DisciplinasService) { }

  disciplinas: Disciplina [] = [];

  ngOnInit() {
    this.disciplinaService.getAll()
      .subscribe(data =>this.disciplinas = data, err =>{alert('Aconteceu um erro!'); });

    this.disciplinas = [{
      'codigo' : 1,
      'descricao' : 'Esta e a disciplina de portugues'
    }]
  }

}
