import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CatalogoUnicoService } from 'src/app/services/catalogo-unico.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SharedModule]
})
export class HomePage implements OnInit {
  estados:any[]=[];
  params={} as any;

  constructor(
    private catalogoUnicoSvc:CatalogoUnicoService) { }

  ngOnInit() {
    this.params.page=0;
    this.getEstados();
  }

  //===== Obtener estados ======
  getEstados(event?:any){
    //getEstados(){
    this.params.page+=1;
    this.catalogoUnicoSvc.getEstados(this.params).subscribe({
      
      next:(res:any)=>{
        this.estados.push(...res.datos)
        console.log(this.estados);
        if (event) event.target.complete();

      },
      error:(error:any)=>{
        console.log('Error en estados');
        console.log(this.estados);
        if (event) event.target.complete();

      }
    })

  }

    // ======Buscar estados por nombres
    searchEstados() {
      //this.params.page = 1;
      this.catalogoUnicoSvc.getEstados(this.params).subscribe({
        next: (res: any) => {
          this.estados=res.datos
        
  
        },
        error: (error: any) => {
          
        }
      })
  
    }



}
