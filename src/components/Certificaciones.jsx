import { DataCertificaciones } from "../data/DataCertificaciones"
import { CertificacionesCard } from "./CertificacionesCard"
import { SectionTitle } from "./SectionTitle"

export const Certificaciones = () => {
  return (
    <div className="py-12">
    <SectionTitle id="certificaciones">Certificaciones</SectionTitle>
      <div className="grid grid-cols-1 gap-5">
        { DataCertificaciones.map( cert =>
          <CertificacionesCard { ...cert } key={ cert.title }/>
        )}
      </div>
    </div>
  )
}
