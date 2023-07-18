import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
  name: string = "Lucas";
  age: number = 30;
  student: boolean = true;
  numeros: Array<number> = [1,2];
  // numeros = [1,2,3,4];
  carro = {
    name: "Lambo",
    preco: 1_4000_000
  }
  
}
