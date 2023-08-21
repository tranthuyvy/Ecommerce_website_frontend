import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://salt.tikicdn.com/cache/w1200/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg"
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
            <p className="font-bold opacity-60">Muôn Kiếp Nhân Sinh</p>
            <p>Kỹ Năng Sống</p>
        </div>
        <div className='flex items-center space-x-2'>

            <p className="font-semibold">97.000</p>
            <p className="line-through opacity-50">109.000</p>
            <p className="text-green-600 font-semibold">10% off</p>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
