import { About } from "./components/About"
import { Certificaciones } from "./components/Certificaciones"
import { Footer } from "./components/Footer"
import { Habilidades } from "./components/Habilidades"
import { HeroSection } from "./components/HeroSection"
import { Proyectos } from "./components/Proyectos"
import { Estudios } from "./components/Estudios"
import { Contacto } from "./components/Contacto"



export const Portfolio = () => {
  return (
    <div  className="font-inter bg:white dark:bg-slate-900 dark" >
      <div className="max-w-5xl mx-auto w-11/12">
        <HeroSection/>
        <Habilidades/>
        <Proyectos/>
        <About/>
        <Estudios/>
        <Certificaciones/>
        <Contacto/>
      </div>
      <Footer/>
    </div>
  )
}

