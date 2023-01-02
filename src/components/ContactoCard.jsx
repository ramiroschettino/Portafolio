export const ContactoCard = ({title, descripcion, icon, url}) => {
  return (
    <div className="bg-slate-800 rounded-lg p-4">
        <div className="text-indigo-600 font-semibold flex items-center mb-2">
            <span className="text-xl mr-2">{ icon }</span>
            <h1>{ title }</h1>
        </div>
        <a className="text-gray-300" href={ url }>{ descripcion }</a>
        
    </div>
  )
}
