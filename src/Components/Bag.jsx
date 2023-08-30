import { useBag } from '../BagContext';
import typeColor from '../Color';

function Bag() {
    const { bag, setBag } = useBag();

    const removeFromBag = (id) => {
        const updatedBag = bag.filter(item => item.id !== id);
        setBag(updatedBag);
    };
    return (
        <div>
            <h2>Shopping Bag</h2>
            <div id="card">
                {bag?.map((card) => (
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
                        <button id="btn" onClick={()=> removeFromBag(card.id)}>DELETE</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bag;