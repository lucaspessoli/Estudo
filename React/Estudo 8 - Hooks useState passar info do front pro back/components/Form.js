import { useState } from "react";

function Form(){
    
    function CadastrarUsuario(event){
        event.preventDefault(); //Previne que a pagina atualize
        console.log(`Usuario informado: ${user}\nSenha informada: ${password}`)
    }

    const [user, setUser] = useState(); 
    const [password, setPassword] = useState();

    return(
        <div className="App">
            <h1>CADASTRE-SE</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome:"
                    onChange={(event)=> setUser(event.target.value)}/> {/*Armazena o que o usuario digitou na variavel "user" */}
                </div>
                <div>
                    <input type="password" placeholder="Digite sua senha"
                    onChange={(event)=> setPassword(event.target.value)}/> {/*Armazena o que o usuario digitou na variavel "password" */}
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form