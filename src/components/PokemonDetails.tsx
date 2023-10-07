import { usePokemonDetailQuery } from "../app/apiSlice";

const PokemonDetails = ( {pokemonName} : {pokemonName: string} ) => {
    const { isUninitialized, isLoading,isError, data, isSuccess } = usePokemonDetailQuery({ name: pokemonName }) 


    if(isLoading || isUninitialized) return <p>loading, please wait</p>

    if(isError) return <p>Something went wrong.</p> 

  return (
    <>
        <article>
            <h2>{data.name}</h2>
            <img src={data.sprites.front_default} alt={data.name} />
            <ul>
                <li>id: {data.id}</li>
                <li>height: {data.height}</li>
                <li>weight: {data.weight}</li> 
                <li>
                    types: 
                    {data?.types.map(itemType => (
                        <>
                            <span style={{margin: '20px'}}>{itemType.type.name}</span>
                        </>
                    ))}
                </li>
            </ul>
        </article>
    </>
  );
}

export default PokemonDetails;
