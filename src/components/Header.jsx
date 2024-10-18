import { useLocation } from "react-router-dom";
import { paths } from "../constants";

const Header = () => {
    let applicantData = localStorage.getItem('applicantDetails') ? JSON.parse(localStorage.getItem('applicantDetails')) : null

    const location = useLocation();

    let currentPath = paths.filter((path) => path.path === location.pathname);


    const clearData =()=>{
        localStorage.clear();
        
    }

    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">{currentPath && currentPath.length > 0 ? currentPath[0]?.title : 'Personal'}</h1>
            <div className="flex items-center space-x-4">
                {applicantData && <button
                    className={`bg-black text-white py-2 px-4 rounded-md `}
                    onClick={()=>clearData()}
                >
                    Clear
                </button>}
                <img src={localStorage.getItem('profilePhoto') ? localStorage.getItem('profilePhoto') : null} alt="Profile" style={{ width: '60px', height: '60px', borderRadius: '60px' }} />
                <span>{applicantData ? applicantData.fullName : 'Full Name'} </span>
            </div>
        </div>
    );
};

export default Header;
