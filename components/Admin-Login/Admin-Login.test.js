import AdminLogin from './Admin-Login';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('AdminLogin', () => {

  it('should render email field', () => {
    const {getByPlaceholderText} = render(<AdminLogin/>);
    const field = getByPlaceholderText(/name@email.com/)
    expect(field).toBeInTheDocument();
  })

  it('should render password field', () => {
    const {getByPlaceholderText} = render(<AdminLogin/>);
    const field = getByPlaceholderText('******');
    expect(field).toBeInTheDocument();
  })

  it('should have error state if bad email entered', async() => {
    const {findByPlaceholderText} = render(<AdminLogin/>);
    
    const field = await findByPlaceholderText(/name@email.com/);
    await userEvent.type(field, 'bugmail.com')
    
    expect(field).toHaveDisplayValue('bugmail.com');
    expect(field).toHaveAttribute('aria-invalid', 'true');
  })

})