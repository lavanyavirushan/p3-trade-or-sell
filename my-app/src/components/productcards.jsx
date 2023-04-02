import React from 'react'

const imgShoes = "https://media.blackandwhite-ff.com/10000/212de84d-76fe-4e1a-8314-b838f87d9eef_tophero.jpg"
const ProductCards = () => {
    return (
    <div className='w-80 p-2 bg-white rounded-lg relative'>
        <div className="img_container p-8 bg-bgGray rounded-lg">
            <img src={imgShoes} alt="img_shoes"/>

        </div>
        <div className="product_info mt-2">
            <h5 className='text-xl font-semibold'>Jordan retro 5's </h5>
            <p className='mt-1 text-slate-400'>Off-white collaboration</p>
            <h6 className='mt-8 font-bold text-lg'>$950</h6>
            
        </div>
      
    </div>
    )
}

export default ProductCards