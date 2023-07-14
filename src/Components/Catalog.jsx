import { useState, useEffect } from "react";
function Catalog(){
    const [filter, setFilter] = useState(1);
    const [cardData, setCarddata] = useState([]);
    const [url2, setUrl]= useState(`generation/1`);
    
    //TODA LA  INFO DE LAS TARJETAS ESTA EN CardData;
    const handleGen = () => {
        setFilter(filter+1);
        setUrl(`generation/${filter + 1}`);
    }
    const handleType = () => {
        setFilter("water");
        setUrl(`type/water`);
    }
    useEffect(() =>{
        const fetchData = async () => {
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
                            image: info.sprites.front_default,
                            types: info.types.map((type) => type.type.name)
                        }
                    })
        
                    setCarddata(card);
                    console.log(cardData);
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
                            image: info.sprites.front_default,
                            types: info.types.map((type) => type.type.name)
                        }
                    })
                    setCarddata(card);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [filter]);
    
    return(
        <div className="cards">
            {cardData?.map((card) => (
                <li key= {card.name}>{JSON.stringify(card)}</li>
            ))}
            <button onClick={handleGen}>PASS</button>
            <button onClick={handleType}>PASSTYPE</button>
        </div>
    )
}

export default Catalog;