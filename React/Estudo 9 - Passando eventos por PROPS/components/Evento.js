import Button from './Button';

function Evento({nomeBotao}){

    function meuEvento() {
        console.log("evento ativado!")

      }

    return(
        <div>
            <p>Clique para ativar o evento: </p>
            <Button event={meuEvento} text="bosta" />
        </div>
    )
}

export default Evento