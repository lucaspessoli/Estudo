import {useEffect, useState} from 'react';
import axios from "axios";


function EstudoSerio(){

    const [userInfo, setUserInfo] = useState([]); //o uso do "[]" significa que estrou iniciliazando uma LISTA vazia
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Inicia o uso como FALSE
    const [nome, setNome] = useState();
    // const [ultimaData, setUltimaData] = useState({}); //o uso do "{}" significa que estou inicializando um OBJETO vazio



    //Método usando AXIOS (biblioteca importada para API)

    async function GetLoginsERegistra(){
        try{
            axios.get("http://localhost:5000/userInfo")
            .then((response)=>{
                const data = response.data 
                const ultimoObjeto = (data[data.length -1]); //armazena o ultimo objeto a variavel ultimoObjeto 
                // setUltimaData(ultimoObjeto); // descomentar caso queira usar fora da função
                const userInfos = {
                    "id": ultimoObjeto.id + 1,
                    "username": nome,
                    "level": 2,
                    "sexo": "masculino"
                }
                axios.post("http://localhost:5000/userInfo",userInfos)
                    .then((response)=>{
                        console.log("conta criada!");
                        console.log(response.data)
                        setShowSuccessMessage(true);
                        axios.get("http://localhost:5000/userInfo")
                            .then((response1) =>{
                                setUserInfo(response1.data);
                            })
                    });

            })
            .catch((err) =>{
                console.log(err); 
            })
        }catch{
            console.log("um erro ocorreu ao fazer solicitações.")
        }

    }
    


    return(
        <div>
            {showSuccessMessage === true ? (
                <p>Post enviado com sucesso!!</p>
            ):(
                <p></p>
            )}
            <div>
            <p>Informe seu nome:</p>
            <input type="text" onChange={e => setNome(e.target.value)}/>
            </div>
            <button onClick={GetLoginsERegistra}>faça o post!</button>
            {showSuccessMessage === true ? (
                <h2>Lista de POSTS:</h2>
            ):(
                <p></p>
            )}
            {userInfo.map(user => ( //percorrendo array pra exibir no front end as informações capturadas através da API
            <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Nome: {user.username}</p>
            </div>
            ))}
        </div>
    )
}

export default EstudoSerio