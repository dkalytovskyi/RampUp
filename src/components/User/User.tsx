import React, { FC } from 'react';
import { Input, Row, Button, Checkbox, Typography, Col, Form } from 'antd';

import { userFormRules } from '../../constants/userConstants';

import './styles.css';
  
type Props = {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    newsletter?: boolean;
};

type DefaultProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newsletter: boolean;
};

const defaultProps: DefaultProps = { 
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newsletter: true
};

export interface UserFormValues {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    newsletter?: boolean;
};

export interface UserFormRules {
    firstName: Array<Object>;
    lastName: Array<Object>;
    email: Array<Object>;
    password: Array<Object>;
};

const getInitialValues = (props: Props): UserFormValues => {
    return {...props};
}

export const User: FC<Props> = (props) => {
    const { Title } = Typography;

    const formValues = getInitialValues(props);

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
                initialValues={formValues}
                onFinish={onFinish}
            >
                <Input.Group size='large'>
                    <Row gutter={[0, 18]}>
                        <Col span={24}>
                            <Form.Item
                                label='First name'
                                name='firstName'
                                rules={userFormRules.firstName}
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
                                rules={userFormRules.lastName}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[0, 18]}>
                        <Col span={24}>
                            <Form.Item
                                label='E-mail'
                                name='email'
                                rules={userFormRules.email}
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
                                rules={userFormRules.password}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[0, 18]}>
                        <Col span={24}>
                            <Form.Item 
                                name='newsletter' 
                                valuePropName="checked" 
                                {...tailLayout}>
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
};

User.defaultProps = defaultProps;
