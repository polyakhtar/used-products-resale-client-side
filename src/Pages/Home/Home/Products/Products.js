import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';
// import ProductDetails from '../ProductDetails/ProductDetails';


const Products = () => {
const products=useLoaderData();
 console.log(products);
    return (
        <div>
            <h2 className='text-3xl text-center my-2'>Mobiles</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-12'>
                {
                products.map(product=><ProductDetail
                key={product._id}
                product={product}
                ></ProductDetail>)
                }
            </div>
        </div>
    );
};

export default Products;