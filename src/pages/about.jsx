import "./about.css"
const About = () => {
  return (
    <main>
      <h1 className="mt-4">Nuestro Increíble Proyecto Pokémon</h1>
      <div className="container">
        <p className="paragraph"> ¡Bienvenido a nuestra emocionante página de compra de Tarjetas 
        Pokémon! Aquí te contamos todo sobre nuestro proyecto de manera sencilla:</p>
      </div>
      <h2 className="title">¿Qué es nuestro proyecto?</h2>
      <div className="container">
        <p className="paragraph"> Somos una plataforma en línea donde puedes comprar tus tarjetas Pokémon 
          favoritas de manera rápida y divertida.</p>
      </div>
      <h2 className="title">¿Cómo funciona?</h2>
      <div className="container">
        <p className="paragraph">Utilizamos la tecnología React y la increíble PokeAPI para traerte una experiencia 
          excepcional. Puedes explorar una amplia variedad de tarjetas Pokémon y filtrarlas por su 
          tipo, para que encuentres exactamente lo que buscas.</p>
      </div>
      <h2 className="title">Características destacadas:</h2>
      <div className="container">
        <p className="paragraph">
            <li>Filtrado por Tipo: Clasifica los Pokémon según su tipo. ¡Encuentra fácilmente tus tipos favoritos!</li>
            <li>Carrito de Compras: Agrega las tarjetas Pokémon que te gusten a tu carrito de compras.</li>
            <li>Gestión del Carrito: Elimina cualquier tarjeta Pokémon que ya no desees en tu carrito.</li>
            <li>Diseño Especial:
            Nuestro equipo se aseguró de que la página luzca genial. Utilizamos CSS y Bootstrap para crear un diseño atractivo y fácil de navegar.</li>

        </p>
      </div>
      <h2 className="title">¿Por qué elegirnos?</h2>
      <div className="container">
        <p className="paragraph">
          <li>Variedad: Tenemos una amplia selección de tarjetas Pokémon para todos los gustos.</li>
          <li>Facilidad de Uso: Nuestra página es intuitiva y simple de utilizar, incluso si eres nuevo en las compras en línea.</li>
          <li>Pasión: Amamos el mundo Pokémon, y eso se refleja en cada aspecto de nuestro proyecto.</li>
        </p>
      </div>
    </main>
  );
};
export default About;
