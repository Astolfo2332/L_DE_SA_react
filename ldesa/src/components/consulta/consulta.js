import "./consulta.css"
import { FaSearch } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"


function Consulta(){

const [infoPalabra, setInfoPalabra] = useState(null);
var [lisraPalabras, setLisraPalabras] = useState([]);
var [palabraBuscar, setPalabraBuscar] = useState('');
const [showError, setShowError] = useState(false);
const navigate = useNavigate()

useEffect(() => {
  fetch('http://localhost:3000/Palabras')
    .then((response) => response.json())
    .then((data) => {
      setLisraPalabras(data)
    })
}, [])

function volver_menu(){
  navigate("/")  
}
function embedYouTubeUrl(url) {
  var videoId = url.split('v=')[1];
  const donde = videoId.indexOf('&');
  if (donde !== -1) {
    videoId = videoId.substring(0, donde);
  }
  return `https://www.youtube.com/embed/${videoId}`;
}



async function buscarPalabra() {
  setInfoPalabra(null)
  var palabraBuscada = palabraBuscar;
  try{
  const respuesta = await fetch('http://localhost:3000/Palabras');
  const data = await respuesta.json();
  var palabrasEncontradas = data.find(
    (objetoPalabra) => objetoPalabra.Palabra.toLocaleLowerCase() === palabraBuscada.toLocaleLowerCase()
  );  
  if (palabrasEncontradas) {
  setInfoPalabra(palabrasEncontradas)
  setPalabraBuscar("")
  }
  else {
    setShowError(true)
    setPalabraBuscar("")
  }
  } catch (error){
    console.log("Esperando")
  }
}
const handleInput = (event) => {
  setPalabraBuscar(event.target.value);
};
useEffect(() => {
}, [palabraBuscar]);


function ErrorPopup() {
  return (
    <div className="error-popup">
      <p>No se encontraron palabras que coincidan con la búsqueda.</p>
      <button className="button" type="button" onClick={()=>setShowError(false)}>OK</button>
    </div>
  );
} 



return (
  <div className='consulta'>
    <button className="button" type="button" onClick={volver_menu}>volver menu principal</button>
    <div className="icono">
      <input type="text" value={palabraBuscar} onChange={handleInput} onKeyDown={(e) => {if (e.key=="Enter") {buscarPalabra()}}} />
      <button className="button"  type="button" onClick={buscarPalabra} > 
        <FaSearch /> Buscar 
     </button>
     </div>
    <div>
      {showError && <ErrorPopup />}
    </div>
    <div className="contenedorTotal">
      {lisraPalabras.map((ObjetoPalabra,index)=>(
        <div className="contenedor" key ={index}>
          <div className="ContenedorCursorPalabras" type="button" onClick={buscarPalabra}> 
            <h1> {ObjetoPalabra.Palabra}</h1>
            <h3> <p>Carrera: {ObjetoPalabra.Carrera.Carrera}</p> <p>Materia: {ObjetoPalabra.Materia.Materia}</p> </h3>
          </div>
        </div>
      ))}
    </div>
    {infoPalabra && (
      <div className="info-box">
        <h1>{infoPalabra.Palabra}</h1>
        <p>Carrera: {infoPalabra.Carrera.Carrera}</p>
        <p>Materia: {infoPalabra.Materia.Materia}</p>
        <p>Descripcion: {infoPalabra.Descripcion}</p>
    
        <iframe title="Video" src={embedYouTubeUrl( infoPalabra.video)} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <button className="button" onClick={() => setInfoPalabra(null)}>Cerrar</button>
      </div>
    )}
  </div>
);
    }

export default Consulta 