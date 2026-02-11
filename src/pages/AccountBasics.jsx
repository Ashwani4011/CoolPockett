import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';

function AccountBasics() {
    const {setUserData } = useAuth();

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryOfResidence, setCountryOfResidence] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setUserData(prev => ({
            ...prev,
            fullname,
            email,
            phone,
            cor: countryOfResidence,
            password
        }));
    }, [fullname, email, phone, countryOfResidence, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(prev => ({
            ...prev,
            fullname,
            email,
            phone,
            cor: countryOfResidence,
            password
        }))
    }

    return (
        <div className='mx-1 my-0 p-4 border md:min-h-[80vh] flex flex-col items-center border-gray-400'>
            <ul className='flex flex-row gap-1'>
                <li className=' h-[1vh] w-[1vh]  bg-black rounded-xl'></li>
                <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
                <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
                <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
            </ul>
            <h3 className='font-bold text-2xl mt-4'>CoolPockett</h3>
            <p className='text-lg'>Let's get started</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 md:max-w-[40vw] mb-[20vh] mt-[5vh] w-full'>
                <label htmlFor="Full name">Full name</label>
                <input type="text" placeholder='Enter name'
                    required
                    value={fullname} onChange={(e) => setFullname(e.target.value)}
                    className='p-1  bg-gray-100 border-2 w-full border-gray-200' />
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Enter email'
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    required 
                    className='p-1 bg-gray-100 border-2 w-full border-gray-200' />
                <label htmlFor="Phone">Phone</label>
                <input type="text" placeholder='Enter phone'
                    value={phone} onChange={(e) => setPhone(e.target.value)}
                    required
                    className='p-1  bg-gray-100 border-2 w-full border-gray-200' />
                <label htmlFor="Country of Residence">Country of Residence</label>
                <input type="text" placeholder='select country' required
                    value={countryOfResidence} onChange={(e) => setCountryOfResidence(e.target.value)}
                    className='p-1 bg-gray-100 border-2 w-full border-gray-200' />
                <label htmlFor="Password">Password</label>
                <div className='relative'>
                    <input type={showPassword ? "text" : "password"}   required
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className='p-1 bg-gray-100 border-2 w-full border-gray-200' />
                    <button onClick={() => setShowPassword((prev) => !prev)} className='absolute right-2 top-3 h-2 w-2 border-2 bg-black border-black '></button>
                </div>
                
                <div className='mt-3 h-[1vh] w-full bg-gray-200 border border-gray-200'>
                    <div className='m-0 p-0 w-[40%] bg-black border-2 border-gray-400 '></div>
                </div>
                <label htmlFor="weak" className='m-0 p-0 text-sm'>Weak</label>
            </form>
        </div>
    )
}

export default AccountBasics