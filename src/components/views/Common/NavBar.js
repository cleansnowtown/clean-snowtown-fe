import React from "react";
import { Row, Column, Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  { label: <Link to="/">홈</Link>, key: "home" },
  { label: <Link to="/order">배출신청</Link>, key: "order" },
  { label: <Link to="/pickup">수거요청</Link>, key: "pickup" },
  { label: <Link to="/qna">문의사항</Link>, key: "qna" },
  { label: <Link to="/login">로그인</Link>, key: "login" },
  { label: <Link to="/register">회원가입</Link>, key: "register" },
  { label: <Link to="/logout">로그아웃</Link>, key: "logout" },
];

function NavBar() {
  return (
    <div>
      <div className="logo" />
      <Row>
        <Menu theme="dark" mode="horizontal" items={items} />
      </Row>
    </div>
  );
}

export default NavBar;
