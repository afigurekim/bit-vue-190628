import React, { Component } from 'react';
import { Figure, Table, Button } from 'react-bootstrap';
import myimage from '../../assets/img/mypage.png';

class MyPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            customerId: '',
            password: '',
            customerName: '',
            phone: '',
            city: ''
        }
    }
    render(){
        return(
            <div>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={myimage}
                    />
                    <Figure.Caption>
                        My Page
                    </Figure.Caption>
                </Figure>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td colSpan="2" rowSpan="2">1</td>
                            <td>ID</td>
                            <td>hong</td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>홍길동</td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td colSpan="3">02-000-0000</td>
                        </tr>
                        <tr>
                            <td>주소(도시)</td>
                            <td colSpan="3">서울 종로구</td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="info">수 정</Button>
                <Button variant="danger">삭 제</Button>
                <Button variant="secondary">돌아가기</Button>
            </div>
        );
    }
}
export default MyPage;