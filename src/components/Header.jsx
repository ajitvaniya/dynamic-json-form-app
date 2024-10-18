import { useLocation } from "react-router-dom";
import { paths } from "../constants";

const Header = () => {
    const location = useLocation();
    
    let currentPath = paths.filter((path)=> path.path === location.pathname); 

  return (
    <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{currentPath && currentPath.length>0 ?currentPath[0]?.title: 'Personal'}</h1>
        <div className="flex items-center space-x-4">
        <i className="fas fa-bell"></i>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <span>Full Name</span>
        </div>
    </div>
  );
};

export default Header;
