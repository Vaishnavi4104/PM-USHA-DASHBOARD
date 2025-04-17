import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userPermissions, setUserPermissions] = useState([]);

  const users = {
    'admin@pmusha.gov.in': { 
      password: 'admin123', 
      role: 'admin',
      permissions: ['all']
    },
    'finance@pmusha.gov.in': { 
      password: 'finance123', 
      role: 'finance',
      permissions: ['view_financial', 'edit_financial', 'view_reports', 'view_documents']
    },
    'construction@pmusha.gov.in': { 
      password: 'construction123', 
      role: 'construction',
      permissions: ['view_infrastructure', 'edit_infrastructure', 'view_lifecycle', 'view_documents']
    },
    'equipment@pmusha.gov.in': { 
      password: 'equipment123', 
      role: 'equipment',
      permissions: ['view_equipment', 'edit_equipment', 'view_lifecycle', 'view_documents']
    },
    'renovation@pmusha.gov.in': { 
      password: 'renovation123', 
      role: 'renovation',
      permissions: ['view_infrastructure', 'view_lifecycle', 'view_documents']
    },
    'soft@pmusha.gov.in': { 
      password: 'soft123', 
      role: 'soft',
      permissions: ['view_soft_components', 'edit_soft_components', 'view_documents']
    },
    'guest@pmusha.gov.in': { 
      password: 'guest123', 
      role: 'guest',
      permissions: ['view_overview', 'submit_feedback']
    }
  };

  const login = async (email, password) => {
    const user = users[email];
    if (user && user.password === password) {
      setCurrentUser({ email });
      setUserRole(user.role);
      setUserPermissions(user.permissions);
      localStorage.setItem('user', JSON.stringify({ 
        email, 
        role: user.role,
        permissions: user.permissions 
      }));
      return { success: true };
    }
    return { success: false };
  };

  const logout = () => {
    setCurrentUser(null);
    setUserRole(null);
    setUserPermissions([]);
    localStorage.removeItem('user');
  };

  const hasPermission = (permission) => {
    return userPermissions.includes('all') || userPermissions.includes(permission);
  };

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setCurrentUser({ email: user.email });
      setUserRole(user.role);
      setUserPermissions(user.permissions);
    }
  }, []);

  const value = {
    currentUser,
    userRole,
    userPermissions,
    login,
    logout,
    hasPermission
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}