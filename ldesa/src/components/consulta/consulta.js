import "./consulta.css"
import { FaSearch } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react';

function Consulta(){

    var datos =
    
        [
             
            {
            _id: "642d9be6a0c5d37bdf42eb8d",
          Descripcion: 'descripcion del barroco ',
          Palabra: 'Barroco',
          video: 'https://www.youtube.com/watch?v=AEiRa5xZaZw&list=PLyvsggKtwbLVva0XXvoqx91iaLmhgeNy7',
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






var [lisraPalabras, setLisraPalabras] = useState(datos);
var [palabraBuscar, setPalabraBuscar] = useState('');


function handleClick() {
  console.log(lisraPalabras);
}


function buscarPalabra() {
  var palabraBuscada = palabraBuscar;
  var palabrasEncontradas = lisraPalabras.filter(
    (objetoPalabra) => objetoPalabra.Palabra === palabraBuscada
  );
  console.log(palabrasEncontradas[0].Palabra)

  var na = (lisraPalabras.filter((objetoPalabra) => objetoPalabra.Palabra !== palabrasEncontradas[0].Palabra));

  const actualizacionLista = [palabrasEncontradas[0], ...na];
  setLisraPalabras(actualizacionLista);
}
  
    

    return(
        <div className='consulta'>
            <button className="consulta button" type="button"onClick={handleClick}>validar</button> 
            <div className="icono">
                    <input type="text" onChange={(e) => setPalabraBuscar(e.target.value)}/>
                    <div className="button" onClick={buscarPalabra} >
                     <FaSearch /> Bucar 
                     </div>
        </div>
            <span className="volver">volver menu principal</span>
            <div>
                {
                lisraPalabras.map((ObjetoPalabra,index)=>(
                
                <div className="contenedor" key ={index}>
                     
                    <div className="ContenedorCursorPalabras" onClick={handleClick}> 
                    <h1> {ObjetoPalabra.Palabra}</h1>
                    <h3> <p>Carrera: {ObjetoPalabra.Carrera.Carrera}</p> <p>Materia: {ObjetoPalabra.Materia.Materia}</p> </h3>
                     </div>

                </div>
                     
                ))}
            </div>
            
        </div>)}

export default Consulta 