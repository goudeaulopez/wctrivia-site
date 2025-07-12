import fondo from "./assets/fondo.webp"
import prese from "./assets/presentacion.webp"


function App() {
  return (
    <div
      className="app-background"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
     <img src={prese} alt="Imagen centrada" style={{ maxWidth: "80%",height:"auto"}}/>
    </div>
  );
}

export default App;
