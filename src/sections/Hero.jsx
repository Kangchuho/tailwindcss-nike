import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constant'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { Debounce } from '../components/debounce'



const Hero = () => {
  const [selectShoe, setSelectShoe] = useState(bigShoe1);

  return (
    <>
    <section id='home'
      className={`w-full flex xl:flex-row flex-col justify-center 
      min-h-screen gap-10 max-container
      ${false && 'border-2 border-red-500 p-2 bg-gray-800/10'} `}
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        
        <p className='text-lg font-montserrat text-coral-red'>
          Our Summer Collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold'>
          <span className='pr-10 xl:bg-white xl:whitespace-nowrap relative z-10 rounded-2xl'>The New Arrival</span>
          <br />
          <sapn className='text-coral-red inline-block mt-3'>Nike</sapn> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivels, qualty confort, and innovation for your active life.</p>
        <Button label='Show now' iconUrl={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) =>(
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={selectShoe}
          alt='shoe collection'
          width={610}
          height={500}
          className='object-contain relative z-10'
          />
          <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            {shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard                
                  shoe={shoe} 
                  onPress={(selShoe)=>{
                    setSelectShoe(selShoe);
                  }}
                  bigShoeImg={selectShoe}
               />
              </div>
            ))}
          </div>
      </div>
    </section>
    <div className='w-full flex xl:flex-row flex-col justify-center 
      gap-10 mt-20 mb-0'>
      {/* 0.5초간 입력이 없으면 api검색 수행 */}
      <Debounce/>
    </div>
    </>
  )
}

export default Hero