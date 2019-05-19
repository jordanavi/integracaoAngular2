import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { conteudoRouting } from './conteudos.routing';
import { ConteudoComponent } from './conteudo.component';
import { ConteudosService } from './conteudos.service';
import { ConteudoFormComponent } from './conteudo-form/conteudo-form.component';

@NgModule({
    imports: [
        CommonModule, conteudoRouting, FormsModule
    ],
    declarations: [ConteudoComponent, ConteudoFormComponent],
    providers: [ConteudosService]
})
export class ConteudosModule{ }