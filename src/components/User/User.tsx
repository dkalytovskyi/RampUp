import React from 'react';
import { Input, Row, Button, Checkbox, Typography, Col, Form } from 'antd';

import './styles.css';
  
interface MyFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newsletter: boolean;
}

export function User() {
    const { Title } = Typography;

    const initialValues: MyFormValues = { 
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        newsletter: false
    };

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };

    const tailLayout = {
        wrapperCol: { offset: 4, span: 20 },
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <div className='signUpFormContainer'>
            <div className='centeredContentContainer'>
                <Title level={3}>Sign Up</Title>
            </div>
            <Form
                {...layout}
                name='signup'
                initialValues={initialValues}
                onFinish={onFinish}
            >
                <Input.Group size='large'>
                    <Row gutter={[0, 18]}>
                        <Col span={24}>
                            <Form.Item
                                label='First name'
                                name='firstName'
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[0,18]}>
                        <Col span={24}>
                            <Form.Item
                                label='Last name'
                                name='lastName'
                                rules={[{ required: true, message: 'Please input your last name!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[0, 18]}>
                        <Col span={24}>
                            <Form.Item
                                label='Email'
                                name='email'
                                rules={[
                                    {
                                      type: 'email',
                                      message: 'The input is not valid E-mail!',
                                    },
                                    {
                                      required: true,
                                      message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[0, 18]}>
                        <Col span={24}>
                            <Form.Item
                                label='Password'
                                name='password'
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[0, 18]}>
                        <Col span={24}>
                            <Form.Item name='newsletter' valuePropName="checked" {...tailLayout}>
                                <Checkbox>I want to receive emails from you</Checkbox>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[0, 18]}>
                        <Col span={24}>
                            <Form.Item {...tailLayout}>
                                <Button type='primary' htmlType='submit'>Submit</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Input.Group>
            </Form>
        </div>
    );
}