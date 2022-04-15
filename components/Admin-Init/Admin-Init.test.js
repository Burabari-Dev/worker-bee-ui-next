import { render, screen } from '@testing-library/react';
import Init from '../Admin-Init/Admin-Init';
import '@testing-library/jest-dom';

describe('Init', () => {

  beforeEach(() => {
    render(<Init/>);
  })

  it('should render text: "WorkerBee App"', () => {
    const text = screen.getByText("WorkerBee App");
    expect(text).toBeInTheDocument();
  })
  
  it('should have firstName textfield', () => {
    const textField = screen.getByPlaceholderText('First Name');
    expect(textField).toBeInTheDocument();
  })
  
  it('should have lastName textfield', () => {
    const textField = screen.getByPlaceholderText('Last Name');
    expect(textField).toBeInTheDocument();
  })
  
  it('should have email field', () => {
    const emailField = screen.getByPlaceholderText('name@email.com');
    expect(emailField).toBeInTheDocument();
  })
  
  it('should have password field', () => {
    const passwordField = screen.getByPlaceholderText('*****');
    expect(passwordField).toBeInTheDocument();
  })
  
  it('should have create button', () => {
    const button = screen.getByText('Create Account');
    expect(button).toBeInTheDocument();
  })

})
