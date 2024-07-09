import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogoUnicoService {

  constructor(private http:HttpClient) { }

  getEstados(params:any){
    return this.http.get(environment.baseUrl+environment.estados,{params})    
  }
  getMunicipios(id:string){
    return this.http.get(environment.baseUrl+environment.municipios+id)  
  }
  getLocalidades(id:string){
    return this.http.get(environment.baseUrl+environment.localidades+id)
  }


}
