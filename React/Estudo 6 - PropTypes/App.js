//import logo from './logo.svg';
import './App.css';
import Frase from './components/Frase';
import List from './components/List'

function App() { 

  var nome = "Pedro";
  // var foto = "https://img.freepik.com/fotos-gratis/emocoes-positivas-close-up-de-jovem-bonito-homem-de-pele-escura-com-penteado-afro-em-camiseta-branca-e-camisa-vermelha-sorrindo-com-dentes-conversando-com-um-amigo-no-smartphone_176420-13009.jpg?w=2000";

  return ( 
   <div className="App"> 
    <Frase />
    <List />
   </div>
  );
}

export default App;
