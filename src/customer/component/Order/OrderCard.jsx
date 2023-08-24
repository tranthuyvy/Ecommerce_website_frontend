import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate=useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-sm shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://salt.tikicdn.com/cache/w1200/ts/product/6a/da/bb/185d27fe442a1668cf0196c1b82c87eb.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Đắc Nhân Tâm</p>
              <p className="opacity-50 text-xs font-semibold">
                Author: Dale Carnegie
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>97.000</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On April 04</span>
              </p>
              <p className="text-xs">
                Your Item Has Been Delivered
                </p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On April 04</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
