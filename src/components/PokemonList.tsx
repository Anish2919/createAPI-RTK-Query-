import { usePokemonDetailQuery, usePokemonListQuery } from "../app/apiSlice";



const PokemonList = ({ onPokemonSelected, } : {
    onPokemonSelected: (pokemonName: string) => void, 
}) => {

    const { isUninitialized, isLoading, isError, isSuccess, data } = usePokemonListQuery();  

    console.log('data: ', data?.results); 

    // if it is uninitalized or data is not loaded, show please wait message. 
    if(isUninitialized || isLoading) return <p>loading, please wait</p>  

    if(isError) return <p>something went wrong.</p> 

  return (
    <>
        <article>
            <h2>Overview</h2>
            <ol start={1}>
                {data.results.map((pokemon) => (
                    <li key={pokemon.name}>
                        <button onClick={() => onPokemonSelected(pokemon.name)}>
                            { pokemon.name }
                        </button>
                    </li>
                ) )}
            </ol>
        </article>
    </>
  );
}

export default PokemonList;
