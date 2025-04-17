import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { useData } from '../../contexts/DataContext';

const RenovationDashboard = () => {
  // Sample data - replace with actual data from your DataContext
  const renovationProjects = [
    {
      id: 1,
      name: "Building A Renovation",
      progress: 75,
      budget: 2500000,
      startDate: "2024-01-15",
      endDate: "2024-06-30"
    },
    {
      id: 2,
      name: "Laboratory Modernization",
      progress: 45,
      budget: 1800000,
      startDate: "2024-02-01",
      endDate: "2024-05-30"
    },
    {
      id: 3,
      name: "Workshop Upgrade",
      progress: 90,
      budget: 1200000,
      startDate: "2024-01-01",
      endDate: "2024-03-30"
    }
  ];

  return (
    <Container fluid className="p-4">
      <h2 className="mb-4">Renovation Projects Dashboard</h2>
      
      <Row className="mb-4">
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Total Projects</Card.Title>
              <h3>{renovationProjects.length}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Total Budget</Card.Title>
              <h3>₹{(5500000 / 100000).toFixed(2)} Lakhs</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Completed Projects</Card.Title>
              <h3>1/3</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Average Progress</Card.Title>
              <h3>70%</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Active Renovation Projects</Card.Title>
              {renovationProjects.map(project => (
                <div key={project.id} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5>{project.name}</h5>
                    <span>{project.progress}%</span>
                  </div>
                  <ProgressBar now={project.progress} />
                  <div className="d-flex justify-content-between mt-2">
                    <small>Budget: ₹{(project.budget / 100000).toFixed(2)} Lakhs</small>
                    <small>{project.startDate} - {project.endDate}</small>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RenovationDashboard;