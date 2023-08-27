import { useState, useEffect } from "react";
import typeColor from "../Color";
import { HandleFetch } from "../HandleFetch";
import { useBag } from "../BagContext";
import TypeButton from "./ImageButton";

function Catalog() {
  const { bag, setBag } = useBag();
  const [paginaActual, setPaginaActual] = useState(1);
  const [filter, setFilter] = useState(1);
  const [cardData, setCarddata] = useState([]);
  const [url2, setUrl] = useState(`generation/1`);

  // CONTROL DE PAGINAS

  const indiceInicio = (paginaActual - 1) * 12;
  const indiceFin = paginaActual * 12;
  const mostrar = cardData.slice(indiceInicio, indiceFin);
  function handlePages(variant) {
    if (paginaActual + variant >= 1) {
      setPaginaActual(paginaActual + variant);
    }
  }
  //TODA LA  INFO DE LAS TARJETAS ESTA EN CardData;
  function handleType(type) {
    if (type == "-1") {
      setFilter(1);
      setUrl(`generation/1`);
      setPaginaActual(1);
    } else {
      setFilter(type);
      setUrl(`type/${type}`);
      setPaginaActual(1);
    }
  }
  const addToBag = (card) => {
    setBag([...bag, card]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await HandleFetch(url2, filter);
        setCarddata(fetchedData.card);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filter]);
  return (
    <div>
      <div>
        {Object.keys(typeColor).map((key) => (
          <TypeButton key={key} typeKey={key} onClick={handleType} />
        ))}
      </div>
      <button
        className="btn btn-secondary bg-success bg-opacity-50 btn-sm mt-3"
        onClick={() => handleType("-1")}
      >
        Restablecer
      </button>
      <div id="card">
        {mostrar?.map((card) => (
          <div
            id="cards"
            key={card.id}
            style={{
              background: `radial-gradient(circle at 50% 0%, ${
                typeColor[card.types[0]]
              } 36%, #ffffff 36%)`,
            }}
          >
            <div className="row-md-4 mb-4">
              <div>
                <p className="hp">
                  <span>ID: {card.id}</span>
                </p>
                <img src={card.image} />
                <h2 className="poke-name">{card.name}</h2>
                <div className="types">{card.types.join(" ")}</div>
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
                <button
                  className="btn btn-dark btn-outline-ligth"
                  onClick={() => addToBag(card)}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pb-3">
        <button
          className="btn btn-dark btn-outline-ligth mx-2 btn-lg"
          onClick={() => {
            handlePages(-1);
          }}
        >
          <i className="bi bi-box-arrow-in-left"></i>
          PREV
        </button>
        <button
          className="btn btn-dark btn-outline-ligth mx-2 btn-lg"
          onClick={() => {
            handlePages(1);
          }}
        >
          NEXT
          <i className="bi bi-box-arrow-in-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Catalog;
