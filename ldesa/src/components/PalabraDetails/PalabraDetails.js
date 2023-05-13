import { useParams } from "react-router-dom"
import Consulta from "../consulta/consulta"
function PalabraDetails() {

    const { Palabraid } = useParams()
  
    return (
      <>
        <consulta con={Consulta}></consulta>
      </>
    )
  }
  
  export default PalabraDetails