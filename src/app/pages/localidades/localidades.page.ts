import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogoUnicoService } from 'src/app/services/catalogo-unico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.page.html',
  styleUrls: ['./localidades.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SharedModule]
})
export class LocalidadesPage implements OnInit {
  municipioId: string = '';
  municipio = null as any;
  localidades:any[] = [];
  params = {} as any;

  constructor(
    private actRoute: ActivatedRoute,
    private catalogoUnicoSvc:CatalogoUnicoService
  ) { 
    this.municipioId = this.actRoute.snapshot.paramMap.get('id') as string;
    console.log('Municipio=='+this.municipioId);
  }

  ngOnInit() {}
    ionViewWillEnter() {
      this.getLocalidades()
  }

    //===== Obtener localidades ======
    getLocalidades(event?:any){
      this.params.page+=1;
      this.catalogoUnicoSvc.getLocalidades(this.municipioId).subscribe({        
        next:(res:any)=>{
          this.localidades.push(...res.datos)
  
          console.log(this.localidades);
          if (event) event.target.complete();
  
        },
        error:(error:any)=>{
          console.log('error localidades');
          console.log(this.localidades);
          if (event) event.target.complete();
  
        }
      })
  
    }
}


