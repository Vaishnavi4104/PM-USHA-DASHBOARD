const generateRandomData = () => {
  return {
    infrastructure: {
      summary: {
        totalProjects: 45,
        ongoingProjects: 28,
        completedProjects: 17,
        totalBudget: 8500000000,
        projectsByType: {
          'New Construction': 15,
          'Renovation': 12,
          'Extension': 10,
          'Modernization': 8
        }
      },
      projects: Array(45).fill(null).map((_, index) => ({
        id: index + 1,
        name: `Project ${index + 1}`,
        type: ['New Construction', 'Renovation', 'Extension', 'Modernization'][Math.floor(Math.random() * 4)],
        status: Math.random() > 0.6 ? 'Ongoing' : 'Completed',
        progress: Math.floor(Math.random() * 100),
        budget: Math.floor(Math.random() * 200000000) + 50000000,
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        location: `Location ${index + 1}`
      }))
    },
    equipment: {
      summary: {
        totalItems: 850,
        totalBudget: 2500000000,
        procured: 620,
        pending: 230,
        categories: {
          'Laboratory Equipment': 300,
          'Workshop Tools': 250,
          'IT Infrastructure': 200,
          'Classroom Equipment': 100
        }
      },
      items: Array(850).fill(null).map((_, index) => ({
        id: index + 1,
        name: `Equipment ${index + 1}`,
        category: ['Laboratory Equipment', 'Workshop Tools', 'IT Infrastructure', 'Classroom Equipment'][Math.floor(Math.random() * 4)],
        status: Math.random() > 0.7 ? 'Pending' : 'Procured',
        cost: Math.floor(Math.random() * 1000000) + 100000,
        quantity: Math.floor(Math.random() * 10) + 1,
        supplier: `Supplier ${Math.floor(Math.random() * 10) + 1}`
      }))
    },
    softComponents: {
      summary: {
        totalPrograms: 35,
        activePrograms: 12,
        completedPrograms: 23,
        totalBudget: 1500000000,
        totalParticipants: 2800,
        categories: {
          'Training': 15,
          'Workshops': 8,
          'Seminars': 7,
          'Research': 5
        }
      },
      programs: Array(35).fill(null).map((_, index) => ({
        id: index + 1,
        name: `Program ${index + 1}`,
        type: ['Training', 'Workshops', 'Seminars', 'Research'][Math.floor(Math.random() * 4)],
        status: Math.random() > 0.3 ? 'Completed' : 'Active',
        participants: Math.floor(Math.random() * 100) + 50,
        budget: Math.floor(Math.random() * 50000000) + 10000000,
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        location: `Location ${index + 1}`
      }))
    },
    financial: {
      summary: {
        totalBudget: 12500000000,
        allocated: 9800000000,
        spent: 7500000000,
        remaining: 5000000000,
        components: {
          'Infrastructure': 8500000000,
          'Equipment': 2500000000,
          'Soft Components': 1500000000
        }
      },
      transactions: Array(100).fill(null).map((_, index) => ({
        id: index + 1,
        date: '2024-01-01',
        amount: Math.floor(Math.random() * 10000000) + 1000000,
        type: Math.random() > 0.5 ? 'Credit' : 'Debit',
        component: ['Infrastructure', 'Equipment', 'Soft Components'][Math.floor(Math.random() * 3)],
        description: `Transaction ${index + 1}`
      }))
    }
  };
};

export const getMockData = () => {
  return generateRandomData();
};