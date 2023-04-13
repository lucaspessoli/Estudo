function Form(){
    
    function CadastrarUsuario(event){
        event.preventDefault(); //Previne que a pagina atualize
        console.log("Usuario cadastrado!")
    }

    return(
        <div className="App">
            <h1>CADASTRE-SE</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome:"/>
                </div>
                <div>
                    <input type="password" placeholder="Digite sua senha"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form