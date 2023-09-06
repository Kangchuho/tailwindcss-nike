import React from 'react'
import { products } from '../constant'
import {PopularProductCard} from '../components'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12' >
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <sapn className='text-coral-red'>Populer</sapn> Prodects</h2>
        <p className='lg:max-w-lg font-montserrat text-slate-gray'>Experience top_notch quality and style with our sougth-after selections. Discover a world of comfor, design, and value</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product) => {
          return (
            <PopularProductCard 
              key={product.name} 
              {...product}
            />
          )
        })}
      </div>
    </section>
  )
}

export default PopularProducts