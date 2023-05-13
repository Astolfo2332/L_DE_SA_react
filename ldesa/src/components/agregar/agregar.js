import "./agregar.css"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import datos from  "../consulta/consulta"


function Agregar(){
    var [agregarCarrera, setAgregarCarrera] = useState('');
    var [agregarMateria, setAgregarMateria] = useState('');
    var [agregarPalabra, setAgregarPalabra] = useState('');
    var [agregarDescripcion, setAgregarDescripcion] = useState('');
    var[agregarVideo,setAgregarVideo]=useState('');
    var[showError,setShowError]=useState(false);


    const navigate = useNavigate()
    function volver_menu(){
        navigate("/")  
      }
      function cancelarGuardar(){
        
      }
      function guardarPalabra() {
        var palabraGuardad = agregarPalabra;
        var MateriaGuardad = agregarMateria;
        var CarreraGuardad = agregarCarrera;
        var DescripcionGuardad = agregarDescripcion;
        var VideoGuardad = agregarVideo;
        console.log(palabraGuardad)

        if (palabraGuardad !== "" &&  MateriaGuardad !== "" &&  CarreraGuardad !== "" &&  DescripcionGuardad !== ""&&  VideoGuardad !== ""){
console.log(datos)


        }
    else{
        setShowError(true)
    }
    }
      function ErrorPopup(){
        return (
              <div className="error-popup">
                <p>Para guardar la palabra es necesario llenar todas las casillas.</p>
                <button className="button" type="button" onClick={()=>setShowError(false)}>OK</button>
              </div>
            );
          } 

    return(
        <div>
         <button className="button" type="button" onClick={volver_menu}>volver menu principal</button>
         <div className="iconos">
         
        <p> Agregar Carrera: <input type="text" onChange={(e) => setAgregarCarrera(e.target.value)} /></p>
        <p>Agregar Materia: <input type="text" onChange={(e) => setAgregarMateria(e.target.value)} /></p>
         <p>Agregar Palabra: <input type="text" onChange={(e) => setAgregarPalabra(e.target.value)} /></p>
         <p>Agregar Descripcion: <input type="text" onChange={(e) => setAgregarDescripcion(e.target.value)} /></p> 
         <p>Agregar Video: <input type="text" onChange={(e) => setAgregarVideo(e.target.value)} /></p> 
         </div>
        <div>
        <button className="button" type="button" onClick={guardarPalabra}>Guardar</button>
        <button className="button" type="button" onClick={cancelarGuardar}>Cancelar</button>
        </div>
        <div>{showError && <ErrorPopup/>}</div>

        </div>
    )

}

export default Agregar