export const CertificacionesCard = ({ title, compañia, url, credencial }) => {
  return (
    <div className="rounded-lg bg-slate-800 w-full p-4">
        <h2 className="text-indigo-600 font-semibold mb-2">{ compañia }</h2>
        <h2 className="text-gray-300 text-lg mb-2">{title}</h2>
        <h2 className="text-gray-300 text-base mb-2">{credencial}</h2>
        <a href={ url } target="_blank" className="text-indigo-600 font-semibold mb-2">{ url }</a>
    </div>
  )
}
