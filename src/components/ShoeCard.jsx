import React from 'react'

function ShoeCard({shoe, onPress, bigShoeImg}) {
  return (
    <div className={`border-2 border-gray cursor-pointer rounded-xl
      ${bigShoeImg == shoe.bigShoe ? 'border-coral-red' : 'border-transparent'}
      max-sm:flex-1
    `}
    onClick={() => onPress(shoe.bigShoe)}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4 '>
        <img
          src={shoe.thumbnail}
          alt={"shoe.bigShoe"}
          height={127} 
          width={103}     
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard