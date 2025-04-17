// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';
import '../assets/css/login.css';
import pmUshaLogo from '../assets/images/pm-usha-logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard/overview');
    }
  }, [currentUser, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      const result = await login(email, password);
      if (result.success) {
        navigate('/dashboard/overview');
      } else {
        setError('Invalid email or password');
      }
    } catch {
      setError('Failed to sign in');
    }
    setLoading(false);
  }

  const setTestCredentials = (email) => {
    setEmail(email);
    setPassword(email.split('@')[0] + '123');
  };

  const roles = [
    { id: 'admin', label: 'Admin', email: 'admin@pmusha.gov.in' },
    { id: 'finance', label: 'Finance Head', email: 'finance@pmusha.gov.in' },
    { id: 'construction', label: 'Construction Head', email: 'construction@pmusha.gov.in' },
    { id: 'equipment', label: 'Equipment Head', email: 'equipment@pmusha.gov.in' },
    { id: 'renovation', label: 'Renovation Head', email: 'renovation@pmusha.gov.in' },
    { id: 'soft', label: 'Soft Components', email: 'soft@pmusha.gov.in' },
    { id: 'guest', label: 'Guest', email: 'guest@pmusha.gov.in' }
  ];

  return (
    <div className="login-page">
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Card className="shadow-lg">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <img 
                  src={pmUshaLogo}
                  alt="PM USHA Logo" 
                  className="mb-3" 
                  style={{ width: '120px' }}
                />
                <h2 className="text-primary fw-bold">PM-USHA Dashboard</h2>
                <p className="text-muted">Please sign in to continue</p>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                  />
                </Form.Group>

                <Button
                  className="w-100 mb-4"
                  type="submit"
                  disabled={loading}
                  variant="primary"
                  size="lg"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
              </Form>

              <div className="text-center">
                <p className="text-muted mb-3">Test Accounts:</p>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {roles.map(role => (
                    <Button
                      key={role.id}
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => setTestCredentials(role.email)}
                    >
                      {role.label}
                    </Button>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Login;