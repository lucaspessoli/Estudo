<h1 align="center">ROUTING</h1>

---

<p>Routing é uma ferramenta para melhor navegação entre components do site. um exemplo de Routing é o "/" que fica depois dos links dos sites </p>
<p>Ex: "github.com/lucaspessoli"</p>
<p>Tudo que vem depois do / seria um routing</p>

---

<h2 align="center">Aplicando Router.</h2>

<p>É necessário criar um arquivo ts no projeto para executar o routing</p>

```ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrimeiroComponenteComponent } from "./components/primeiro-componente/primeiro-componente.component";
import { RenderListComponent } from "./components/render-list/render-list.component";


const routes: Routes = [
    {path: '', component: PrimeiroComponenteComponent},
    {path: 'list', component: RenderListComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
```

<p>no trecho de código mostra os imports dos módulos necessarios e os componentes que serão usados no routing</p>
<p>na parte do const routes é onde se define o nome do routing (depois do "/" no link, como exemplo o list) quando /list estiver no fim do link ele irá renderizar o componente renderlist. caso não haja
 nada irá renderizar o primeiroComponent, que seria a "home"
</p>

<h2>Importando no app.module.ts</h2>

<p>Para importar no app.module.ts é simples: apenas será necessário adição de duas linhas</p>

```ts
import { AppRoutingModule } from './app-routing-module';
```

<p>E também importar no @NgModule do mesmo arquivo</p>

```ts
@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    RenderListComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

<h2 align="center">Finalmente usando o Router</h3>

<p>Exemplo de uso: </p>

```ts

<nav>
    <a routerLink="list">Navegar para lista</a> <br>
    <a routerLink="">Navegar para home</a>
</nav>
```

