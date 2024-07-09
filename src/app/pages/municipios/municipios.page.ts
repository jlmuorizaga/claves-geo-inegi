import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogoUnicoService } from 'src/app/services/catalogo-unico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.page.html',
  styleUrls: ['./municipios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SharedModule]
})
export class MunicipiosPage implements OnInit {
  estadoId: string = '';
  estado = null as any;
  municipios:any[] = [];
  params = {} as any;

  constructor(
    private actRoute: ActivatedRoute,
    private catalogoUnicoSvc:CatalogoUnicoService
    ) { 
      this.estadoId = this.actRoute.snapshot.paramMap.get('id') as string;
      console.log('Estado=='+this.estadoId);
    }

  ngOnInit() {}
ionViewWillEnter() {
  this.getMunicipios()
}

  //===== Obtener municipios ======
  getMunicipios(event?:any){    
    this.params.page+=1;
    this.catalogoUnicoSvc.getMunicipios(this.estadoId).subscribe({
      //this.catalogoUnicoSvc.getEstados().subscribe({
      next:(res:any)=>{
        this.municipios.push(...res.datos)
      
        console.log(this.municipios);
        if (event) event.target.complete();

      },
      error:(error:any)=>{
        console.log('error municipios');
        console.log(this.municipios);
        if (event) event.target.complete();

      }
    })

  }
}
