import { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validateEmail } from '../../utils/utils'


const AdminInit = () => {
  var [firstName, setFirstName] = useState('');
  var [lastName, setLastName] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [validEmail, setValidEmail] = useState(true);

  const handleInputChange = (e, { name, value }) => {
    switch (name) {
      case 'fName':
        setFirstName(value);
        break;
      case 'lName':
        setLastName(value);
        break;
      case 'email':
        setValidEmail( validateEmail(value) );
        setEmail(value);
        break;
      case 'pass':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <Grid centered style={{ height: '100vh' }} verticalAlign='middle' >
      <Grid.Column style={{ maxWidth: 350, borderRadius: 8 }} textAlign='center' >
        <p style={{ fontSize: 24, fontWeight: 600, color: 'teal' }}>WorkerBee App</p>
        <p style={{ fontSize: 18, fontWeight: 500, color: 'teal' }}>Admin Setup</p>
        <Form>
          <Segment raised>

            <Form.Input
              name='fName'
              value={firstName}
              placeholder='First Name'
              onChange={handleInputChange} />

            <Form.Input
              name='lName'
              value={lastName}
              placeholder='Last Name'
              onChange={handleInputChange} />

            <Form.Input
              name='email'
              value={email}
              icon={'mail'}
              iconPosition='left'
              type='email'
              placeholder='name@email.com'
              onChange={handleInputChange}
              error={!validEmail} />

            <Form.Input
              name='pass'
              value={password}
              icon={'lock'}
              iconPosition='left'
              type='password'
              placeholder='*****'
              onChange={handleInputChange} />

            <Button fluid primary >Create Account</Button>

          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default AdminInit;
