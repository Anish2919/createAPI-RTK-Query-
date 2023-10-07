interface PokemonListing {
    count: number; 
    results: Array<{
        name: string;  
        url: string; 
    }>; 
} 

interface PokemonDetailData {
    id: number; 
    name: string; 
    height: number; 
    weight: number; 
    types: Array<{
        slog: number; 
        type: {
            name: string; 
            url: string; 
        }
    }>; 
    sprites: {
        front_default: string; 
    }
}

// This is using type 
// export type OnPokemonSelected = (pokemonName: string) => void;  

/** This is using interface */
interface OnPokemonSelected {
    (pokemonName: string): void; 
}


