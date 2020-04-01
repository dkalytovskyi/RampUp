import React from 'react';
import { Input, Row, Button, Checkbox, Typography, Col } from 'antd';
import { Formik, Form } from 'formik';

import './styles.css';
  
interface MyFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newsletter: boolean;
}

export function User() {
    const { Title, Text } = Typography;

    const initialValues: MyFormValues = { 
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        newsletter: false
    };

    return (
        <div className='signUpFormContainer'>
            <div className='centeredContentContainer'>
                <Title level={3}>Sign Up</Title>
            </div>
            <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                console.log(values, actions);
                alert(JSON.stringify(values, null, 2));
            }}
            >
            {props => (
                <Form>
                    <Input.Group size='large'>
                        <Row gutter={[0, 18]}>
                            <Col span={24}>
                                <Input 
                                    onChange={props.handleChange}
                                    value={props.values.firstName}
                                    name='firstName'
                                    onBlur={props.handleBlur}
                                    placeholder='First name'
                                />
                            </Col>
                        </Row>
                        <Row gutter={[0,18]}>
                            <Col span={24}>
                                <Input 
                                    onChange={props.handleChange}
                                    value={props.values.lastName}
                                    name='lastName'
                                    onBlur={props.handleBlur}
                                    placeholder='Last name'
                                />
                            </Col>
                        </Row>
                        <Row gutter={[0, 18]}>
                            <Col span={24}>
                                <Input 
                                    onChange={props.handleChange}
                                    value={props.values.email}
                                    name='email'
                                    onBlur={props.handleBlur}
                                    placeholder='Email'
                                />
                            </Col>
                        </Row>
                        <Row gutter={[0, 18]}>
                            <Col span={24}>
                                <Input.Password
                                    onChange={props.handleChange}
                                    value={props.values.password}
                                    name='password'
                                    onBlur={props.handleBlur}
                                    placeholder='Password'
                                />
                            </Col>
                        </Row>
                        <Row gutter={[0, 18]}>
                            <Col span={12} offset={6}>
                                <div className='centeredContentContainer'>
                                    <Checkbox
                                        onChange={props.handleChange}
                                        checked={props.values.newsletter}
                                        name='newsletter'
                                    />
                                    <Text style={{marginLeft: '5px'}}>I want to receive emails from you</Text>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[0, 18]}>
                            <Col span={12} offset={6}>
                                <div className='centeredContentContainer'>
                                    <Button type='primary' htmlType='submit'>Submit</Button>
                                </div>
                            </Col>
                        </Row>
                    </Input.Group>
                </Form>
            )}
            </Formik>
        </div>
    );
}