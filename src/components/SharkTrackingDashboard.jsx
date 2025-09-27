import React, { useState } from 'react';
import SharkMap from './SharkMap';
import { fetchSharkTrackingData } from '../services/sharkApi';

const SharkTrackingDashboard = ({ onBack }) => {
  const [sharks, setSharks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const handleGetStarted = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetchSharkTrackingData();
      
      if (response.success) {
        setSharks(response.data);
        setLastUpdated(response.lastUpdated);
      } else {
        setError(response.error || 'Failed to fetch shark data');
      }
    } catch (err) {
      setError('Network error: Unable to fetch shark data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SharkMap 
      sharks={sharks} 
      loading={loading} 
      onGetStarted={handleGetStarted}
    />
  );
};

export default SharkTrackingDashboard;
