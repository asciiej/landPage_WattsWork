import logo from './logo.svg';
import './App.css';
import Rodape from './components/Rodape/Rodape';
import Parceiros from './components/Parceiros/Parceiros';
import Orcamento from './components/Orcamento/Orcamento';

function App() {
  return (
    <div className="App">
      <Orcamento />
      <Parceiros />
      <Rodape />
    </div>
  );
}

export default App;
