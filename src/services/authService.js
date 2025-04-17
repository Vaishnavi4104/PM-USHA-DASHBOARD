// src/services/authService.js
export const login = (username, password) => {
    // Mock authentication; replace with real logic
    return new Promise((resolve) => {
      if (username === 'admin' && password === 'admin123') {
        resolve({ user: { role: 'admin' } });
      } else if (username === 'finance' && password === 'finance123') {
        resolve({ user: { role: 'finance' } });
      } else {
        resolve({ error: 'Invalid credentials' });
      }
    });
  };
  
  export const logout = () => {
    // Mock logout
    return Promise.resolve();
  };