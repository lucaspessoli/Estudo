    //Declarando Variaveis
    var idade = 23;
    var nome = "Lucas";
    var lista = ["Maria", "Joaquina", "cirila", 23, false]
    var lista2 = [1,4,5]
    let te = 0;
    const valorFixo = 2;

    //var = Variáveis que são definidas globalmente
    //let = Variáveis que são definidas local e não global!
    //constant = Variáveis que não podem ser alteradas, por exemplo lista.push() ou concat não irá funcionar
    //obs: não é necessário declarar string, int, boolean, char, double etc...

    //Imprimir no site e no console
    document.write(idade + nome);
    console.log(idade + nome);

    //Funcoes
    function oi(){
        document.write("Minha função!");
    }
    //Condições e aplicação de função
    if(idade > 25){
        document.write("É maior que 25!");
        oi();
    }else{
        document.write("Não é maior que 25");
        oi();
    }
    //For
    for(var i = 0; i<lista.length;i++){
        console.log("-" + lista[i])
    }
    //While
    while(idade <= 30){
        console.log(idade)
        idade+=1;
    }
    //Try e catch: try irá tentar executar o que tem dentro do seu bloco, caso alguma exception(erro) ocorra ele irá disparar o que tiver dentro do catch
    //um erro pode ser forçado com: throw new Error("mensagem do erro")
    try{
        console.log("ola");
    }catch(e){
        console.log("vish");
    }




    //Imprimir por indice na lista
    console.log(lista[2]);

    //Editar elemento da lista
    lista[2] = "ola";

    //Uso das funções das listas

    //Filtrar uma lista (está criando uma nova lista do qual o Marcao não está incluso!)
    const listaSemMarcao = lista.filter(function(nome){
        return nome != "Marcao";
    });
    //Adicionar elemento na lista
    lista.push("Marcao");
    //Uso do Includes (O include irá procurar na lista o elemento do qual você informou e no segundo parâmetro irá procurar +
    // a partir do indice informado, exemplo: se informou o indice 2 procurar do 0 até o indice informado +
    // se o indice informado passar do indice do qual o valor está alocado irá retornar false! 
    console.log(lista.includes("Joaquina", 0)); //irá retornar true, pois a Joaquina está no indice 1 
    console.log(lista.includes("Joaquina", 2)); //irá retornar false, pois a Joaquina está no indice 1 
    //Também pode ser usado utilizando apenas o parâmetro de busca (o primeiro)
    console.log(lista.includes("Joaquina"));//irá retornar true, pois tem Joaquina na lista.
    console.log(lista.includes("pereira"));//irá retornar false, pois não tem pereira na lista.
    //Slice: o slice serve como um "Corte" podendo remover itens da lista pelos primeiros ou ultimos +
    //utilizando apenas um Parâmetro você cortará os valores em forma crescente exemplo (3) os três primeiros serão cortados +
    //utilizando dois Parâmetros desta maneira (0, -2) você cortará em forma decrescente, eliminando os dois ultimos valores da lista.
    var listaCortada = lista.slice(1) // ou (0, -1) para exibir a lista sem o ultimo valor da array
    console.log(listaCortada);
    //Pop: o pop serve pra remover o ultimo elemento da lista
    lista.pop();
    //Map: o map serve para transformação
    listaTransformada = lista.map(function(novaLista){
        //return "<br>" + "laranja"
        return "laranja"; // Fazendo isso todos os elementos se transformarão em "laranja"!
    });
    console.log(listaTransformada);
    //Reverse: irá reverter a ordem dos elementos da lista, entretanto:
    //ao usar essa funcionalidade deve se usar da maneira seguinte, pois se você usar da maneira tradicional:
    //const listaRevertida = lista.reverse(); ele irá atribuir o valor reverso na listaRevertida, mas também irá reverter a lista original!
    const listaRevertida = [...lista].reverse();
    console.log(listaRevertida);
    //forEach percorrer a lista(loop, iterator), tem a mesma funcionalidade do java for(String a : lista);
    //Forma número 1 (pode utilizar mais de um parâmetro):
    lista.forEach(function(item){
        console.log("Indice atual: "+lista.indexOf(item) + " Elemento: " + item)
    });
    //Forma número2:
    lista.forEach(item => {
        console.log("Indice atual: " + lista.indexOf(item) + " Elemento: " + item)
    });
    //Concatenar (fundir) uma lista em outra
    lista = lista.concat(lista2)
    console.log("Nova lista concatenada!\n" + lista)


    //Obs: Diferença entre document e console,
    //Console: é o console da página do qual roda no back-end, pode ser acessado inspecionando o elemento da página + 
    //e navegando até a aba Console
    //Document: document é a parte Front-end, utilizar o document irá interferir na parte visual do site, ex: document.write("a");
    //fazendo isso irá imprimir no site, invés do console!
