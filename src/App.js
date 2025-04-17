import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Overview from './components/dashboard/Overview';
import FinancialDashboard from './components/dashboard/FinancialDashboard';
import InfrastructureDashboard from './components/dashboard/InfrastructureDashboard';
import EquipmentDashboard from './components/dashboard/EquipmentDashboard';
import SoftComponentsDashboard from './components/dashboard/SoftComponentsDashboard';
import Reports from './components/dashboard/Reports';
import PrivateRoute from './components/PrivateRoute';
import ActivityMapping from './components/modules/ActivityMapping';
import LifecycleProgress from './components/modules/LifecycleProgress';
import FeedbackForm from './components/modules/FeedbackForm';
import DocumentCenter from './components/modules/DocumentCenter';
import SecurityRiskInfo from './components/modules/SecurityRiskInfo';

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<Overview />} />
              <Route path="financial" element={<FinancialDashboard />} />
              <Route path="infrastructure" element={<InfrastructureDashboard />} />
              <Route path="equipment" element={<EquipmentDashboard />} />
              <Route path="soft-components" element={<SoftComponentsDashboard />} />
              <Route path="reports" element={<Reports />} />
              <Route path="activity-mapping" element={<ActivityMapping />} />
              <Route path="lifecycle-progress" element={<LifecycleProgress />} />
              <Route path="feedback" element={<FeedbackForm />} />
              <Route path="documents" element={<DocumentCenter />} />
              <Route path="security" element={<SecurityRiskInfo />} />
            </Route>
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;