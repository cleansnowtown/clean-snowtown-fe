import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, Form, Input } from "antd";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onFinish = (values) => {
    // event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    // let body = {
    //   email: Email,
    //   password: Password,
    //   name: Name,
    // };

    // dispatch(registerUser(body))
    //     .then(response => {
    //         if (response.payload.success) {
    //             props.history.push("/login")
    //         } else {
    //             alert("Failed to sign up")
    //         }
    //     })
  };

  return (
    <div>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="이메일"
          name="email"
          value={Email}
          onChange={onEmailHandler}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="이름"
          name="name"
          value={Name}
          onChange={onNameHandler}
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          value={Password}
          onChange={onPasswordHandler}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="비밀번호 확인"
          name="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </Form.Item>
      </Form>

      {/* <form
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />

        <br />
        <button type="submit">회원 가입</button>
      </form> */}
    </div>
  );
}

export default withRouter(RegisterPage);
