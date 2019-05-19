import { Component, OnInit } from '@angular/core';
import { AreaConhecimento } from '../area-conhecimento';
import { AreaConhecimentosService } from './area-conhecimentos.service';

@Component({
  selector: 'app-area-conhecimento',
  templateUrl: './area-conhecimento.component.html',
  styleUrls: ['./area-conhecimento.component.css']
})
export class AreaConhecimentoComponent implements OnInit {

  constructor(private areaConhecimentoService: AreaConhecimentosService) { }

  areaConhecimentos : AreaConhecimento [] = [];

  ngOnInit() {
    this.areaConhecimentoService.getAll()
      .subscribe(data =>this.areaConhecimentos = data, err =>{alert('Aconteceu um erro!'); });

    this.areaConhecimentos = [{
      'codigo' : 1,
      'nome' : 'Linguagens'
    }]
  }

}
