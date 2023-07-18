import { Component } from '@angular/core';

import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.css']
})
export class RenderListComponent {

  constructor(private listService: ListService){

  }

  canShowAnimals = false;

  lista = [
    {nome: "Lucas", idade: 18, genero: 'm'},
    {nome: "Maria", idade: 21, genero: 'f'},
    {nome: "Joana", idade: 28, genero: 'f'},
    {nome: "Marcos", idade: 16, genero: 'm'},
    {nome: "Roberto", idade: 35, genero: 'm'},
  ]

  listaAnimais: Animal[] = [
    {name: "Joao", type: "cachorro", age: 9},
    {name: "Marcos", type: "cachorro", age: 12},
    {name: "Frederico", type: "gato", age: 5},
    {name: "Joana", type: "gato", age: 2}
  ]

  animalDetails = '';

  showAnimalDetails(objetoDoAnimal: Animal){
    this.animalDetails = `O Animal tem o nome de: ${objetoDoAnimal.name}, sendo da raça: ${objetoDoAnimal.type}, contendo: ${objetoDoAnimal.age} ano(s)!`
  }

  showAnimals() : void{
    this.canShowAnimals = !this.canShowAnimals;
  }

  removeAnimal(animal: Animal){
    console.log("Removendo animal")
    this.listaAnimais = this.listService.remove(this.listaAnimais, animal);
  }

}
