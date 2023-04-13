import Produtos from './Produtos';

function List(){

    return(
        <> {/*Fragments: forma de usar Wrap sem usar uma div. */}
        <Produtos nome="Cenoura" />
        <Produtos nome="Beterraba" />
        </>
    )
}

export default List;