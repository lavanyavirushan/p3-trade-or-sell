import React from 'react'

const imgShoes = "https://media.blackandwhite-ff.com/10000/212de84d-76fe-4e1a-8314-b838f87d9eef_tophero.jpg"
const ProductCards = () => {
    return (
    <div className='w-80 p-2 bg-white rounded-lg'>
        <div className="img_container">
            <img src={imgShoes} alt="img_shoes"/>

        </div>
        <div className="product_info">
            <h5>Product Name</h5>
            <p>Product Description</p>
            <span>Price</span>
        </div>
    </div>
    )
}

export default ProductCards