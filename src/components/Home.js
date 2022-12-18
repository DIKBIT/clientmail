import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const Home = () => {

    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    console.log(email)
    const sendEmail = async(e) =>{
        e.preventDefault();
        

        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            }, body:JSON.stringify({
                email
            })
        });
        const data = await res.json()
        if(data.status === 401 || !data){
            console.log("error")
        } else{
            console.log("Email sent");
            setShow(true);
            setEmail("")
        }

    }
  return (
    <>
    {
        show ? <Alert variant='primary' onClose={() => setShow(false)} dismissible>
        Email Sent Successfully

        </Alert> : " "
    },
        <div className='container mt-2'>
        <div className='d-flex justify-content-center '>
            <h2>Send Email with React & Node js</h2>
        </div>
        <div className='d-flex justify-content-center '>
        <Form className='mt-1 col-lg-6'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Enter your Email address</Form.Label>
        <Form.Control type="email" name ='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
        
          
        
        </Form.Group>

        
        <Button variant="primary" type="submit" onClick={sendEmail} >
        Send
       </Button>
       </Form>
        </div>

        </div>
    </>
  )
}

export default Home