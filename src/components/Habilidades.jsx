import { DataHabilidades } from "../data/DataHabilidades"
import { HabilidadesCard } from "./HabilidadesCard"
import { SectionTitle } from "./SectionTitle"


export const Habilidades = () => {
  return (
    <div className="py-12">
      <SectionTitle id="Habilidades">Mis habilidades</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {DataHabilidades.map( item =>
        <HabilidadesCard key={ item.title }  { ...item }/>
      )}</div>
    </div>
  )
}

