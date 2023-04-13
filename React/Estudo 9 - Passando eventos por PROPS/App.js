//import logo from './logo.svg';
import './App.css';
import Evento from './components/eventos/Evento';
import Form from './components/Form';

function App() { 


  return ( 
   <div className="App"> 
    <Evento nomeBotao="Botao Login" />
    <Form />
   </div>
  );
}

export default App;
