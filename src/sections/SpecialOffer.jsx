import React from 'react'
import { offer } from '../assets/images'

const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt='offer' width={224} height={224} />
      </div>

    </section>
  )
}

export default SpecialOffer