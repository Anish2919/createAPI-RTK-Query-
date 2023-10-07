import { useState } from 'react';
import './App.css'; 
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';



function App() {
  const [selectedPokemon, selectPokemon] = useState<string | undefined>(undefined); 
  return (
    <>
      <header>
        <h1>My Pokemon</h1>
      </header>
      <main>
        {selectedPokemon ? (
          <>
            <PokemonDetails pokemonName={selectedPokemon}/> 
          </>
        ): (
          <>
             <PokemonList onPokemonSelected={selectPokemon}/>
          </>
        )}
      </main>
    </>
  )
}

export default App
