import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link to="/">BlogApp</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="relative hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 ease-in-out hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="relative hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Profile
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 ease-in-out hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="relative hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Login
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 ease-in-out hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="relative hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Register
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 ease-in-out hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
