import "./TypeButton.css"; // Importamos el archivo de estilos

// Objeto con enlaces a las imágenes según la clave
const typeImages = {
  bug: "https://img.rankedboost.com/wp-content/uploads/2019/11/Bug-Type-Pokemon-Sword-and-Shield.png",
  dragon:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Dragon-Type-Pokemon-Sword-and-Shield.png",
  electric:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Electric-Type-Pokemon-Sword-and-Shield.png",
  fairy:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Fairy-Type-Pokemon-Sword-and-Shield.png",
  fighting:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Fighting-Type-Pokemon-Sword-and-Shield.png",
  fire: "https://img.rankedboost.com/wp-content/uploads/2019/11/Fire-Type-Pokemon-Sword-and-Shield.png",
  flying:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Flying-Type-Pokemon-Sword-and-Shield.png",
  grass:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Grass-Type-Pokemon-Sword-and-Shield.png",
  ground:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Ground-type-Pokemon-Sword-and-Shield.png",
  ghost:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Ghost-Type-Pokemon-Sword-and-Shield.png",
  ice: "https://img.rankedboost.com/wp-content/uploads/2019/11/Ice-Type-Pokemon-Sword-and-Shield.png",
  normal:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Normal-Type-Pokemon-Sword-and-Shield.png",
  poison:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Poison-Type-Pokemon-Sword-and-Shield.png",
  psychic:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Psychic-Type-Pokemon-Sword-and-Shield.png",
  rock: "https://img.rankedboost.com/wp-content/uploads/2019/11/Rock-type-Pokemon-Sword-and-Shield.png",
  water:
    "https://img.rankedboost.com/wp-content/uploads/2019/11/Water-Type-Pokemon-Sword-and-Shield.png",
};

// eslint-disable-next-line react/prop-types
const TypeButton = ({ typeKey, onClick }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${typeImages[typeKey]})`,
  };

  return (
    <button
      className="type-button"
      style={backgroundImageStyle}
      onClick={() => onClick(typeKey)}
      onTouchMove={typeKey}
    ></button>
  );
};

export default TypeButton;
