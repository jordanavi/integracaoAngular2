import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreaConhecimentoComponent } from './area-conhecimento/area-conhecimento.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ProfessorComponent } from './professor/professor.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaConhecimentoComponent,
    ConteudoComponent,
    DisciplinaComponent,
    ProfessorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
