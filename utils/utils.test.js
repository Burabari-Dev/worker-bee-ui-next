import { validateEmail } from './utils';

describe('validateEmail', () => {
  
  it('should return true for bu@gmail.com', () => {
    var valid = validateEmail('bu@gmail.com');
    expect(valid).toBe(true);
  })
  
  it('should return false for bugmail.com', () => {
    var valid = validateEmail('bugmail.com');
    expect(valid).toBe(false);
  })
  
  it('should return true for bu.kpai@gmail.com', () => {
    var valid = validateEmail('bu.kpai@gmail.com');
    expect(valid).toBe(true);
  })
  
  it('should return false for bu..kpai@gmail.com', () => {
    var valid = validateEmail('bu..kpai@gmail.com');
    expect(valid).toBe(false);
  })
  
  it('should return false for .bu.kpai@gmail.com', () => {
    var valid = validateEmail('.bu.kpai@gmail.com');
    expect(valid).toBe(false);
  })
  
  it('should return false for bu@gmailcom', () => {
    var valid = validateEmail('bu@gmailcom');
    expect(valid).toBe(false);
  })
  
  it('should return false for bu@gmail.co/m', () => {
    var valid = validateEmail('bu@gmail.co/m');
    expect(valid).toBe(false);
  })
  
  it('should return true for bu@gmail.northwesternmutual', () => {
    var valid = validateEmail('bu@gmail.northwesternmutual');
    expect(valid).toBe(true);
  })

})
