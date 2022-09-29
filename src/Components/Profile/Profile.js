import React from 'react';

const Profile = () => {
    return (
        <div>
          <h1 className='text-2xl text-center font-semibold font-serif text-violet-900'>Profile</h1>
                <div  className='flex items-center'>
                
              <div className="avatar online ">
             <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/d4ba1a138166403.Y3JvcCwxOTIwLDE1MDEsMCwyMDk.jpg" />
                                
                    </div>
                
                    </div>
                    <div className='flex-wrap p-5 '>
                    <h1 className='text-lg font-semibold font-serif'>Farhana Yesmin</h1>  
                        <p>Bogura,Bangladesh</p>
                        </div>
                </div> 
               
            {/* Profile info */}
            <div className='flex bg-indigo-100 p-5 border-white border-1   hover:border-indigo-600 border-2 '>
                <div className='px-5 '>
                <h1 className='font-semibold'>55Kg</h1>
                    <h1>Weight</h1>
                </div>
                <div className='px-5 flex-wrap'>
                  <h1 className='font-semibold'>5.3''</h1>
                <h1>Height</h1>
                </div>
                <div className='px-5'>
                    <h1 className='font-semibold'>25</h1>
                <h1>Age</h1>
                </div>

            </div>

                </div>
          
           
   
    );
};

export default Profile;