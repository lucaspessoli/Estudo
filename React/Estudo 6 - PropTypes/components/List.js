import Produtos from './Produtos';

function List(){

    return(
        <> {/*Fragments: forma de usar Wrap sem usar uma div. */}
        <Produtos nome="Cenoura" data_Validade={2023} />
        <Produtos nome="Beterraba" data_Validade={2024} />
        <Produtos />
        </>
    )
}

export default List;