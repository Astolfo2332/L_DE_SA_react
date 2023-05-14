import "./agregar.css"
import { useNavigate } from "react-router-dom"
import { useState ,useEffect} from 'react'
import { uuidv4 } from '../utils/uuid'



function Agregar(){
    useEffect(() => {
        fetch('http://localhost:3000/Palabras')
          .then((response) => response.json())
          .then((data) => {
            setDatosPalabra(data)
          })
      }, [])
    var [agregarCarrera, setAgregarCarrera] = useState('');
    var [datosPalabra, setDatosPalabra] = useState([]);
    var [agregarMateria, setAgregarMateria] = useState('');
    var [agregarPalabra, setAgregarPalabra] = useState('');
    var [agregarDescripcion, setAgregarDescripcion] = useState('');
    var[agregarVideo,setAgregarVideo]=useState('');
    var[showError,setShowError]=useState(false);
    

    const navigate = useNavigate()
    function volver_menu(){
        navigate("/")  
      }

      function NuevaPalabra() {
        const nuevaPalbara = {
            _id: uuidv4(),
            Descripcion: agregarDescripcion,
            Palabra: agregarPalabra,
            video: agregarVideo,
            Materia: {
              _id:uuidv4(),
              Materia: agregarMateria,
              Palabras: [  ]
            },
            Carrera: {
              _id: uuidv4(),
              Carrera: agregarCarrera,
              Materias: [
              ]
            },
            Autor: {
              _id: "642d8ffea0c5d37bdf42eb47",
              Nombre: "Carlos",
              Apellido: "Velasquez",
              Correo: "carlos_velasquez@gmail.com",
              Rol: "Estudiante"
            }
        }
        fetch('http://localhost:3000/Palabras', {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(nuevaPalbara),}).then(() => {setDatosPalabra([nuevaPalbara, ...datosPalabra])})}  
    
    
    
      function guardarPalabra() {


        var palabraGuardad = agregarPalabra;
        var MateriaGuardad = agregarMateria;
        var CarreraGuardad = agregarCarrera;
        var DescripcionGuardad = agregarDescripcion;
        var VideoGuardad = agregarVideo;    

        if (palabraGuardad !== "" &&  MateriaGuardad !== "" &&  CarreraGuardad !== "" &&  DescripcionGuardad !== ""&&  VideoGuardad !== ""){
            var verificadorPalabra = datosPalabra.find(
                (objetoPalabra) => objetoPalabra.Palabra.toLocaleLowerCase() === palabraGuardad.toLocaleLowerCase() && objetoPalabra.Carrera.Carrera.toLocaleLowerCase() === CarreraGuardad.toLocaleLowerCase() && objetoPalabra.Materia.Materia.toLocaleLowerCase() === MateriaGuardad.toLocaleLowerCase()
              );
              console.log(datosPalabra)
              if (!verificadorPalabra){
                NuevaPalabra()
            }
            else{
                setShowError(true)
            }      
}
else{
    setShowError(true)}
}
    

      function ErrorPopup(){
        return (
              <div className="error-popup">
                <p>Para guardar la palabra es necesario llenar todas las casillas.</p>
                <button className="button" type="button" onClick={()=>setShowError(false)}>OK</button>
              </div>
            );
          } 



          function ErrorPopup2(){
            return (
                  <div className="error-popup">
                    <p>la palabra ingresada ya se encuentra en este aplicativo.</p>
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
        
        </div>
        <div>{showError && <ErrorPopup/>}</div>
        <div>{showError && <ErrorPopup2/>}</div>
        </div>
    )

}

export default Agregar