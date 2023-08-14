import { useState, useEffect } from "react";
import typeColor from "../Color";
import { HandleFetch } from "../HandleFetch";
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
    function handleBag(card){
        SetBag([...bag, card]);
        console.log(bag);
    }

    useEffect(() =>{

        const fetchData = async () => {
            try {
                const fetchedData = await HandleFetch(url2, filter); 
                setCarddata(fetchedData.card); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

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
                        <button id="btn" onClick={()=> handleBag(card)}>ADD</button>
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