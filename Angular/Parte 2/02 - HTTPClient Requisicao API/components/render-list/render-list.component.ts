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
    this.getAnimals()
  }

  canShowAnimals = false;

  listaAnimais: Animal[] = []

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

  getAnimals() : void{
    // this.listService.getAll().subscribe((response) => (this.listaAnimais = response));
    this.listService.getAll().subscribe((response)=>{
      this.listaAnimais = response;
    }) 
  }



}
