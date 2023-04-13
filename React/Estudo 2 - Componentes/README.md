<h1 align="center">Criar e chamar componente </h1>
Para criar um componente, primeiramente crie uma pasta components na sua src e dentro dela crie arquivos js.

Exemplo: HelloWorld.js

dentro do arquivo utilize a sintaxe para components
```bash
function HelloWorld(){

	return(
		<div>
			<h1>Olá mundo!</h1>
		</div>
	)
}

export default HelloWorld
```


para chamar no App principal, use:
```bash
import HelloWorld from 'DIRETORIO';
```
vá no return do app e adicione dentro de um wraped:
```bash
<HelloWorld />
```

Dessa forma você chamará o componente no APP principal, exibindo na página: Hello World

<h1 align="center">Chamar componente dentro de um componente </h1>

Crie outro componente, exemplo: Frase.js e code da maneira que você quiser. Exemplo:
```bash
function Frase(){

	return(
		<div>
			<h1>minha frase!</h1>
		</div>
	)
}

export default Frase
```

Após isso, vá para o componente HelloWorld.js e adicione o import:

```bash
import Frase from 'DIRETORIO';
```
e dentro do return da funcao HelloWorld() chame o componente Frase

```bash
function HelloWorld(){

	return(
		<div>
			<h1>Olá mundo!</h1>
			<Frase />
		</div>
	)
}
```

Pronto, você chamou um componente dentro de outro componente, agora se você executar o componente HelloWorld.js no APP principal, ele automaticamente virá com as peculiaridades do Frase junto, ou seja, irá vir com um h1: "minha frase".
