import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Login from '../containers/Login';
import Join from '../containers/Join';
import MyPage from '../containers/MyPage';
import Home from '../containers/Home';

const MyNavbar = () => {
    return (
        <Router>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Team 4Ward</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">스케줄러</Nav.Link>
            <NavDropdown title="회원관리" id="basic-nav-dropdown">
                <NavDropdown.Item href="/join">회원가입</NavDropdown.Item>
                <NavDropdown.Item href="/login">로그인</NavDropdown.Item>
                <NavDropdown.Item href="/mypage">마이페이지</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                    회원탈퇴
                </NavDropdown.Item>
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
        </Router>
    );
}

export default MyNavbar