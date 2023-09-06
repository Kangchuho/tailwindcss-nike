import React from 'react'

function Button({label, iconUrl}) {
  return (
    // 가로사이즈가 콘텐츠 사이즈보다 넓은것이 아니면 justify- 정렬은 필요없다. 
    <button className={`flex items-center justify-center 
    ${true && `gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    bg-coral-red rounded-full text-white border-coral-red`} `}>
      {label}
      {iconUrl && (<img src={iconUrl} 
        alt='arraw right now'
        className='ml-2 rounded-fulln w-5 h-5'
      />)}
    </button>
  )
}

export default Button