import React from 'react'
import { DataContacto } from '../data/DataContacto'
import { ContactoCard } from './ContactoCard'
import { SectionTitle } from './SectionTitle'


export const Contacto = () => {
  return (
    <div className='py-12'>
      <SectionTitle>Contacto</SectionTitle>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        { DataContacto.map( item => 
          <ContactoCard key={ item.title } {...item}/>
        )}
      </div>
    </div>
  )
}
