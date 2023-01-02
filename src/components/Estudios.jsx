import { DataEstudios } from "../data/DataEstudios"
import { EstudiosCard } from "./EstudiosCard"
import { SectionTitle } from "./SectionTitle"

export const Estudios = () => {
  return (
    <div className="py-12">
      <SectionTitle id="estudios">Estudios</SectionTitle>
      <div className= "grid grid-cols-1 md:grid-cols-2 gap-5">
        {DataEstudios.map( item => 
            <EstudiosCard key={ item.title }{ ...item }/>
        )}
      </div>
    </div>
    
  )
}
