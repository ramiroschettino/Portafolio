export const Footer = () => {
  return (
    <div className="text-gray-300 py-5 text-center flex justify-around bg-slate-800 w-full align-center hover:text-indigo-800">
      <a className="block text-xl md:text-2xl font-semibold" href="#hero">Inicio</a>
      <p className="text-xs mt-2 text-gray-500">© Ramiro Schettino {new Date().getFullYear()}.</p>
    </div>
  )
}
