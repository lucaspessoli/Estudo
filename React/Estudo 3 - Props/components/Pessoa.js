// function Pessoa(props){

    
//     return(
//         <div>
//             <img src={props.foto} alt={props.nome} height={"200px"}/>
//             <h2>Nome da pessoa: {props.nome}</h2>
//             <h2>Idade: {props.idade}</h2>
//             <h2>Profissão: {props.profissao}</h2>
//         </div>

//     )
// }
function Pessoa({foto,nome,idade,profissao}){

    
    return(
        <div>
            <img src={foto} alt={nome} height={"200px"}/>
            <h2>Nome da pessoa: {nome}</h2>
            <h2>Idade: {idade}</h2>
            <h2>Profissão: {profissao}</h2>
        </div>

    )
}

export default Pessoa