import './App.css'
import Form from './components/Formulario'
import ListaHistorias from './components/ListaHistorias'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form></Form>
        <ListaHistorias></ListaHistorias>
      </header>
    </div>
  );
}

export default App;
