import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext';

function Details() {
  const { userData, setUserData } = useAuth();
  const cor=userData.cor;
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [ssn, setSsn] = useState("");

  useEffect(() => {
    setUserData(prev => ({
      ...prev,
      dob,
      address,
      city,
      postalCode,
      state,
      ssn
    }));
  }, [dob, address, city, postalCode, state, ssn]);

  return (
    <div className='mx-1 my-0 p-4 border md:min-h-[80vh] flex flex-col md:items-center   border-gray-400'>
      <ul className='flex m-2 flex-row gap-1 justify-center'>
        <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
        <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
        <li className=' h-[1vh] w-[1vh]  bg-black rounded-xl'></li>
        <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
      </ul>
      <div className='p-2 mt-2 bg-gray-200 border-2 w-full md:max-w-[40vw] border-gray-200'> Based on : {userData?.accountType} +{userData?.productGoal}  </div>
      <div className='flex flex-col gap-2 md:max-w-[40vw] my-3  w-full'>
        <label>Date of birth</label>
        <input type="date" required
          value={dob} onChange={(e) => setDob(e.target.value)}
          className='p-2 text-gray-500  bg-gray-100 border-2 w-full border-gray-200' />
        <label >Address line 1</label>
        <input type="text" placeholder='Enter address' required
          value={address} onChange={(e) => setAddress(e.target.value)}
          className='p-2  bg-gray-100 border-2 w-full border-gray-200' />
        <label>City</label>
        <input type="text" placeholder='Enter city' required
          value={city} onChange={(e) => setCity(e.target.value)}
          className='p-2  bg-gray-100 border-2 w-full border-gray-200' />
        <label >Postal code</label>
        <input type="text" placeholder='Enter ZIP' required
          value={postalCode} onChange={(e) => setPostalCode(e.target.value)}
          className='p-2 bg-gray-100 border-2 w-full border-gray-200' />

        <div className='mt-3 h-0 w-full bg-gray-200 border-2 border-gray-200'>
        </div>

        {
          cor?.toUpperCase() === "US"
            ? <label className='mt-2'>US-specific</label>
            : cor?.toUpperCase() === "INDIA"
              ? <label className='mt-2'>IN-specific</label>
              : <label className='mt-2'>Other-Country-specific</label>
        }

        <label >State</label>
        <input type="text" placeholder='Select state'
          value={state} onChange={(e) => setState(e.target.value)}
          className='p-2 bg-gray-100 border-2 w-full border-gray-200' />

        {
          cor?.toUpperCase() === "US"
            ? <label>SSN last 4</label>
            : cor?.toUpperCase() === "INDIA"
              ? <label>PAN last 4</label>
              : <label className="mt-2">National ID</label>
        }
        <input type="text" placeholder='....'
          value={ssn} onChange={(e) => setSsn(e.target.value)}
          className='p-2 bg-gray-100 border-2 w-full border-gray-200' />
      </div>
    </div>
  )
}

export default Details