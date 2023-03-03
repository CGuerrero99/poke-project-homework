import Form from './components/SearchBar/Form';
import ListPokemons from './components/SearchBar/ListPokemons';
import Navbar from './components/Navbar/Navbar';
import MyProvider from './services/provider';
import PokemonFilter from './components/SearchBar/PokemonFilter';
import './App.css';

function App() {
  return (
    <MyProvider>
      <div className='Todo'>
         <Navbar title="PokeApp"/>
          <div className='container'>
          <Form />

        <ListPokemons />
         </div>
      </div>
    </MyProvider>
  );
}

export default App;
