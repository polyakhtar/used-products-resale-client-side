import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';


const AddReview = () => {
const {user}=useContext(AuthContext);
const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const feedback = event.target.feedback.value;
    const location=event.target.location.value;
    feedbackAddToDatabase(
      name,
      user?.email,
      user?.photoURL,
      feedback,
      location
      
    );
  };

  const feedbackAddToDatabase = (
    name,
    email,
    photoURL,
    review,
    location
  ) => {
    const feedback = { name, email, photoURL, review,location };
    fetch("https://used-mobile-phone-resale-market-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Review Submit");
        }
      });
  };

    return (
        <div className='py-8 px-2'>
           <h1 className='text-4xl font-bold text-center mb-6'>Give Your Opinion</h1> 
           <div className='my-8 text-center'>
           <form onSubmit={handleSubmit}>
        <div className="form-control w-full mt-5">
          <label className="label">
            <span className="label-text font-bold">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered border-info w-full font-bold"
          />
        </div>
        <div className="form-control w-full mt-5">
          <label className="label">
            <span className="label-text font-bold">Your Location</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="location"
            className="input input-bordered border-info w-full font-bold"
          />
        </div>
        <div className="form-control w-full mt-5">
          <label className="label">
            <span className="label-text font-bold">Add Your Opinion</span>
          </label>
          <textarea
            className="textarea textarea-info w-full h-24 font-bold"
            placeholder="Your opinion"
            name="feedback"
          ></textarea>
        </div>
       <input type='submit' className='btn btn-primary btn-wide my-6' value="Submit"/>
      </form>
           </div>
        </div>
    );
};

export default AddReview;