<h1 align="center">Compartilhamento de Dados</h1>

Pasta em prática de como compartilhar dados entre componentes. </br>
Sintaxe:

```html
<app-parent-data [age]="userAge" [name]="userName"></app-parent-data>
```

<p>age e name pertencem ao componente que receberá o dado, enquanto o valor que envolve a string pertence ao componente atual, qual está passando o dado</p>
<p>Para o componente que está recebendo o valor conseguir receber com êxito é necessário importar Input.</p>

```ts
import { Component, Input } from '@angular/core';
```

<p>Em seguida, no mesmo arquivo qual foi importado o input se utiliza da sintaxe seguinte para receber os valores</p>

```ts
@Input() age: number = 0;
@input() name: string = "";
```
<p>É necessário iniciar as variáveis para que o input funcione, geralmente iniciando-as vazias</p>

---

<p>Também é possivel passar objetos para outro componente, e também é possivel passar ambos os dados contendo o mesmo nome de variavel ou objeto.</p>
<h3>Componente pai:</h3>
<p>ts:</p>

```ts
export class AppComponent {
  carro = {
    ano: 2015,
    cor: "vermelho"
  }
```
<p>html:</p>

```html
<app-parent-data [carro]="carro"></app-parent-data>
```
<h3>Componente filho:</h3>
<p>ts:</p>

```ts
export class ParentDataComponent {
  @Input() carro!: {ano: number, cor: string}
}
```
<p>html:</p>

```html
<p>{{carro.cor}}</p>
<p>{{carro.ano}}</p>
```

<p>A razão de se usar um "!" depois do nome do objeto é para inicializá-lo.</p>
