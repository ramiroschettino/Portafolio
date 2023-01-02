export const EstudiosCard = ({ title, establecimiento, fecha, info }) => {
  return (
    <div className="rounded-lg bg-slate-800 w-full p-4">
        <h3 className="text-indigo-600 mb-3 font-bold text-lg">{title}</h3>
        <h1 className="text-gray-300 text-xl mb-3">{ establecimiento }</h1>
        { info && <h4 className="text-gray-300 mb-3">{ info }</h4>}
        <h2 className="text-indigo-600 font-bold">{ fecha }</h2>
    </div>
  )
}
