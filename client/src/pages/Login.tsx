import { Form, Input, Button, Card, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const data = await authService.login(values);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed!"); // Hata bildirimi
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600">
        <Card className="w-96 shadow-xl rounded-lg p-6">
          <Title level={2} className="text-center text-green-700">
            Welcome Back!
          </Title>
          <Text type="secondary" className="block text-center mb-4">
            Please login to your account
          </Text>

          <Form name="login" onFinish={onFinish} layout="vertical">
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="johndoe@example.com"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="******" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Login
              </Button>
            </Form.Item>

            <Text type="secondary" className="block text-center">
              Don't have an account? <a href="/register">Sign Up</a>
            </Text>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
