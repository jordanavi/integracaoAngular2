import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { conteudoRouting } from './conteudo.routing';
import { ConteudoComponent } from './conteudo.component';

@NgModule({
    imports: [
        CommonModule, conteudoRouting, FormsModule
    ],
    declarations: [ConteudoComponent]
})
export class ContedudosModule{ }