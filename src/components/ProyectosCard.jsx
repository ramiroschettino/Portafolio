export const ProyectosCard = ({ title, imgUrl, techs, aUrl }) => {
  return (
    <a href={ aUrl }>
      <div className="bg-slate-800 rounded-lg overflow-hidden hover:-translate-y-2 transition transform">
        <img src={ imgUrl } alt={ title } className="w-full h-36 md:h-48 object-cover"/>
        <div className="text-gray-300 p-5 w-full">
          <h3 className="text-lg md:text-lg mb-2 md:mb-3  font-semibold">{ title }</h3>
          <p className="flex flex-wrap flex-row gap-2 items-center justify-start text-xs md:text-sm">{ techs.map( item => 
              <span key={ item } className="px-2 inline-block py-1 bg-slate-900 rounded-md">{ item }</span>
            )}</p>
        </div>
      </div>
    </a>
  )
}

