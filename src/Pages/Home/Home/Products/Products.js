import ProductDetail from '../ProductDetail/ProductDetail';
import { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import { useParams } from 'react-router-dom';



const Products = () => {
    const {id}=useParams();
    console.log(id)
  const [bookings, setBookings] = useState(null);
  const [products,setProducts]=useState([]);
  console.log(products)
  useEffect(()=>{
    fetch(`https://used-products-resale-server-side-drab.vercel.app/products/${id}`)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        setProducts(data)
    })
},[id])

    return (
        <div className='py-4'>
            <h2 className='text-4xl text-center my-6 font-bold'>Mobiles</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-12'>
                {
                products.map(product=><ProductDetail
                key={product._id}
                product={product}
                setBookings={setBookings}
                ></ProductDetail>)
                }
                {
                  bookings && <BookingModal products={products} bookings={bookings}></BookingModal>
                }
            </div>
        </div>
    );
};

export default Products;