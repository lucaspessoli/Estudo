//import logo from './logo.svg';
import './App.css';
import OutraLista from './components/OutraLista';

function App() { 

  const meusItens = ["Lucas", "matheus", "Pedro", "ana", "joana", "Maria"];
  // const meusItens = []

  return ( 
   <div className="App"> 
    <OutraLista itens={meusItens} />
    {/* <OutraLista itens={meusItens} /> */}
   </div>
  );
}

export default App;
