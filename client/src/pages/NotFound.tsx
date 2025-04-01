import { Button, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
      <Result
        icon={<SmileOutlined />}
        title="Oops! Page Not Found"
        subTitle="The page you are looking for might have been moved or deleted."
        extra={
          <Button type="primary" href="/" className="bg-pink-600 hover:bg-pink-700">
            Go Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
