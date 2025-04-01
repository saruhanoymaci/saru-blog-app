import { Form, Input, Button, Card, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Login = () => {
  const onFinish = (values: { email: string; password: string }) => {
    console.log("Success:", values);
    // API isteği burada yapılabilir
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600">
      <Card className="w-96 shadow-xl rounded-lg p-6">
        <Title level={2} className="text-center text-green-700">Welcome Back!</Title>
        <Text type="secondary" className="block text-center mb-4">
          Please login to your account
        </Text>

        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" }
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="example@mail.com" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="******" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-green-600 hover:bg-green-700">
              Login
            </Button>
          </Form.Item>

          <Text type="secondary" className="block text-center">
            Don't have an account? <a href="/register">Sign Up</a>
          </Text>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
