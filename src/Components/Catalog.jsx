import { useState, useEffect } from "react";
import typeColor from "../Color";
function Catalog(){
    const [paginaActual, setPaginaActual] = useState(1);
    const [filter, setFilter] = useState(1);
    const [cardData, setCarddata] = useState([]);
    const [url2, setUrl]= useState(`generation/1`);
    const [bag, SetBag]= useState([])

    // CONTROL DE PAGINAS

    const indiceInicio = (paginaActual - 1) * 12;
    const indiceFin = paginaActual * 12;
    const mostrar = cardData.slice(indiceInicio, indiceFin);
    function handlePages(variant){
        if(paginaActual+variant >= 1){
            setPaginaActual(paginaActual + variant)
        }
    }
    //TODA LA  INFO DE LAS TARJETAS ESTA EN CardData;
    function handleType(type){
        if(type== "-1"){
            setFilter(1);
            setUrl(`generation/1`);
            setPaginaActual(1);
        }else{
            setFilter(type);
            setUrl(`type/${type}`);
            setPaginaActual(1); 
        }
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
                            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png`,
                            types: info.types.map((type) => type.type.name),
                            stats: {
                                attack: info.stats[1].base_stat,
                                defense: info.stats[2].base_stat,
                                speed: info.stats[5].base_stat
                            }
                        }
                    })
        
                    setCarddata(card);
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
                    setCarddata(card);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [filter]);
    return(
        <div className="container">
            <div>
                {Object.keys(typeColor).map((key) => (
                    <button key={key} onClick={()=> handleType(key)}>{key}</button>
                ))}
            </div>
            <button onClick={()=> handleType("-1")}>Restablecer</button>
            <div id="card">
                {mostrar?.map((card) => (
                    <div id= "cards" key={card.id} style={{
                        background: `radial-gradient(circle at 50% 0%, ${typeColor[card.types[0]]} 36%, #ffffff 36%)`,}}>
                        <p className="hp">
                            <span>ID: {card.id}</span> 
                        </p>
                        <img src={card.image} />
                        <h2 className="poke-name">{card.name}</h2>
                        <div className="types">
                            {card.types.join(' ')}
                        </div>
                        <div className="stats">
                            <div>
                                <h3>{card.stats.attack}</h3>
                                <p>Attack</p>
                            </div>
                            <div>
                                <h3>{card.stats.defense}</h3>
                                <p>Defense</p>
                            </div>
                            <div>
                                <h3>{card.stats.speed}</h3>
                                <p>Speed</p>
                            </div>
                        </div>
                        <button id="btn" onClick={()=> {SetBag([...bag, card])}}>ADD</button>
                        {console.log(bag)}
                    </div>
                ))}
            </div>
            <div>
                <button id="btn" onClick={()=> {handlePages(1)}}>NEXT</button>
                <button id="btn" onClick={()=> {handlePages(-1)}}>PREV</button>
            </div>
        </div>
    )
}

export default Catalog;