const objs = [
    {
        "nome": "Marcos",
        "idade": 20,
        "estudante": true,
        "detalhesProfissao":{
            "profissao": "Dev",
            "empresa": "Google"
        },
        "aulasFavoritas": ["Matemática", "Filosofia", "Sociologia", "Fisica"]
    },
    {
        "nome": "Jorge",
        "idade": 32,
        "estudante": false,
        "detalhesProfissao":{
            "profissao": "Caminhoneiro",
            "empresa": "Caminhao"
        },
        "aulasFavoritas": ["Português", "Filosofia", "Educação Fisica", "História"]
    }
]


objs.forEach((element)=>{ //Exemplo utilizando o JSON criado localmente pra percorrer o array do mesmo.
    console.log("Nome da pessoa: " + element.nome +"\nAulas favoritas: " + element.aulasFavoritas);
    element.aulasFavoritas.forEach((aula)=>{
        console.log(aula);
    });
});


axios.get("test.json") //da mesma forma que você usar as APIS pra resgatar o json dos sites, você consegue resgatar o json da sua pasta do projeto da mesma maneira
    .then((response)=>{ // response é o nome padrão pra coletar os dados, você pode nomear da forma que quiser.
        console.log(response);
    });


axios.get("https://jsonplaceholder.typicode.com/posts") //PlaceHolders são boas opções pra treinar o uso dos JSONS
    .then((response) =>{
        console.log(response);
        const jsonData = JSON.stringify(response); // Converte os dados da lista objs pra uma STRING
        console.log("Convertido pra string: \n"+jsonData);
        const objData = JSON.parse(jsonData); // Converte a string para DADOS JSON pra poderem ser manipulados
        console.log("Convertido de volta para objeto JSON: ")
        console.log(objData);
    });

axios.get("https://jsonplaceholder.typicode.com/users") // Puxa os usuarios do mesmo placeholder de cima
    .then((response)=>{
        console.log(response.data);
    });


const jsonData = JSON.stringify(objs); // Converte os dados da lista objs pra uma STRING

console.log(jsonData);

const objData = JSON.parse(jsonData);// Converte a string para DADOS JSON pra poderem ser manipulados

console.log(objData);
