import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { self_help } from '../../../Data/self_help';

const HomeSectionCarosel = () => {
    const [activeIndex,setACtiveIndex]=useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev=()=>setACtiveIndex(activeIndex-1);
    const slideNext=()=>setACtiveIndex(activeIndex+1)

    const syncActiveIndex=({item})=>setACtiveIndex(item)

    const items = self_help.slice(0,10).map((item)=><HomeSectionCard product={item}/>)
  return (
    <div className='border'>
        <div className='relative p-5'>
            <AliceCarousel
            items={items}
            disableButtonsControls  //tắt điều khiển nút điều hướng
            responsive={responsive}
            disableDotsControls
            onSlideChange={syncActiveIndex}
            activeIndex={activeIndex}
        />
        {activeIndex!== items.length-5 && <Button 
        variant='contained' 
        className='z-50'
        onClick={slideNext}
        sx={{
            position:'absolute', 
            top:'8rem', 
            right:"0rem", 
            transform:"translateX(50%) rotate(90deg)", 
            bgcolor:"white"}} 
            aria-label='next'>
            <ArrowLeftIcon 
            sx={{transform:"rotate(90deg)", color:"black"}}/>
        </Button>}

        {activeIndex !==0 && <Button 
        variant='contained' 
        className='z-50'
        onClick={slidePrev}
        sx={{
            position:'absolute', 
            top:'8rem', 
            left:"0rem", 
            transform:"translateX(-50%) rotate(-90deg)",
            bgcolor:"white"
            }} 
            aria-label='next'>
            <ArrowLeftIcon 
            sx={{
                transform:"rotate(90deg)", 
                color:"black"
                }}/>
        </Button>}
        </div>
    </div>
  )
}

export default HomeSectionCarosel