// src/App.tsx
import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import SHGPlatform from './pages/SHG_final';
import LandingPage from './pages/LandingPage';

function AppContent() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const [flow, setFlow] = useState<'landing' | 'login' | 'app'>('landing');

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
          <div style={{ color: '#5d4e37' }}>Loading...</div>
        </div>
      </div>
    );
  }

  // Show landing page if not authenticated and flow is landing
  if (!isAuthenticated && flow === 'landing') {
    return <LandingPage onGetStarted={() => setFlow('login')} />;
  }

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <Login onBack={() => setFlow('landing')} />;
  }

  // Show main app if authenticated
  return <SHGPlatform />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;