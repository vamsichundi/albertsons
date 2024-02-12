import React, {useState} from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import './Login.css';
import albert_bg from '../../assets/images/albert_bg.png';
import albert_logo from '../../assets/images/albert_logo.jpg';

const Login = ({ login, logout }) => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <div>
                <Row>
                    <Col md={8}>
                        <div className='img-bg'>
                            <img className='image' src={albert_bg} alt='' />
                        </div>
                    </Col>
                    <Col md={3}>
                        <Container>
                            <div className='mb-5'>
                                <img className='mt-5 mb-3' src={albert_logo} alt='' />
                                <div className='mt-5'>
                                    <div className='mb-3'>Log in</div>
                                    <div>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="email" placeholder="Email"
                                                value={email} onChange={(e) => setemail(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-4">
                                                <Form.Control type="password" placeholder="Password" 
                                                value={password} onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Button variant="primary" size="sm" onClick={login}>
                                                Log in with Azure
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col md={1}/>
                </Row>
            </div>
        </div>
    )
}

export default Login