// Mock shark tracking data - simulates real shark tracking APIs like OCEARCH
const mockSharkData = [
  {
    id: 1,
    name: "Mary Lee",
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
    name: "Nukumi",
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
    name: "Unama'ki",
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
    name: "Cabot",
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
    name: "Ironbound",
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
    name: "Scot",
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
    temperature: "78°F"
  },
  {
    id: 7,
    name: "Andromache",
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
    name: "Breton",
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
    temperature: "75°F"
  },
  {
    id: 9,
    name: "Vimy",
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
    name: "Jekyll",
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
    temperature: "69°F"
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchSharkTrackingData = async () => {
  try {
    // Simulate network delay
    await delay(1500);
    
    // Simulate occasional API failures (10% chance)
    if (Math.random() < 0.1) {
      throw new Error('Failed to fetch shark tracking data');
    }
    
    // Return mock data
    return {
      success: true,
      data: mockSharkData,
      lastUpdated: new Date().toISOString(),
      totalSharks: mockSharkData.length
    };
  } catch (error) {
    console.error('Error fetching shark data:', error);
    return {
      success: false,
      error: error.message,
      data: []
    };
  }
};

// Additional function to get individual shark data
export const fetchSharkById = async (sharkId) => {
  try {
    await delay(500);
    
    const shark = mockSharkData.find(s => s.id === sharkId);
    
    if (!shark) {
      throw new Error('Shark not found');
    }
    
    return {
      success: true,
      data: shark
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      data: null
    };
  }
};

// Function to get sharks by species
export const fetchSharksBySpecies = async (species) => {
  try {
    await delay(800);
    
    const filteredSharks = mockSharkData.filter(
      shark => shark.species.toLowerCase().includes(species.toLowerCase())
    );
    
    return {
      success: true,
      data: filteredSharks,
      count: filteredSharks.length
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      data: []
    };
  }
};
