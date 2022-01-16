import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox, Divider, Row, Col, card, Card, Anchor } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ls from 'localstorage-slim';
const Login = () => {
    const { Link } = Anchor;
    ls.config.encrypt = true;
    const [username, setUsername] = useState();
    const [pass, setPass] = useState();

    const [data, setData] = useState([]);

    let navigate = useNavigate();

    const fun1 = (e) => {
        e.preventDefault();
        console.log(username)
        const params = JSON.stringify({

            "uid": username,
            "password": pass,
            "blocked": 0

        });
        axios
            .post(
                "https://myphysio.digitaldarwin.in/api/login/",
                params,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        //Authorization: localStorage.getItem("token"),
                    },

                }
            )
            .then(function (response) {
                console.log(response)
                setData(response.data);
                // localStorage.setItem("Firstname", response.data.basic_info.first_name);
                // localStorage.setItem("lastname", response.data.basic_info.last_name);
                // localStorage.setItem("mobileno", response.data.basic_info.mobile_no);
                // localStorage.setItem("token", response.data.jwt);

                ls.set("Firstname", response.data.basic_info.first_name);
                ls.set("lastname", response.data.basic_info.last_name);
                ls.set("mobileno", response.data.basic_info.mobile_no);
                ls.set("token", response.data.jwt);
                alert(response.data.message);
                navigate('/dashboard');


            })
            .catch(function (error) {
                console.log(error);
                alert('Invalid Credentials');
                setUsername('');
                setPass('');


            });

    }
    console.log('data is', data);



    return (
        <div>
            <Divider orientation="center">

                {/* <Row justify="center">
                    <Col span={4}> */}
                <Card title="PHYSIOAI" bordered={true} column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }} style={{ "backgroundColor": "#13c2c2" }}>
                    <p>Welcome Back</p>
                    <Form
                        name="basic"
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 20 }}
                        initialValues={{ remember: true }}
                        //onFinish={fun1}
                        //onFinishFailed={onFinishFailed}
                        autoComplete="off"

                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}

                        >
                            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                        </Form.Item>

                        {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}


                        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                            <Button type="primary" htmlType="submit" onClick={fun1} >
                                Login
                            </Button>
                        </Form.Item>

                    </Form>
                </Card>

                {/* </Col>

                </Row> */}
            </Divider>

        </div>
    )
}

export default Login
