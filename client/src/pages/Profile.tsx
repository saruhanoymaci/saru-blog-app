import { Avatar, Button, Card } from "antd";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex justify-center items-start pt-10">
      <Card
        className="w-full max-w-lg shadow-2xl rounded-lg overflow-hidden"
        cover={
          <div className="!flex justify-center bg-white py-6">
            <Avatar
              size={120}
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              className="border-4 border-blue-500 shadow-md"
            />
          </div>
        }
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">John Doe</h2>
          <p className="text-gray-500 mb-6">johndoe@example.com</p>
          <div className="text-left space-y-4 bg-gray-100 p-4 rounded-lg shadow-inner">
            <p>
              <span className="font-semibold text-gray-700">Full Name:</span> John Doe
            </p>
            <p>
              <span className="font-semibold text-gray-700">Date of Birth:</span> January 1, 1990
            </p>
            <p>
              <span className="font-semibold text-gray-700">Place of Birth:</span> Istanbul
            </p>
            <p>
              <span className="font-semibold text-gray-700">Email:</span> johndoe@example.com
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
              Edit Profile
            </Button>
            <Button danger className="bg-red-500 hover:bg-red-600">
              <Link to="/login">Logout</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;