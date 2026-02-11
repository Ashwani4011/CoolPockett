import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
function AccountSetUp() {

    const { setUserData } = useAuth();
    const [accountType, setAccountType] = useState("Individual");
    const [productGoal, setProductGoal] = useState("Spend");

    useEffect(() => {
        setUserData(prev => ({
            ...prev,
            accountType,
            productGoal
        }));
    }, [accountType, productGoal]);


    return (
        <div className='mx-1 my-0 p-4 border md:min-h-[80vh] flex flex-col md:items-center   border-gray-400'>
            <div className="m-0 p-0 mb-[40vh] md:min-w-[40vw] ">
                <ul className='flex m-2 flex-row gap-1 justify-center'>
                    <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
                    <li className=' h-[1vh] w-[1vh]  bg-black rounded-xl'></li>
                    <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
                    <li className=' h-[1vh] w-[1vh]  bg-gray-300 rounded-xl'></li>
                </ul>
                <p className='text-xl'>Account Type</p>
                <div className='flex mt-2 mb-4 flex-row w-auto gap-5'>
                    <button onClick={() => setAccountType("Individual")} className=' w-full flex p-8 justify-around border-2 border-gray-200 hover:bg-gray-100 hover:border-black'>Individual</button>
                    <button onClick={() => setAccountType("Business")} className='w-full p-8 flex justify-around  border-2 border-gray-200 hover:bg-gray-100 hover:border-black' >Business</button>
                </div>
                <p className='text-xl'>Product Goal</p>
                <div className="flex flex-col gap-[2vh] py-[2vh] ">
                    <button onClick={() => setProductGoal("Spend")} className="flex justify-center p-1 border-2 border-gray-200 hover:bg-gray-100 hover:border-black">Spend</button>
                    <button onClick={() => setProductGoal("Save")} className="flex justify-center p-1 border-2 border-gray-200 hover:bg-gray-100 hover:border-black">Save</button>
                    <button onClick={() => setProductGoal("Invest")} className="flex justify-center p-1 border-2 border-gray-200 hover:bg-gray-100 hover:border-black">Invest</button>
                </div>
                <p className='text-xl'>Monthly volume</p>
                <div className='mt-2 relative h-[1vh] w-full bg-gray-200 border border-gray-200'>
                    <div className='absolute left-40 p-0 w-2.5 h-2.5 bg-black border border-black rounded-2xl'></div>
                </div>
                <div className="flex justify-between">
                    <p className='text-sm'>Low</p>
                    <p className="text-sm">High</p>
                </div>
            </div>

        </div>
    )
}

export default AccountSetUp