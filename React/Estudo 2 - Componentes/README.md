Para criar um componente, primeiramente crie uma pasta components na sua src e dentro dela crie arquivos js.

Exemplo: HelloWorld.js

dentro do arquivo utilize a sintaxe para components

function HelloWorld(){

	return(
		<div>
			<h1>Olá mundo!</h1>
		</div>
	)
}

export default HelloWorld


para chamar no App principal, use:

import HelloWorld from 'DIRETORIO';

vá no return do app e adicione dentro de um wraped:

<HelloWorld />