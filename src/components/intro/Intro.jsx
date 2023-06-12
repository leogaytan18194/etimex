import "./intro.scss";

export default function Intro() {


  return (
    <div className="intro" id="intro" style={{ 
      height: '460px',
      backgroundSize: 'cover',
      backgroundImage: `url("https://www.etimex.com/wp-content/uploads/2023/06/banneretimex.png")` }}>
      <div className="left">
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Las etiquetas de nuestras marcas representan sus valores...</h2>
          <h1>su personalidad.</h1>
        </div>
      </div>
    </div>
  );
}
