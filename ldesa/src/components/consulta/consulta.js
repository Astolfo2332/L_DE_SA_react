import "./consulta.css"
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
function Consulta(){

    var datos =
    
        [
             
            {
            _id: "642d9be6a0c5d37bdf42eb8d",
          Descripcion: 'descripcion del barroco ',
          Palabra: 'Barroco',
          video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          Materia: {
            _id:"642d9330a0c5d37bdf42eb5b",
            Materia: 'Historia del Arte',
            Palabras: [  ]
          },
          Carrera: {
            _id: "642d9455a0c5d37bdf42eb64",
            Carrera: 'Artes Plasticas',
            Materias: [
            ]
          },
          Autor: {
            _id: "642d8ffea0c5d37bdf42eb47",
            Nombre: 'Carlos',
            Apellido: 'Velasquez',
            Correo: 'carlos_velasquez@gmail.com',
            Rol: 'Estudiante'
          }
        },
        {
          _id: "642d9ff2a0c5d37bdf42eba5",
          Descripcion: 'definicion de integral ',
          Palabra: 'Integral',
          video: 'https://www.youtube.com/watch?v=UzYgNZlKA4k&list=PLyvsggKtwbLVva0XXvoqx91iaLmhgeNy7&index=2',
          Materia: {
            _id: "642d9316a0c5d37bdf42eb5a",
            Materia: 'Calculo Integral',
            Palabras: [  ]
          },
          Carrera: {
            _id: "642d9897a0c5d37bdf42eb7a",
            Carrera: 'Ingenieria Civil',
            Materias: [
            ]
          },
          Autor: {
            _id: "642d90bba0c5d37bdf42eb4d",
            Nombre: 'Camilo',
            Apellido: 'jaramillo',
            Correo: 'camilo.j@gmail.com',
            Rol: 'Estudiante'
          }
        },
        {
          _id: "642da08ca0c5d37bdf42eba6",
          Descripcion: 'descripcion de resistencia ',
          Palabra: 'Resistencia',
          video: 'https://www.youtube.com/watch?v=4dKuDEWEAmo&list=PLyvsggKtwbLVva0XXvoqx91iaLmhgeNy7&index=3',
          Materia: {
            _id: "642d92bba0c5d37bdf42eb58",
            Materia: 'Circuitos',
            Palabras: [
            ]
          },
          Carrera: {
            _id: "642d9897a0c5d37bdf42eb7a",
            Carrera: 'Ingenieria Civil',
            Materias: [
              
            ]
          },
          Autor: {
            _id: "642d914da0c5d37bdf42eb4e",
            Nombre: 'Juan',
            Apellido: 'Torres',
            Correo: 'Jtorres.j@gmail.com',
            Rol: 'Estudiante'
          }
        },
        {
          _id:"642da287a0c5d37bdf42ebc0",
          Descripcion: 'descripcion del transistor ',
          Palabra: 'Transistor',
          video: 'https://www.youtube.com/watch?v=4dKuDEWEAmo&list=PLyvsggKtwbLVva0XXvoqx91iaLmhgeNy7&index=3',
          Materia: {
            _id: "642d9330a0c5d37bdf42eb5b",
            Materia: 'Historia del Arte',
            Palabras: [ ]
          },
          Carrera: {
            _id: "642d9897a0c5d37bdf42eb7a",
            Carrera: 'Ingenieria Civil',
            Materias: [
              
            ]
          },
          Autor: {
            _id: "642d8ffea0c5d37bdf42eb47",
            Nombre: 'Carlos',
            Apellido: 'Velasquez',
            Correo: 'carlos_velasquez@gmail.com',
            Rol: 'Estudiante'
          }
        },
        {
          _id: "642dcc660164646de827a193",
          Descripcion: 'descripcion de la dos resistencia ',
          Palabra: 'Resistencia',
          video: 'https://www.youtube.com/watch?v=4dKuDEWEAmo&list=PLyvsggKtwbLVva0XXvoqx91iaLmhgeNy7&index=3',
          Materia: {
            _id: "642d9330a0c5d37bdf42eb5b",
            Materia: 'Historia del Arte',
            Palabras: [  ]
          },
          Carrera: {
            _id: "642d9897a0c5d37bdf42eb7a",
            Carrera: 'Ingenieria Civil',
            Materias: [
              
            ]
          },
          Autor: {
            _id: "642d90bba0c5d37bdf42eb4d",
            Nombre: 'Camilo',
            Apellido: 'jaramillo',
            Correo: 'camilo.j@gmail.com',
            Rol: 'Estudiante'
          }
        }
    ]





const [infoPalabra, setInfoPalabra] = useState(null);
var [lisraPalabras, setLisraPalabras] = useState(datos);
var [palabraBuscar, setPalabraBuscar] = useState('');
const [showError, setShowError] = useState(false);
const navigate = useNavigate()


function volver_menu(){
  navigate("/")  
}
function embedYouTubeUrl(url) {
  var videoId = url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  return `https://www.youtube.com/embed/${videoId}`;
}


function buscarPalabra() {
  var palabraBuscada = palabraBuscar;
  
  var palabrasEncontradas = lisraPalabras.find(
    (objetoPalabra) => objetoPalabra.Palabra.toLocaleLowerCase() === palabraBuscada.toLocaleLowerCase()
  );
  
  if (palabrasEncontradas) {
  setInfoPalabra(palabrasEncontradas)
    console.log(palabrasEncontradas.Palabra.Palabra)
  }
  else {
    setShowError(true)
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
      <input type="text" onChange={(e) => setPalabraBuscar(e.target.value)} onKeyDown={(e) => {if (e.key=="Enter") {buscarPalabra()}}} />
      <div className="button"  type="button" onClick={buscarPalabra} >
        <FaSearch /> Buscar 
      </div>
    </div>
    <div>
      {showError && <ErrorPopup />}
    </div>
    <div className="contenedorTotal">
      {lisraPalabras.map((ObjetoPalabra,index)=>(
        <div className="contenedor" key ={index}>
          <div className="ContenedorCursorPalabras" type="button" onClick={() => {setPalabraBuscar(ObjetoPalabra.Palabra); buscarPalabra();}}> 
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
    
        <iframe title="Video" src={embedYouTubeUrl( infoPalabra.video)} FrameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <button className="button" onClick={() => setInfoPalabra(null)}>Cerrar</button>
      </div>
    )}
  </div>
);
    }

export default Consulta 