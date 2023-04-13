import PropTypes from 'prop-types';

function Produtos({nome, data_Validade}){

    return(
        <ul>
            <li>{nome}, {data_Validade}</li>
        </ul>

    )
}

Produtos.propTypes ={
    // nome: PropTypes.string //Assim você irá exigir que seja passado um string
    nome: PropTypes.string.isRequired, //Assim você irá exigir que o nome seja preenchido
    data_Validade: PropTypes.number //Assim você irá exigir que seja passado um número
}

Produtos.defaultProps ={ //Caso os props não sejam passados na execução do componente os valores serão definidos da forma abaixo como padrão.
    nome: "Nome indefinido!",
    data_Validade: 0
}

export default Produtos