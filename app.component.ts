import { Component } from '@angular/core';
import { CadastroComponent } from './projeto/cadastro.component'; 

@Component({
    selector: 'my-app',
    template: `
        <cadastro-binding></cadastro-binding> 
    `,
    directives: [CadastroComponent]
})
export class AppComponent { }
