import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  DatePicker,
  Row,
  Col,
  Select,
  message,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { authService } from "../services/authService";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const { Title, Text } = Typography;
const { Option } = Select;

const Register = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);
  const onFinish = async (values: {
    fullName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthPlace: string;
    birthDate: Date;
    gender: "male" | "female" | "other";
  }) => {
    try {
      const response = await authService.register(values);
      message.success("Login successful!");
    } catch (error: any) {
      console.error("Register error:", error);
      message.error(error.response?.data?.message || "Register failed!");
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-700 via-blue-500 to-green-500">
        <Card className="w-full max-w-lg shadow-xl rounded-lg p-6">
          <Title level={2} className="text-center text-blue-600">
            Create an Account
          </Title>
          <Text type="secondary" className="block text-center mb-4">
            Join us today! Fill in the details to sign up.
          </Text>

          <Form name="register" onFinish={onFinish} layout="vertical">
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="fullName"
                  label="Full Name"
                  rules={[
                    { required: true, message: "Please enter your full name!" },
                    {
                      max: 30,
                      message: "Full Name cannot exceed 30 characters!",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="John Doe" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[
                    { required: true, message: "Please enter your username!" },
                    {
                      max: 30,
                      message: "Username cannot exceed 30 characters!",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="johndoe123" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="johndoe@example.com"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="birthPlace"
                  label="Birth Place"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your birth place!",
                    },
                  ]}
                >
                  <Input
                    prefix={<EnvironmentOutlined />}
                    placeholder="Istanbul"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="birthDate"
                  label="Birth Date"
                  rules={[
                    {
                      required: true,
                      message: "Please select your birth date!",
                    },
                  ]}
                >
                  <DatePicker format="DD/MM/YYYY" className="w-full" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    { required: true, message: "Please select your gender!" },
                  ]}
                >
                  <Select placeholder="Select Gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                    {
                      min: 6,
                      message: "Password must be at least 6 characters!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="******"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="******"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Register
              </Button>
            </Form.Item>

            <Text type="secondary" className="block text-center">
              Already have an account? <a href="/login">Login</a>
            </Text>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Register;
