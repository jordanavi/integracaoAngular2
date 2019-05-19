import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from '../professor';
import { ProfessoresService } from './professores.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  private professorIndex: number;
  private isNew: boolean = true;
  private professor: Professor;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router:Router,
              private professorService: ProfessoresService) { }

  professores: Professor[] = [];

  criterio: String;

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false;
          this.professorIndex = params['id'];
          this.professorService.get(this.professorIndex)
          .subscribe(data => this.professor = data);
        } else {this.isNew = true;}
      }
    );
  }

    /******** */
  novo() {
    this.professor = new Professor();
  }
  
  cancelar() {
    this.voltar();
  }
  
  voltar() {
    this.router.navigate(['/professores']);
   }
  
  salvar() {
    let result;
    if (this.isNew) {
      result = this.professorService.add(this.professor);
      } else {
      result = this.professorService.update(this.professor);
      }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso ' +data),
    err => {
      alert("An error occurred. "+ err);
      });
  }
  
  excluir() {
    if (this.professor.codigo == null) {
      alert('Selecione algum professor');
    } else {
      if (confirm('Você realmente quer excluir o professor '+this.professor.nome+'?')) {
        this.professorService.remove(this.professor.codigo)
        .subscribe(
          data => alert('Professor removido '+data),
          err => {
            alert('Professor não removido');
          });
        this.novo();
        this.voltar();
      }
    }
  }
  
    /******** 
    
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

    }]*/
  }


