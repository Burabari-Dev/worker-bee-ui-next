import { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { validateEmail } from '../../utils/utils';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const handleInputChange = (e, { name, value }) => {
    switch (name) {
      case 'email':
        setValidEmail(validateEmail(value));
        setEmail(value);
        break;
      case 'pass':
        setPass(value);
        break;
      default:
        break;
    }
  }

  return (
    <Grid centered style={{ height: '100vh' }} verticalAlign='middle' >
      <Grid.Column style={{ maxWidth: 350, borderRadius: 8 }} textAlign='center' >

        <p style={{ fontSize: 24, fontWeight: 600, color: 'teal' }}>WorkerBee App</p>

        <Form>
          <Segment raised>

            <Form.Input
              type='email'
              icon={'user'}
              iconPosition='left'
              placeholder='name@email.com'
              name='email'
              value={email}
              onChange={handleInputChange}
              error={!validEmail} />

            <Form.Input
              type='password'
              icon={'lock'}
              iconPosition='left'
              placeholder='******'
              name='pass'
              value={pass}
              onChange={handleInputChange} />

            <Button fluid color='blue' >Sign In</Button>

          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  )
}

export default AdminLogin;
