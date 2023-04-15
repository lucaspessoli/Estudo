import {useEffect, useState} from 'react';
import axios from "axios";


function EstudoSerio(){

    const [userInfo, setUserInfo] = useState([]);


    //Método usando fetch (funcionalidade nativa de api do js)
    // useEffect(() =>{
    //     fetch("http://localhost:5000/userInfo", {
    //         method: "GET",
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) =>{
    //             setUserInfo(data);
    //         })
    //         .catch((err) => console.log(err))
    
    // }, [])

    //Método usando AXIOS (biblioteca importada para API)


    useEffect(() =>{ //Percebi que usando o AXIOS é solicitado menos GETS então usarei ele, além de ter uma sintaxe mais simples
        axios.get("http://localhost:5000/userInfo") //faz solicitação do json no link
            .then((response)=>{
                setUserInfo(response.data); //Seta no userInfo usando o useState
                //obs: (porque usar o useState?) resposta: pra poder utilizar a variavel que está dentro do get fora do get, sendo no back-end ou no front-end
            })
            .catch((err) =>{
                console.log(err); //Caso dê algum erro será exibido no console
            })
    }, []) // o uso do [] no final do useEffect impedirá que o comando seja solicitado infinitas vezes, solicitando apenas na renderização


    return(
        <div>
        {userInfo.map(user => ( //percorrendo array pra exibir no front end as informações capturadas através da API
            <div key={user.id}>
            <p>Nome: {user.username}</p>
            <p>Gênero: {user.sexo}</p>
            <p>Nível: {user.level}</p>
            </div>
        ))}
        </div>
    )
}

export default EstudoSerio