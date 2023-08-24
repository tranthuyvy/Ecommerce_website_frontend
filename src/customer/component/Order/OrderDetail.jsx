import { Grid, Box } from "@mui/material";
import { StarIcon } from '@heroicons/react/outline';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTraker from './OrderTraker';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetail = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-8'>Delivery Address</h1>
            <AddressCard/>
        </div>

        <div className='py-20'>
            <OrderTraker activeStep={3}/>
        </div>

        <Grid container className="space-y-5">
            {[1,1,1,1,1].map((item)=> <Grid item container className="shadow-xl rounded-md p-5 border" 
            sx={{alignItems:"center", justifyContent:"space-between"}}>

                <Grid item xs={6}>
                    <div className="flex items-center space-x-4">
                        <img className="w-[5rem] h-[5rem] object-cover object-top"
                        src="https://salt.tikicdn.com/cache/w1200/ts/product/6a/da/bb/185d27fe442a1668cf0196c1b82c87eb.jpg" 
                        alt="" />

                        <div className="space-y-2 ml-5">
                            <p className="font-semibold">Đắc Nhân Tâm</p>
                            <p className="space-x-5 opacity-50 text-xs font-semibold">Author: Dale Carnegie</p>
                            <p>97.000</p>
                        </div>
                    </div>

                </Grid>
                
                <Grid item>

                    <Box sx={{color:"#DB6507"}}>

                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-2xl'/>
                        <span>Rate $ Review Product</span>

                    </Box>

                </Grid>
            </Grid>)}
            

        </Grid>
        
    </div>
  )
}

export default OrderDetail