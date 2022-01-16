import React from 'react'
import { Table, Tag, Space, Layout, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react/cjs/react.development';
import ls from 'localstorage-slim';
const { Header, Footer, Sider, Content } = Layout;

const { Column, ColumnGroup } = Table;
const Dashboard = () => {
    const [data, setData] = useState([]);
    ls.config.encrypt = true;

    let navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    useEffect(() => {
        const params = JSON.stringify({

            "id": 1,
        });
        axios
            .post(
                "https://myphysio.digitaldarwin.in/api/get-patient/",
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
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);

            });
    }, [])
    console.log("data is", data);
    // console.log("loc data is",)
    console.log(ls.get('Firstname'));

    const columns = [
        {
            title: "patientcode",
            dataIndex: 'pp_patm_id',
        },
        {
            title: 'Name',
            dataIndex: 'first_name',
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
        },
        {
            title: 'Mobile no',
            dataIndex: 'mobile_no',
        },
    ];
    return (
        <div>
            <Layout>
                <Header>
                    <Button type="danger" style={{ "float": "right", "marginTop": "15px" }} onClick={logout}  >
                        Logout
                    </Button></Header>
                <Content>


                    {/* <Card bordered={true}  > */}
                    {/* 
                    <Descriptions title="User Info" bordered column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }} contentStyle={{ "backgroundColor": "whitesmoke" }} >
                        <Descriptions.Item label="Firstname" span={3}>{localStorage.getItem("Firstname")}</Descriptions.Item>
                        <Descriptions.Item label="Lastname" span={3}>{localStorage.getItem("lastname")}</Descriptions.Item>
                        <Descriptions.Item label="User Mobile no" span={3}>{localStorage.getItem("mobileno")}</Descriptions.Item>
                    </Descriptions> */}
                    {/* </Card> */}
                    <Table columns={columns} dataSource={data} key={data.uid} size="middle" />

                </Content>
            </Layout>
        </div>
    )
}

export default Dashboard
