import { DataProyectos } from "../data/DataProyectos"
import { ProyectosCard } from "./ProyectosCard"
import { SectionTitle } from "./SectionTitle"

export const Proyectos = () => {
  return (
    <div className="py-12">
      <SectionTitle id="proyectos">Mis proyectos</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {DataProyectos.map( proyecto => 
          <ProyectosCard key={ proyecto.title } {...proyecto}/>
        )}
      </div>
    </div>
  )
}
