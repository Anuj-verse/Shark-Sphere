# Start both backend and frontend for development
Write-Host "🦈 Starting Shark Sphere Development Servers..." -ForegroundColor Cyan
Write-Host ""

# Start backend server in background
Write-Host "🔧 Starting backend server on port 3001..." -ForegroundColor Green
Start-Process -FilePath "node" -ArgumentList "backend/index.js" -WindowStyle Hidden

# Wait a moment for backend to start
Start-Sleep -Seconds 2

# Check if backend is running
try {
    $healthCheck = Invoke-WebRequest -Uri "http://localhost:3001/api/health" -UseBasicParsing -ErrorAction Stop
    Write-Host "✅ Backend server is running successfully!" -ForegroundColor Green
    Write-Host "📍 Backend API: http://localhost:3001/api" -ForegroundColor Yellow
} catch {
    Write-Host "❌ Failed to start backend server" -ForegroundColor Red
    Write-Host "Error: $_" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🚀 Starting frontend development server..." -ForegroundColor Green
Write-Host "📍 Frontend will be available at: http://localhost:5173" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop both servers" -ForegroundColor Gray
Write-Host ""

# Start frontend (this will run in foreground)
npm run dev
