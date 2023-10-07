import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';  


export const api = createApi({
    reducerPath: 'pokemonApi', 
    baseQuery: fetchBaseQuery({baseUrl:"https://pokeapi.co/api/v2/"}), 
    endpoints: (builder) => ({
        pokemonList: builder.query<PokemonListing, void>({
            query: () => ({
                url: 'pokemon', 
                params: { limit: 9 }, 
                method: 'GET'
            })
        }), 
        pokemonDetail: builder.query<PokemonDetailData, {name:string}>({
            query: ({name}) => `pokemon/${name}`
        })
    })
}); 

export const { usePokemonListQuery, usePokemonDetailQuery } = api;  

