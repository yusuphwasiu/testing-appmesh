import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3005

app.use(express.json())

// Analytics & Metrics routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Analytics & Metrics' })
})

app.get('/', (req, res) => {
  res.json({ 
    service: 'Analytics & Metrics',
    version: '1.0.0',
    description: 'Event tracking and metrics collection'
  })
})

// TODO: Add your routes here

app.listen(PORT, () => {
  console.log(`Analytics & Metrics running on port ${PORT}`)
})
