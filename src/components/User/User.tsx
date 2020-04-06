import React, { FC } from 'react';
import { Input, Row, Button, Checkbox, Typography, Col, Form } from 'antd';
import { useDispatch } from 'react-redux';

import { signup } from '../../store/actions';

import './styles.css';
  
export interface Props {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newsletter: boolean;
    additionalInfo?: string;
};

export interface UserFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newsletter: boolean;
};

export interface UserFormRules {
    firstName: Array<Object>;
    lastName: Array<Object>;
    email: Array<Object>;
    password: Array<Object>;
};

const userFormRules: UserFormRules = {
    firstName: [{
        required: true, message: 'Please input your first name!'
    }],
    lastName: [{
        required: true, message: 'Please input your last name!'
    }],
    email: [{ 
        required: true, message: 'Please input your E-mail!'
    }, {
        type: 'email', message: 'Invalid E-mail!'
    }],
    password: [{
        required: true, message: 'Please input your password!'
    }],
};

const getInitialValues = (props: Props): UserFormValues => {
    return ({
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        password: props.password,
        newsletter: props.newsletter
    })
}

export const User: FC<Props> = (props) => {
    const dispatch = useDispatch();

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
        const formValues: UserFormValues = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            newsletter: values.newsletter
        }
        dispatch(signup(formValues));
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

User.defaultProps = { 
    additionalInfo: '',
};
