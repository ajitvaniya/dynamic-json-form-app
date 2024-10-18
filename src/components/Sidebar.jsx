import { Link } from "react-router-dom";

const Sidebar = () => {
    
    return (
        <div className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-semibold mb-6">    <Link to="/">Personal</Link></h2>
        <ul className="space-y-4">
          <li>
            <Link to="/contact-info" className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <i className="fas fa-phone"></i>
              <span>Contact Information</span>
            </Link>
          </li>
          <li>
            <Link to="/school-info"  className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <i className="fas fa-graduation-cap"></i>
              <span>Schooling Information</span>
            </Link>
          </li>
          <li>
            <Link to="/employment-info"  className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <i className="fas fa-briefcase"></i>
              <span>Employment Details</span>
            </Link>
          </li>
          <li>
            <Link to="/hobbie-contact-info"  className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <i className="fas fa-heart"></i>
              <span>Hobbies and Interests</span>
            </Link>
          </li>
          <li>
            <Link to="/preferred-contact-info"  className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <i className="fas fa-envelope"></i>
              <span>Preferred Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    );
};
  
export default Sidebar;
  