Primeiramente você deve criar um arquivo json pra armazenar as informações que você deseja usar

vá na pasta raiz do projeto (uma antes da src) e crie um db.json. Nele você irá criar o seu json pra uso futuro em gets e posts
Exemplo:

{
  "userInfo": [
    {
      "id": 1,
      "username": "Lucas",
      "level": 2,
      "sexo": "masculino"
    },
    {
      "id": 2,
      "username": "Maria",
      "level": 5,
      "sexo": "feminino"
    },
    {
      "id": 3,
      "username": "Matheus",
      "level": 4,
      "sexo": "masculino"
    }
  ]
}

Feito isso, se direcione para o arquivo "package.json" que também fica na raiz do projeto, abra o arquivo e onde tem "scripts"
adicione:    "backend": "json-server --watch db.json --port 5000", tendo que ficar assim:

  "scripts": {
    "start": "react-scripts start",
    "backend": "json-server --watch db.json --port 5000",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

feito isso abra um novo terminal e use o comando: "npm run backend" (o motivo para criar um novo terminal é pra que você consiga hostear
tanto o seu projeto principal e hostear também db.json para gets,posts e etc, fazendo isso você conseguirá criar a conexão na api sendo com
axios ou get

feito isso tudo já estará pronto para uso.

useEffect em termos técnicos: O useEffect é importante porque permite que você execute efeitos colaterais em componentes funcionais do React, como buscar dados em uma API ou atualizar o título da página, garantindo que o código seja executado no momento certo e evitando bugs.
serve para que não busque dados de uma API infinitamente, e sim apenas o necessário
Em sua utilização:
useEffect(() =>{

}, []() // o uso do [] no final do useEffect impedirá que o comando seja solicitado infinitas vezes, solicitando apenas na renderização

caso não usar o ", []" a consulta de dados na api vai ficar rodando infinitamente



useState em termos técnicos: O useState é importante porque permite que você crie e manipule estados em componentes funcionais do React, o que permite que o componente responda a interações do usuário e atualize a interface de acordo com o estado atual. Isso é fundamental para a criação de interfaces dinâmicas e interativas.
uma utilidade que encontrei é usar os dados que foram pegos na api e armazenar em uma váriavel que está fora da promise, exemplo de código:

    const [userInfo, setUserInfo] = useState([]);

axios.get("http://localhost:5000/userInfo") //faz solicitação do json no link
            .then((response)=>{
                setUserInfo(response.data); //Seta no userInfo usando o useState
                //obs: (porque usar o useState?) resposta: pra poder utilizar a variavel que está dentro do get fora do get, sendo no back-end ou no front-end
            })

ele irá setar o que foi consultado pela api usando o setUserInfo(response.data) armazenando no userInfo, tudo graças ao useState