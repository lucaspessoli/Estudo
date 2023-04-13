//import logo from './logo.svg';
import './App.css';

//Parte acima: IMPORTS
function App() { //O que estiver dentro da Function, será executado
//Back End
  var nome = "Lucas";
  var lista = ["matheus", "joao", "cleber"];
  
  function somar(a,b){
    console.log(a+b); //OBS: tudo do console irá aparecer duplicado por conta do StrictMode, pode ser desativado no index.js porém não é recomendado
    return a +b;
  }

  return ( //Front-end
   <div> {/*No react os elementos devem ser Wraped, sendo "embrulhados", um modo de fazer isso é colocando os elementos dentro de uma div */}
    {/* para usar o back-end no front end deve-se usar entre chaves, ex: ao chamar uma variavel use {nomeVariavel} */}
    <h1>{"Olá, meu nome é: " + nome}</h1> {/* Você pode fazer inteiramente no estilo back-end*/}
    <h1>Olá, meu nome é: {nome}</h1> {/*OU intercalar entre front e back end */}
    <p>{somar(1,2)}</p> {/*Chamando uma função */}
   </div>
  );
}
//Parte abaixo: EXPORTS

export default App;
