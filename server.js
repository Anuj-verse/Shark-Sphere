const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Sample shark API - using a free API for demonstration
// You can replace this with your actual shark data API
const SHARK_API_URL = "https://jsonplaceholder.typicode.com/users"; // Placeholder API

// Transform data to GeoJSON format for mapping
function transformToGeoJSON(data) {
  const features = data.map((item, index) => {
    // Generate random coordinates for demonstration
    // Replace this with actual lat/lng from your shark API
    const lat = (Math.random() - 0.5) * 180; // Random latitude
    const lng = (Math.random() - 0.5) * 360; // Random longitude
    
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [lng, lat]
      },
      properties: {
        id: item.id || index,
        name: item.name || `Shark ${index + 1}`,
        species: item.company?.name || "Great White", // Using company name as species
        location: item.address?.city || "Ocean"
      }
    };
  });

  return {
    type: "FeatureCollection",
    features
  };
}

// API endpoint to get shark data
app.get("/api/sharks", async (req, res) => {
  try {
    console.log("Fetching shark data...");
    const response = await axios.get(SHARK_API_URL);
    const geoJsonData = transformToGeoJSON(response.data);
    
    console.log(`Found ${geoJsonData.features.length} sharks`);
    res.json(geoJsonData);
  } catch (error) {
    console.error("Error fetching shark data:", error.message);
    res.status(500).json({ 
      error: "Failed to fetch shark data",
      message: error.message 
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Shark server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🦈 Shark server running on http://localhost:${PORT}`);
  console.log(`📍 API endpoint: http://localhost:${PORT}/api/sharks`);
});
