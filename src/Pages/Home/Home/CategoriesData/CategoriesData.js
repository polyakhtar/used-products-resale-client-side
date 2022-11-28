import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesData = ({category}) => {
    // console.log(category)
    const {name,image,_id}=category;
    return (
        <div className="card bg-blue-50 shadow-xl">
  <figure className="px-10 pt-10">
  <Link to={`/products/${_id}`}>
    <img src={image} alt="Shoes" className="rounded-xl" />
    </Link>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
  </div>
</div>
    );
};

export default CategoriesData;