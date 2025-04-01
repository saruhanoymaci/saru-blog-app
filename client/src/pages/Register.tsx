import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Register = () => {
  const onFinish = (values: { fullName: string; email: string; password: string }) => {
    console.log("Success:", values);
    // API isteği burada yapılabilir
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <Card className="w-96 shadow-xl rounded-lg p-6">
        <Title level={2} className="text-center text-blue-600">Create an Account</Title>
        <Text type="secondary" className="block text-center mb-4">
          Join us today! Fill in the details to sign up.
        </Text>
        
        <Form name="register" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[{ required: true, message: "Please enter your full name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" }
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="example@mail.com" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please enter your password!" },
              { min: 6, message: "Password must be at least 6 characters!" }
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="******" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Register
            </Button>
          </Form.Item>

          <Text type="secondary" className="block text-center">
            Already have an account? <a href="/login">Login</a>
          </Text>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
