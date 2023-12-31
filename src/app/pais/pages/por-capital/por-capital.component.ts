import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';

  hayError: boolean = false;

  paises: Country[] = [];

  paisesSugeridos: Country[] = [];

  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {

  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
    console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError=true;
        this.paises=[]
      });
  }


  sugerencias( termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarCapital(termino)
        .subscribe( paises => this.paisesSugeridos = paises.slice(0, 5),
        (err) => this.paisesSugeridos = []
        );
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }


}
