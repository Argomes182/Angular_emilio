import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { CadastroComponent } from './projeto/cadastro.component';
@NgModule({
  imports:      [ BrowserModule,
             	  FormsModule ],
declarations: [ AppComponent,
                CadastroComponent ],
bootstrap:    [ AppComponent ]
})
export class AppModule { } 
# sourceMappingURL=app.module.js.map