<h1 align="center"> Angular</h1>

---

Angular é um framework TypeScript que usa da componentização ao seu favor

<h1>Instalando Angular:</h1>

Ferramentas necessárias: Interpretador de código e NodeJS
```bash
npm install -g angular/cli
```

<h1>Criando projeto e buildando</h1>

Criar projeto:
```bash
ng new NomeProjeto
```
Rodar pojeto:
```bash
ng serve
```

<h1 align="center">Estrutura</h1>

<p>node_modules: Onde é instalado as depêndencias do projeto</p>
<p>src: onde programa a aplicação</p>
<p>src/app: Pasta principal para os componentes,services etc</p>
<p>componentes: dividos em ts,html,css e testes</p>

<h1 align="center">Componentes</h1>

<p>Criando um componente</p>

```bash
ng generate component nomeComponente
```

<p>Ou gerar uma pasta juntamente com o componente</p>

```bash
ng generate component components/nomeComponente
```

<h1 align="center">Escopo dos Componentes</h1>

<p>Como padrão, ao gerar um novo componente pelo cli irá vir 4 arquivos do componente: html,css, ts spec e ts, no ts é definido onde o html e o css irão estar alocados</p>
<p>Dividindo melhor o css para o html do mesmo escopo, evitando vazamento de css entre escopos (pode ser alterado a linkagem deles entre si)</p>

```ts
@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
```
