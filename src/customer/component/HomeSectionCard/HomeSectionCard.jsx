import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white 
    rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border'>

        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' 
                src='https://salt.tikicdn.com/cache/w1200/ts/product/4f/dc/4b/50d89bd168adfab52e43f8b27aec1797.jpg' alt=''/>

        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Thợ Săn Bóng Tối</h3>
            <p className='mt-2 text-sm text-gray-500'>Tiểu Thuyết Trinh Thám</p>

        </div>

    </div>
  )
}

export default HomeSectionCard