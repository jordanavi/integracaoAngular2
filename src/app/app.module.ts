import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

/*--------------imports copiado do menu---------------*/
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
/*--------------fim dos imports copiado do menu---------------*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaConhecimentoComponent } from './area-conhecimento/area-conhecimento.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ProfessorComponent } from './professor/professor.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DisciplinaFormComponent } from './disciplina/disciplina-form/disciplina-form.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    AreaConhecimentoComponent,
    ConteudoComponent,
    DisciplinaComponent,
    ProfessorComponent,
    HomeComponent,
    DisciplinaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    /*--------------imports copiado do menu---------------*/
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule
/*--------------fim dos imports copiado do menu---------------*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
