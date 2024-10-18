const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Personal</h1>
        <div className="flex items-center space-x-4">
        <i className="fas fa-bell"></i>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <span>Full Name</span>
        </div>
    </div>
  );
};

export default Header;
