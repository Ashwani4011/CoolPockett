import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Footer({ pageNumber, isHomePage }) {

    const navigate = useNavigate();
    const { setUserData } = useAuth();

    const handleNext = (e) => {
        e.preventDefault();
        if (pageNumber === 1) {
            navigate("/accountsetup");
        }
        else if (pageNumber === 2) navigate("/details");
        else navigate("/review");

    }

    const handleBack = (e) => {
        e.preventDefault();
        if (pageNumber === 2) {
            navigate("/");
        }
        else if (pageNumber === 3) navigate("/accountsetup");
        else if (pageNumber === 4) navigate("/details");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        prompt("please carefully revieew the data");
        setUserData({});
        navigate("/");
        alert("fill another form if you want");
    }

    return (
        <div className='m-1 mt-0 border border-gray-400 px-2 py-3'>
            <div className='flex justify-center p-1 mt-3'>Step {pageNumber} of 4</div>
            {
                isHomePage ?
                    (pageNumber === 4) ?
                        <div className=" m-2 mb-4 flex justify-center w-auto itmes-center">
                            <div className="flex flex-row gap-2 justify-between md:w-[40vw] w-full m-[1vh]">
                                <button onClick={handleBack} className="text-black w-full text-lg p-4 bg-white border-2 border-gray-800">Back</button>
                                <button onClick={handleSubmit} className="text-white w-full text-lg p-4 bg-black  border-2 border-gray-800 items-center">Submit</button>
                            </div>
                        </div> :
                        <div className=" m-2 mb-4 flex justify-center w-auto itmes-center">
                            <div className="flex flex-row gap-2 justify-between md:w-[40vw] w-full m-[1vh]">
                                <button onClick={handleBack} className="text-black w-full text-lg p-4 bg-white border-2 border-gray-800">Back</button>
                                <button onClick={handleNext} className="text-white w-full text-lg p-4 bg-black  border-2 border-gray-800 items-center">Next</button>
                            </div>
                        </div>
                    :
                    <div className="w-auto m-2 mb-4 flex justify-center itmes-center">
                        <button onClick={handleNext} className="text-white text bg-black p-1 w-full md:max-w-[40vw] border-0 items-center border-black">Next</button>
                    </div>
            }
        </div>
    )
}

export default Footer