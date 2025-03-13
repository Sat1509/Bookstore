import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import the Provider from react-redux
import { AuthProvide } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { store } from './redux/store.js'; 

import './index.css'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) return <Loading />; 

  return (
    
    <Provider store={store}> {/* Wrap your app with the Redux Provider */}
    <div className="app min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
      <AuthProvide>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>
      <ScrollRestoration />
    </div>
  </Provider>
    
  );
};

export default App;
