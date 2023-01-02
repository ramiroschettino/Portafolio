export const HeroSection = () => {
    return (
      <div id="hero" className="flex items-center justify-center flex-col py-20">
          <div className="text-center">
              <h1 className="text-xl md:text-4xl  mb-2 md:mb-4 text-indigo-500 font-semibold ">Hola, soy Ramiro</h1>
              <p className="text-md md:text-xl max-w-md mb-4 md:mb-6 text-gray-300">Desarrollador de software, abierto a aprender nuevas tecnologías.</p>
              <a href="#proyectos" className="inline-block px-8 py-3 border border-transparent text-base font font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">Ver Proyectos</a>
          </div>
      </div>
    )
  }
  