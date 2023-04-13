//import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() { 


  return ( 
   <div className="App"> 
    <Evento nomeBotao="Botao Login" />
    <Evento nomeBotao="Botao Registrar" />
    <Form />
   </div>
  );
}

export default App;
