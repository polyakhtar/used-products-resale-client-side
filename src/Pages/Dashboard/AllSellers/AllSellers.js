import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const { data: sellers = [], refetch, isLoading } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await fetch('https://used-products-resale-server-side-drab.vercel.app/users/seller', {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`https://used-products-resale-server-side-drab.vercel.app/users/seller/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success('Seller Deleted Successfully');
          refetch();
        }
      });
  };

  const handleVerified = (id) => {
    fetch(`https://used-products-resale-server-side-drab.vercel.app/users/seller/${id}/verify`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success('Seller Verified Successfully');
          refetch();
        } else {
          toast.error('Failed to verify seller');
        }
      })
      .catch((error) => {
        console.error('Error verifying seller:', error);
        toast.error('An error occurred while verifying seller');
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-8 px-4">
      <h2 className="text-4xl mb-6 text-center font-bold">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <th>{seller.name}</th>
                <th>{seller.email}</th>
                <th>
                  {seller.verification === 'verified' ? (
                    <span className="text-green-500">Verified</span>
                  ) : (
                    <button
                      onClick={() => handleVerified(seller._id)}
                      className="btn btn-sm btn-primary"
                    >
                      Verify
                    </button>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
