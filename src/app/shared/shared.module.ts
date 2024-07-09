import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CatalogoUnicoService } from '../services/catalogo-unico.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[CatalogoUnicoService]
})
export class SharedModule { }
