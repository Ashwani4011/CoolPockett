import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Header({ header, backOnHeader, pageNumber }) {
    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        if (pageNumber === 2) {
            navigate("/");
        }
        else if (pageNumber === 3) {
            navigate("/accountsetup");
        }
        else if (pageNumber === 4) navigate("/details");
    }

    return (
        <div className="m-1 mb-0 flex items-center border border-gray-400 px-2 py-3 relative">
            {
                backOnHeader ?
                    <button onClick={handleBack} className="absolute left-2">
                        <IoArrowBack />
                    </button>
                    :
                    <></>
            }
            <h1 className="mx-auto font-bold">
                {header}
            </h1>
        </div>
    )
}

export default Header