import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className='App container'>
      <Form inline className='form container'>
        <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
          <Label className='me-sm-2' for='exampleEmail'>
            Email
          </Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id='exampleEmail'
            name='email'
            placeholder='something@idk.cool'
            type='email'
          />
        </FormGroup>
        <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
          <Label className='me-sm-2' for='examplePassword'>
            Password
          </Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            id='examplePassword'
            name='password'
            placeholder="don't tell!"
            type='password'
          />
        </FormGroup>
        <Button
          onClick={() => {
            console.log(email, password);
          }}
          className='button'
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
