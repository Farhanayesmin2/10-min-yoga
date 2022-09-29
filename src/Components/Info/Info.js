import React from 'react';
import Profile from '../Profile/Profile';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Info = ({ items }) => {

    let times = 0;
   
    for (const item of items) {
        times = times + item.time;
    }

    const notify = () => toast("Successfully Compelete Your Work.");

   

    return (
      <div>

    
  <Profile></Profile>
            {/* Yoga time */}
            <div className='bg-indigo-100 py-5 border-white border-1   hover:border-indigo-600 border-2 my-5'>
            <p className='mx-6'>Yoga Time:   <span className=' ml-8 text-gray-400'> {times} seconds </span> </p>
            </div>
            <div className='my-6'>
                <button onClick={notify} className="btn btn-outline btn-primary w-full mx-1">Activity Completed</button>
                <ToastContainer
position="top-center"
autoClose={6000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}

            </div>
   
            </div>




           

        
    );
};

export default Info;