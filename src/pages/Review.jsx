import { useAuth } from '../context/AuthContext';

function Review() {

  const { userData } = useAuth();
  return (
    <div className='mx-1 my-0 p-4 border md:min-h-[80vh] flex flex-col items-center border-gray-400'>
      <ul className='flex flex-row gap-1'>
        <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
        <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
        <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
        <li className=' h-[1vh] w-[1vh]  bg-black rounded-xl'></li>
      </ul>
      <div className='flex flex-col gap-1 m-2 p-2 md:min-w-[40vw]  h-auto'>
        <div className='flex flex-col m-2 gap-0.5 p-2 bg-gray-100 border-2 border-gray-200 hover:border-black hover:bg-gray-200 '>
          <p >Account Basics</p>
          <div className='flex justify-between w-full'>
            <p className='text-gray-600'>Name:</p>
            <p>{userData?.fullname}</p>
          </div>
          <div className='flex justify-between w-full'>
            <p className='text-gray-600'>Email:</p>
            <p>{userData?.email}</p>
          </div><div className='flex justify-between w-full'>
            <p className='text-gray-600'>Phone:</p>
            <p>{userData?.phone}</p>
          </div><div className='flex justify-between w-full'>
            <p className='text-gray-600'>Country:</p>
            <p>{userData?.cor}</p>
          </div>
        </div>
        <div className='flex flex-col m-2 p-2 gap-0.5 bg-gray-100 border-2 border-gray-200 hover:border-black hover:bg-gray-200 '>
          <p>Account Setup</p>
          <div className='flex justify-between w-full'>
            <p className='text-gray-600'>Type:</p>
            <p>{userData?.accountType}</p>
          </div>
          <div className='flex justify-between w-full'>
            <p className='text-gray-600'>Goal:</p>
            <p>{userData?.productGoal}</p>
          </div>
        </div>
        <div className='flex flex-col m-2 p-2 gap-0.5 bg-gray-100 border-2 border-gray-200 hover:border-black hover:bg-gray-200 '>
          <p>Details</p>
          <div className='flex justify-between w-full'>
            <p className='text-gray-600'>DOB:</p>
            <p>{userData?.dob}</p>
          </div>
          <div className='flex justify-between w-full'>
            <p className='text-gray-600'>City:</p>
            <p>{userData?.city}</p>
          </div>
          <div className='flex justify-between w-full'>
            <p className='text-gray-600'>State:</p>
            <p>{userData?.state}</p>
          </div>
        </div>
        <div className='flex flex-col m-2 p-2 gap-0.5 bg-gray-100 border-2 border-gray-200 hover:border-black hover:bg-gray-200 '>
          <p>Account preview</p>
          <p className='text-gray-600'>CoolPockett {userData?.productGoal} ({userData?.accountType})</p>
          <div className='flex gap-1'>
            <span className='font-bold'>.</span>
            <span className='text-gray-600'>Instant spending notifications</span>
          </div>
          <div className=' flex gap-1 w-full'>
            <span className='font-bold'>.</span>
            <span className='text-gray-600'>Budgeting Tools included</span>
          </div>
          <div className='flex gap-1 w-full'>
            <span className='font-bold'>.</span>
            <span className='text-gray-600'>No monthlyfees</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review