import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Avatar } from "antd";
import { LogoutOutlined ,LoginOutlined} from "@ant-design/icons";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link to="/">BlogApp</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 items-center">
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="relative hover:text-yellow-300 transition duration-300 ease-in-out"
                  >
                    <Avatar
              size={30}
              src="https://placehold.co/100x100/png" // Profil resmi için placeholder
              alt="Profile Picture"
              className="border-4 border-blue-500 shadow-md"
            />
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 ease-in-out hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="relative hover:text-yellow-300 transition duration-300 ease-in-out border rounded-lg py-1 px-2"
                  >
                    <LogoutOutlined />
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="relative hover:text-yellow-300 transition duration-300 ease-in-out items-center"
                  >
                    <LoginOutlined /> Login
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
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
