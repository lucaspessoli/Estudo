import { useState } from "react"

function Condicional(){

    function EnviarEmail(e){
        e.preventDefault();
        setUserEmail(email)
        console.log(`E-mail informado: ${email}`);
    }
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function LimparEmail(){
        setUserEmail = "";
    }
    

    return(
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input type="email" placeholder="informe seu e-mail" id="99"
                onChange={(event)=> setEmail(event.target.value)}/>
                <button type="submit" onClick={EnviarEmail}>Enviar e-mail</button>
                {userEmail &&(
                    <div>
                        <h1>{`Bem vindo! ${userEmail}`}</h1>
                        <button onclick={LimparEmail}>Limpar fas</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional