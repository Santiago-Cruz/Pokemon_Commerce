const Footer = () => {
  const developers = [
    {
      name: "Santiago Forero",
      linkedin: "https://www.linkedin.com/in/santiago-forero-cruz-536b39196/",
    },
    {
      name: "Stick Mora",
      linkedin:
        "https://www.linkedin.com/in/jhojan-stick-mora-boh%C3%B3rquez-544763263/",
    },
  ];
  return (
    <footer className="footer">
      <div className="container text-center">
        Desarrollado por{" "}
        {developers.map((developer, index) => (
          <a
            key={index}
            href={developer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {developer.name}
            {index !== developers.length - 1 && " & "}
          </a>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
