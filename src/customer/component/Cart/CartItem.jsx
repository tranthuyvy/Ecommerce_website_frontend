import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>

        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img className='w-full h-full object-cover object-top'
            src='https://salt.tikicdn.com/cache/w1200/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg' 
            alt=''/>

        </div>
        <div className='ml-5 space-y-1'>
          <p className='font-semibold'>Muôn Kiếp Nhân Sinh</p>
          <p className='opacity-70'>Author: Nguyên Phong</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-5">
              <p className="font-semibold">99.000</p>
              <p className="opacity-50 line-through">109.000</p>
              <p className="text-green-600 font-semibold">10% Off</p>
          </div>
        </div>
      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
          <div className='flex items-center space-x-2'>
            <IconButton sx={{color:"#DB6507"}}>
              <RemoveCircleOutlineIcon/>
            </IconButton>
            <span className='py-1 px-7 border rounded-sm'>5</span>
            <IconButton sx={{color:"#DB6507"}}>
              <AddCircleOutlineIcon/>
            </IconButton>
          </div>
          <div>
            <Button sx={{color:"#FF0000"}}>remove</Button>
          </div>
        </div>
    </div>
  )
}

export default CartItem