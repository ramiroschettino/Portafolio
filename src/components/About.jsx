import { SectionTitle } from "./SectionTitle"

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
        <div className="w-full md:m-6/12">
            <SectionTitle id="about">Sobre mí</SectionTitle>
            <p className="text-md text-gray-300">Mi nombre es Ramiro Schettino, tengo 20 años y vivo en la ciudad de Chacabuco (Buenos Aires).</p>
            <br />
            <p className="text-md text-gray-300">Soy ambicioso y motivado. Constantemente me fijo metas, así tengo algo por lo que esforzarme.</p>
            <a href="mailto:schettinoramiro@gmail.com" className="block mt-3 text-md md-text-lg font-regular text-gray-300 underline hover:text-indigo-500">schettinoramiro@gmail.com</a>

        </div>
        <img src="/assets/rami.jpg" alt="Foto de Ramiro Schettino" className="w-full md:m-6/12 object-cover h-96 rounded-xl"/>
    </div>
  )
}
