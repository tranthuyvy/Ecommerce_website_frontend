import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';


const MainCarosel = () => {
    // const navigate = use
    const items = mainCaroselData.map((item)=> 
    <img className='cursor-pointer' role='presentation' src={item.image} alt=""/>)

    
    return (
        <AliceCarousel
            items={items}
            disableButtonsControls  //tắt điều khiển nút điều hướng
            autoPlay                //tự động chuyển màn trong 1s
            autoPlayInterval={1000}
            infinite                //chuyển đổi vô hạn
    />
    )
}

export default MainCarosel;