import "./consulta.css"
import { FaSearch } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"


function Consulta(){

const [infoPalabra, setInfoPalabra] = useState(null);
const [lisraPalabras, setLisraPalabras] = useState([]);
const [palabraBuscar, setPalabraBuscar] = useState('');
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
  const regExp1 = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
  const regExp2 = /[?&]list=([^#&?]+)/;
  const match1 = url.match(regExp1);
  const match2 = url.match(regExp2);
  const videoId = match1 && match1[2].length === 11 ? match1[2] : null;
  const playlistId = match2 ? match2[1] : null;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}${playlistId ? `?list=${playlistId}` : ''}`;
  }
}

async function buscarPalabra() {
  setInfoPalabra(null)
  try{
  const respuesta = await fetch('http://localhost:3000/Palabras');
  const data = await respuesta.json();
  var palabrasEncontradas = data.find(
    (objetoPalabra) => objetoPalabra.Palabra.toLocaleLowerCase() === palabraBuscar.toLocaleLowerCase()
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
      <input type="text" value={palabraBuscar} onChange={(e) => setPalabraBuscar(e.target.value)} onKeyDown={(e) => {if (e.key=="Enter") {buscarPalabra()}}} />
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
          <div className="ContenedorCursorPalabras"> 
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