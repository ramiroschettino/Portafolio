
export const HabilidadesCard = ({ title, icon, description }) => {
  return (
    <div className="bg-slate-800 hover:bg-slate-700 p-5 hover:-translate-y-2 transition transform rounded-md">
        <div className="text-gray-300 mb-3 text-xl">
            {icon}
        </div>
        <h1 className="font-semibold text-gray-200 text-lg mb-1">{ title }</h1>
        <p className="text-md text-gray-300">{ description }</p>
    </div>
  )
}
