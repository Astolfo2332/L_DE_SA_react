import "./contenedor.css"

function Contenedor({ObjetoPalabra}){
    return(
          <div className="contenedor">
            <div className="ContenedorCursorPalabras"> 
              <h1> {ObjetoPalabra.Palabra}</h1>
              <h3> <p>Carrera: {ObjetoPalabra.Carrera.Carrera}</p> <p>Materia: {ObjetoPalabra.Materia.Materia}</p> </h3>
            </div>
          </div>
    )
  }
export default Contenedor