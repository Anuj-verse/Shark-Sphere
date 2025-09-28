// Base API URL - will use Vite proxy to route to backend
const API_BASE_URL = '/api';

// API configuration
const API_CONFIG = {
  timeout: 30000, // 30 second timeout
  headers: {
    'Content-Type': 'application/json',
  },
};

// Generic API fetch helper
const fetchWithTimeout = async (url, options = {}) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        ...API_CONFIG.headers,
        ...options.headers,
      },
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};

// Main function to fetch all shark tracking data from backend
export const fetchSharkTrackingData = async () => {
  try {
    console.log('🦈 Fetching shark data from backend API...');
    const response = await fetchWithTimeout(`${API_BASE_URL}/sharks`);
    
    console.log('✅ Successfully fetched shark data from backend');
    return response; // Backend already returns the correct format
    
  } catch (error) {
    console.error('❌ Error fetching shark data from backend:', error);
    return {
      success: false,
      error: error.message,
      data: []
    };
  }
};

// Function to get individual shark data from backend
export const fetchSharkById = async (sharkId) => {
  try {
    console.log(`🦈 Fetching shark ${sharkId} from backend...`);
    const response = await fetchWithTimeout(`${API_BASE_URL}/sharks/${sharkId}`);
    
    console.log(`✅ Successfully fetched shark ${sharkId} from backend`);
    return response;
    
  } catch (error) {
    console.error(`❌ Error fetching shark ${sharkId} from backend:`, error);
    return {
      success: false,
      error: error.message,
      data: null
    };
  }
};

// Function to get sharks by species from backend
export const fetchSharksBySpecies = async (species) => {
  try {
    console.log(`🦈 Fetching sharks by species '${species}' from backend...`);
    const response = await fetchWithTimeout(`${API_BASE_URL}/sharks/species/${encodeURIComponent(species)}`);
    
    console.log(`✅ Successfully fetched sharks by species '${species}' from backend`);
    return response;
    
  } catch (error) {
    console.error(`❌ Error fetching sharks by species '${species}' from backend:`, error);
    return {
      success: false,
      error: error.message,
      data: []
    };
  }
};

// Health check function to test backend connectivity
export const checkAPIHealth = async () => {
  try {
    console.log('🔍 Checking backend API health...');
    const response = await fetchWithTimeout(`${API_BASE_URL}/health`);
    
    console.log('✅ Backend API is healthy');
    return {
      success: true,
      ...response
    };
    
  } catch (error) {
    console.error('❌ Backend API health check failed:', error);
    return {
      success: false,
      error: error.message,
      status: 'DOWN'
    };
  }
};
