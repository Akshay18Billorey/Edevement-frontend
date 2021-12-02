import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Label } from 'reactstrap';
class Login extends Component {
    constructor() {
        super();

        this.state = {
            Username: '',
            Password: ''
        }

        this.Password = this.Password.bind(this);
        this.Username = this.Username.bind(this);
        this.login = this.login.bind(this);
    }

    Username(event) {
        this.setState({ Username: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(event) {
        fetch('http://localhost:8081/user-search', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: this.state.Username,
                password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                if (result === null)
                    alert('Invalid User');
                else
                    this.props.history.push("/Quiz");
            })
    }

    render() {

        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Form>
                                <div className="container text-center"><h2>
                                    Sign In
                                </h2></div>
                                <Label>Username</Label>
                                <Input className="mb-4" type="text" onChange={this.Username} placeholder="Enter Username" />
                                <Label>Password</Label>
                                <Input className="mb-4" type="password" onChange={this.Password} placeholder="Enter Password" />
                                <Row>
                                    <Col md="4">
                                        <Button onClick={this.login} color="primary" block>Sign In</Button>
                                    </Col>
                                    <Col md="8"></Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;