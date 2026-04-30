Write-Host "🚀 React Project Setup Script"

# Ask user for project name
$projectName = Read-Host "Enter your project name"

if (-not $projectName) {
    Write-Host "❌ Project name cannot be empty!"
    exit
}

Write-Host "Creating project: $projectName"

# Create project
npm create vite@latest $projectName -- --template react

cd $projectName

# Install dependencies
npm install

# Install Tailwind
npm install tailwindcss @tailwindcss/vite

# Update vite.config.ts
$viteConfig = @"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
"@

Set-Content -Path "vite.config.ts" -Value $viteConfig

# Update index.css
Set-Content -Path "src/index.css" -Value '@import "tailwindcss";'

Write-Host "✅ Setup complete!"

# Ask if user wants to run dev server
$runDev = Read-Host "Run dev server now? (y/n)"

if ($runDev -eq "y") {
    npm run dev
}