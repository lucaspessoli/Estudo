//import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() { 

  var nome = "Pedro";
  var foto = "https://img.freepik.com/fotos-gratis/emocoes-positivas-close-up-de-jovem-bonito-homem-de-pele-escura-com-penteado-afro-em-camiseta-branca-e-camisa-vermelha-sorrindo-com-dentes-conversando-com-um-amigo-no-smartphone_176420-13009.jpg?w=2000";

  return ( 
   <div className="App"> 
    {/* <HelloWorld /> */}
    <SayMyName nome="Matheus"/>
    <SayMyName nome="Lucas"/>
    <SayMyName nome={nome} />
    <Pessoa nome="Junior" foto={foto} idade="28" profissao="Dev Pleno" /> {/*OU: */} {/* Não interessa a ordem passada aqui, irá seguir a ordenação lá da função do componente. */} 
    {/* <Pessoa foto={foto}
      nome="Junior"
      idade="28"
      profissao="Dev Pleno" /> */}
   </div>
  );
}

export default App;
