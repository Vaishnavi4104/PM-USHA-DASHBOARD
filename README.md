# PM-USHA Dashboard

A comprehensive dashboard application for Project Monitoring Unit of Strengthening Healthcare Accessibility (PM-USHA), built with React and Material-UI.

## Features

- 🔐 **Role-based Authentication**: Secure access with different user roles (Admin, Finance, Construction, Equipment, etc.)
- 📊 **Interactive Dashboards**: 
  - Financial Overview
  - Infrastructure Management
  - Equipment Tracking
  - Soft Components Monitoring
- 📱 **Responsive Design**: Fully responsive interface that works on desktop and mobile devices
- 🎨 **Modern UI**: Built with Material-UI components and custom styling
- 📈 **Real-time Data**: Dynamic data visualization with charts and graphs
- 🔄 **Export Functionality**: Export data to Excel for offline analysis

## Tech Stack

- React 18
- Material-UI v5
- React Router v6
- Chart.js / React-Chartjs-2
- Bootstrap 5
- Font Awesome

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pm-usha-dashboard.git
```

2. Navigate to the project directory:
```bash
cd pm-usha-dashboard
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
src/
├── assets/         # Static assets (images, css)
├── components/     # React components
├── contexts/       # Context providers
├── hooks/         # Custom hooks
├── services/      # API and service functions
└── styles/        # Global styles
```

## User Roles and Access Levels

1. **Admin**
   - Full access to all features
   - User management capabilities

2. **Finance Head**
   - Access to financial dashboard
   - Budget management
   - Transaction history

3. **Construction Head**
   - Infrastructure dashboard
   - Project progress tracking
   - Site management

4. **Equipment Head**
   - Equipment inventory
   - Procurement tracking
   - Maintenance records

5. **Guest**
   - Limited view access
   - Basic dashboard overview

## Test Accounts

For testing purposes, use the following credentials:

- Admin: admin@pmusha.gov.in / admin123
- Finance: finance@pmusha.gov.in / finance123
- Construction: construction@pmusha.gov.in / construction123
- Equipment: equipment@pmusha.gov.in / equipment123
- Guest: guest@pmusha.gov.in / guest123

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/pm-usha-dashboard](https://github.com/yourusername/pm-usha-dashboard)
