
export async function HandleFetch(url2, filter){
        try {
            //delimitar url final
            const url= `https://pokeapi.co/api/v2/${url2}`
            const response = await fetch(url);
            const jsonData = await response.json();
            if(!isNaN(filter)){
                //filtramos pokemones por nombre, tipo, id, imagen
                const dataPromises = jsonData.pokemon_species.map((pokemon) => fetch(pokemon.url));
                const responses = await Promise.all(dataPromises);
                const jsonDataPromises = responses.map((response) => response.json());
                const cardData = await Promise.all(jsonDataPromises);
                
                const pokemonUrl = cardData.map((pokemon) => fetch(pokemon.varieties[0].pokemon.url));
                const Pokeresponse= await Promise.all(pokemonUrl);
                const jsonDatas= Pokeresponse.map((resp) => resp.json());
                const data= await Promise.all(jsonDatas);
                
                const card= data.map((info) => {
                    return {
                        id: info.id,
                        name: info.name,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png`,
                        types: info.types.map((type) => type.type.name),
                        stats: {
                            attack: info.stats[1].base_stat,
                            defense: info.stats[2].base_stat,
                            speed: info.stats[5].base_stat
                        }
                    }
                })
                return {card}
            }
            else{
                const dataPromises = jsonData.pokemon.map((pokemon) => fetch(pokemon.pokemon.url));
                const responses = await Promise.all(dataPromises);
                const jsonDataPromises = responses.map((response) => response.json());
                const data = await Promise.all(jsonDataPromises);

                const card= data.map((info) => {
                    return {
                        id: info.id,
                        name: info.name,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png`,
                        types: info.types.map((type) => type.type.name),
                        stats: {
                            attack: info.stats[1].base_stat,
                            defense: info.stats[2].base_stat,
                            speed: info.stats[5].base_stat
                        } 
                    }
                })
                return {card};
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
}