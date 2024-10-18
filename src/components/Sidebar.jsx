import { Link } from "react-router-dom";
import { paths } from "../constants";

const Sidebar = () => {
    
    return (
        <div className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-semibold mb-6">    <Link to="/">Personal</Link></h2>
        <ul className="space-y-4">
            {paths.map((path,i)=>{
                return (
                    <li key={`path_${i}`}>
                        <Link to={path.path} className="flex items-center space-x-2 text-gray-700 hover:text-black">
                        
                            <span>{path.title}</span>
                        </Link>
                    </li>
                )
            })}
          
        </ul>
      </div>
    );
};
  
export default Sidebar;
  