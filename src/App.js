import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/views/Common/Home";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

import { Layout } from "antd";
import NavBar from "./components/views/Common/NavBar";
const { Header, Footer, Content } = Layout;

const contentStyle = {
  display: "flex",
  // flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

function App() {
  return (
    <Router>
      <div>
        <Layout className="layout">
          <Header>
            <NavBar />
          </Header>
          <Content>
            <div style={contentStyle}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                {/* <Route exact path="/" component={Auth(LandingPage, null )  } /> */}
                {/* <Route exact path="/login" component={Auth(LoginPage, false) } /> */}
                {/* <Route exact path="/register" component={Auth(RegisterPage, false)} /> */}
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>스노우타운 2.0</Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
