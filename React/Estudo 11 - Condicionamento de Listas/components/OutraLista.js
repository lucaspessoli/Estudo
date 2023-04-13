function OutraLista({itens}){
    return(
        <>
        <h3>Lista de nomes</h3>
        {itens.length > 0 ? ( // realizando condição, se lista for maior que 0 ele executara o que está dentro dos parenteses
        itens.map((element, index)=>( //INDEX: Parametro da função map, do qual irá indicar o indice automaticamente / Recomendado colocar a key dentro do elemento pra que não haja erros!
            <p key={index}>{`Nome: ${element}, posição na fila: ${index}`}</p>
        ))) : ( // no react o "else" seria ":" e no lugar das "{}" é usado "()"
            <p>lista vazia!</p>
        )}
        </>
    )
}

export default OutraLista