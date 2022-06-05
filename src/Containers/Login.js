import React,{useState,useContext} from 'react';
import {Col,Row,Container,Form,Button} from 'react-bootstrap';
import logo from '../logo.png';
import  axios from 'axios';
 import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
 

export default function Login() {
  
  

  const navigate = useNavigate();

  var [role,setRole] = useContext(UserContext);

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
 

 const verified = async (e)=> {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };

    console.log(email);
    console.log(password);



    fetch("http://localhost:4000/api/auth", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.token != null) {         

          localStorage.setItem("user", true);
          localStorage.setItem("role", data.role);
          localStorage.setItem("id",data.id)
          setRole(role= data.role)
          console.log(role)
               
         }

         if (data.role === 'HR') {
          navigate('Hhome');
          }
          else if (data.role === 'Technical') {

            navigate('calendar');
          }
          else if (data.role === 'Admin') {

            navigate('Ahome');
          }
          else if (data.role === 'Team Leader') {
            
            navigate('home');
          }
   

      });


  // const response = await axios.post( "http://localhost:4000/api/auth",{
  //     email : email,
  //     password : password

  //   });


    // console.log(response);

    
    // try {const Compare = comparedPassword}   catch { console.log('Not authorized')

    // };
   
    
   
    
    
  }
  return (
    
    <div> 
      
<Container>
        <Row> 
          
        <Col item xs={12}  md={6}> <img src={logo} alt="logo"/> </Col> 
           <Col item  xs={12}   md={6} id="col1"> 
            <Form onSubmit={verified} id="form" >
  <Form.Group  controlId="formBasicEmail"   >
 
    <h1>Welcome </h1>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"   onChange={(e)=>setEmail(e.target.value)} id="inp" />
  </Form.Group>
<br></br>
  <Form.Group   controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"   onChange={(e)=>setPassword(e.target.value)}  id="inp"/>
  </Form.Group>
  <br></br>
 
  <Button type="submit" id="btn"  > 
            Login  
              </Button>
</Form>
 </Col>
 </Row>
</Container>
    </div>
  )
}
