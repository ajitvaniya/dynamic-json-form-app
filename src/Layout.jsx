import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-50">
        <Header />
        <main> 
            <Outlet />
        </main>  
      </div>
    </div>
  );
};

export default Layout;
