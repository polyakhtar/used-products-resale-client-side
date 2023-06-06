import { useLoaderData } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// import ProductDetails from '../ProductDetails/ProductDetails';


const Products = () => {
    const product=useLoaderData();

//  console.log(products);
const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState(null);
  const { data: products = [] } = useQuery({
    queryKey: ["products"],

    queryFn: async () => {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/products?id=${product._id}`
      );
      const data = res.json();
      setLoading(false);
      return data;
    },
  });

    return (
        <div className='py-4'>
            <h2 className='text-4xl text-center my-6 font-bold'>Mobiles</h2>
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