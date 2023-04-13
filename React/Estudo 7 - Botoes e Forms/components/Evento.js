
function Evento({nomeBotao}){

    function meuEvento() {
       console.log("Botão acionado: " + nomeBotao); // OU:
       console.log(`Botão acionado: ${nomeBotao}`);
      }

    return(
        <div>
            <p>Clique para ativar o evento: </p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento