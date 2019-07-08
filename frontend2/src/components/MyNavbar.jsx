import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Login from '../containers/customer/Login'
import Join from '../containers/customer/Join'
import MyPage from '../containers/customer/MyPage'
import Home from '../containers/common/Home'
import Hello from '../containers/customer/Hello'
import LightSwitch from '../containers/common/LightSwitch'
import Timer from '../containers/common/Timer'
import TodoApp from '../containers/common/TodoApp'

const MyNavbar = () => {
    return (
        <Router>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Team 4Ward</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/todo">스케줄러</Nav.Link>
            <Nav.Link href="/hello">Hello</Nav.Link>
            <NavDropdown title="기본문법" id="basic-nav-dropdown">
                <NavDropdown.Item href="/switch">SWITCH</NavDropdown.Item>
                <NavDropdown.Item href="/timer">TIMER</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="회원관리" id="basic-nav-dropdown">
                <NavDropdown.Item href="/join">회원가입</NavDropdown.Item>
                <NavDropdown.Item href="/login">로그인</NavDropdown.Item>
                <NavDropdown.Item href="/mypage">마이페이지</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">회원탈퇴</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact component={Home} />
        <Route path="/join" exact component={Join} />
        <Route path="/login" exact component={Login} />
        <Route path="/mypage" exact component={MyPage} />
        <Route path="/hello" exact component={Hello} />
        <Route path="/switch" exact component={LightSwitch} />
        <Route path="/timer" exact component={Timer} />
        <Route path="/todo" exact component={TodoApp} />
        </Router>
    );
}

export default MyNavbar