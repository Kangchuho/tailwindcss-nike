import React from 'react'
import {star} from '../assets/icons'

function PopularProductCard({ imgURL, name, price}) {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img
        src={imgURL} alt={name} className='w-[288px] h-[288px]'
      />  
      <div className='mt-8 flex justify-start gap-2.5 flex-col'>
        <div className='flex flex-row'>
         <img src={star} alt='rating' width={24} height={24} />
         <p className='font-montserrat text-xl leading-normal text-slate-gray '>(4.5)</p>
        </div>
        
         <h3 className=' text-2xl leading-normal font-palanquin'>{name}</h3>
         <p className=' font-semibold font-montserrat text-coral-red text-xl leading-normal'>{price}</p>
        
      </div>
    </div>
  )
}

export default PopularProductCard