import { Avatar, Button, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState<any>(null); // Kullanıcı bilgilerini tutmak için state
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage'dan kullanıcı bilgilerini al
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData)); // JSON stringini parse ederek state'e ata
    } else {
      // Eğer kullanıcı bilgisi yoksa login sayfasına yönlendir
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Logout işlemi
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return null; // Kullanıcı bilgisi yüklenene kadar hiçbir şey gösterme
  }

  return (
    <div className="flex justify-center items-start pt-10">
      <Card
        className="w-full max-w-lg shadow-2xl rounded-lg overflow-hidden"
        cover={
          <div className="!flex justify-center bg-white pt-6">
            <Avatar
              size={120}
              src="https://placehold.co/100x100/png" // Profil resmi için placeholder
              alt="Profile Picture"
              className="border-4 border-blue-500 shadow-md"
            />
          </div>
        }
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{user.username}</h2>
          <div className="text-left space-y-4 bg-gray-100 p-4 rounded-lg shadow-inner">
            <p>
              <span className="font-semibold text-gray-700">Full Name:</span> {user.fullName}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Date of Birth:</span>{" "}
              {new Date(user.birthDate).toLocaleDateString()} {/* Tarihi formatla */}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Place of Birth:</span> {user.birthPlace}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Gender:</span> {user.gender}
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
              Edit Profile
            </Button>
            <Button danger className="bg-red-500 hover:bg-red-600" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;