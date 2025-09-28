const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());

const mockSharkData = [
  {
    id: 1,
    name: "WS1",
    species: "Great White Shark",
    latitude: 35.2271,
    longitude: -75.5449,
    length: "16 ft",
    weight: "3,456 lbs",
    gender: "Female",
    tagDate: "Sept 17, 2012",
    lastPing: "Dec 15, 2024",
    location: "Off Cape Hatteras, NC",
    depth: "125 ft",
    temperature: "64°F"
  },
  {
    id: 2,
    name: "WS2",
    species: "Great White Shark",
    latitude: 44.6488,
    longitude: -63.5752,
    length: "17.2 ft",
    weight: "3,541 lbs",
    gender: "Female",
    tagDate: "Oct 2, 2019",
    lastPing: "Dec 16, 2024",
    location: "Nova Scotia, Canada",
    depth: "89 ft",
    temperature: "52°F"
  },
  {
    id: 3,
    name: "WS3",
    species: "Great White Shark",
    latitude: 41.2033,
    longitude: -70.0420,
    length: "15.3 ft",
    weight: "2,076 lbs",
    gender: "Female",
    tagDate: "Sept 20, 2019",
    lastPing: "Dec 14, 2024",
    location: "Cape Cod, MA",
    depth: "67 ft",
    temperature: "58°F"
  },
  {
    id: 4,
    name: "WS4",
    species: "Great White Shark",
    latitude: 33.6891,
    longitude: -78.8867,
    length: "9.8 ft",
    weight: "533 lbs",
    gender: "Male",
    tagDate: "May 4, 2021",
    lastPing: "Dec 13, 2024",
    location: "Myrtle Beach, SC",
    depth: "42 ft",
    temperature: "71°F"
  },
  {
    id: 5,
    name: "WS5",
    species: "Great White Shark",
    latitude: 39.3643,
    longitude: -74.4229,
    length: "12.4 ft",
    weight: "998 lbs",
    gender: "Male",
    tagDate: "Oct 3, 2019",
    lastPing: "Dec 16, 2024",
    location: "New Jersey Coast",
    depth: "156 ft",
    temperature: "61°F"
  },
  {
    id: 6,
    name: "WS6",
    species: "Great White Shark",
    latitude: 25.7617,
    longitude: -80.1918,
    length: "12.4 ft",
    weight: "1,644 lbs",
    gender: "Male",
    tagDate: "Sept 27, 2021",
    lastPing: "Dec 15, 2024",
    location: "Florida Keys",
    depth: "203 ft",
    temperature: "84°F"
  },
  {
    id: 7,
    name: "WS7",
    species: "Great White Shark",
    latitude: 31.5804,
    longitude: -81.2001,
    length: "10.6 ft",
    weight: "800 lbs",
    gender: "Female",
    tagDate: "Jan 26, 2022",
    lastPing: "Dec 14, 2024",
    location: "Georgia Coast",
    depth: "98 ft",
    temperature: "68°F"
  },
  {
    id: 8,
    name: "WS8",
    species: "Great White Shark",
    latitude: 29.9511,
    longitude: -90.0715,
    length: "13.6 ft",
    weight: "1,437 lbs",
    gender: "Male",
    tagDate: "Sept 12, 2020",
    lastPing: "Dec 12, 2024",
    location: "Gulf of Mexico",
    depth: "234 ft",
    temperature: "81°F"
  },
  {
    id: 9,
    name: "WS9",
    species: "Great White Shark",
    latitude: 36.8508,
    longitude: -75.9776,
    length: "12.9 ft",
    weight: "1,164 lbs",
    gender: "Male",
    tagDate: "Oct 15, 2021",
    lastPing: "Dec 13, 2024",
    location: "Virginia Beach, VA",
    depth: "187 ft",
    temperature: "63°F"
  },
  {
    id: 10,
    name: "WS10",
    species: "Great White Shark",
    latitude: 31.0389,
    longitude: -81.4912,
    length: "9.2 ft",
    weight: "414 lbs",
    gender: "Male",
    tagDate: "Feb 28, 2023",
    lastPing: "Dec 16, 2024",
    location: "Jekyll Island, GA",
    depth: "76 ft",
    temperature: "76°F"
  },
  {
    id: 11,
    name: "WS11",
    species: "Great White Shark",
    latitude: 24.5557,
    longitude: -81.7804,
    length: "14.2 ft",
    weight: "1,856 lbs",
    gender: "Female",
    tagDate: "Aug 15, 2023",
    lastPing: "Dec 16, 2024",
    location: "Key West, FL",
    depth: "145 ft",
    temperature: "86°F"
  },
  {
    id: 12,
    name: "WS12",
    species: "Great White Shark",
    latitude: 27.7663,
    longitude: -82.6404,
    length: "11.8 ft",
    weight: "1,234 lbs",
    gender: "Male",
    tagDate: "Jun 12, 2023",
    lastPing: "Dec 15, 2024",
    location: "Tampa Bay, FL",
    depth: "98 ft",
    temperature: "79°F"
  }
];

// Simulate API delay like your frontend does
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API endpoint - returns same format as your frontend mock
app.get('/api/sharks', async (req, res) => {
  try {
    console.log('🦈 Fetching shark data...');
    
    // Simulate network delay like your frontend
    await delay(1500);
    
    // Simulate occasional API failures (10% chance) like your frontend
    if (Math.random() < 0.1) {
      throw new Error('Failed to fetch shark tracking data');
    }
    
    // Return data in same format as your frontend service
    const response = {
      success: true,
      data: mockSharkData,
      lastUpdated: new Date().toISOString(),
      totalSharks: mockSharkData.length
    };
    
    console.log(`✅ Returning ${mockSharkData.length} sharks`);
    res.json(response);
    
  } catch (error) {
    console.error('❌ Error fetching shark data:', error.message);
    res.status(500).json({
      success: false,
      error: error.message,
      data: []
    });
  }
});

// Individual shark endpoint
app.get('/api/sharks/:id', async (req, res) => {
  try {
    await delay(500);
    
    const sharkId = parseInt(req.params.id);
    const shark = mockSharkData.find(s => s.id === sharkId);
    
    if (!shark) {
      return res.status(404).json({
        success: false,
        error: 'Shark not found',
        data: null
      });
    }
    
    res.json({
      success: true,
      data: shark
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      data: null
    });
  }
});

// Sharks by species endpoint
app.get('/api/sharks/species/:species', async (req, res) => {
  try {
    await delay(800);
    
    const species = req.params.species;
    const filteredSharks = mockSharkData.filter(
      shark => shark.species.toLowerCase().includes(species.toLowerCase())
    );
    
    res.json({
      success: true,
      data: filteredSharks,
      count: filteredSharks.length
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      data: []
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: '🦈 Shark API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🦈 Shark API server running on http://localhost:${PORT}`);
  console.log(`📍 Endpoints available:`);
  console.log(`   GET /api/sharks - Get all sharks`);
  console.log(`   GET /api/sharks/:id - Get shark by ID`);
  console.log(`   GET /api/sharks/species/:species - Get sharks by species`);
  console.log(`   GET /api/health - Health check`);
});
