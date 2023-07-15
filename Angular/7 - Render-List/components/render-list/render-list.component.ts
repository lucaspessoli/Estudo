import { Component } from '@angular/core';

@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.css']
})
export class RenderListComponent {
  lista = [
    {nome: "Lucas", idade: 18, genero: 'm'},
    {nome: "Maria", idade: 21, genero: 'f'},
    {nome: "Joana", idade: 28, genero: 'f'},
    {nome: "Marcos", idade: 16, genero: 'm'},
    {nome: "Roberto", idade: 35, genero: 'm'},
  ]

}
