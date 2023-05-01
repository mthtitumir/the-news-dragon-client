import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = userLocation();
      const from = location.state?.from?.pathname || '/category/0';


    const handleLogIn= event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(form, {replace:true});
        })

        .catch(error=>{
            console.log(error);
        })
        form.reset();

    }

    return (
        <Container className='mx-auto w-25'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button> <br />
                <Form.Text className="text-success">
                    Don't Have an Account? <Link to='/register'>Register Now</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    
                </Form.Text>
                <Form.Text className="text-danger">
                    
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;