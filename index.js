// index.js
const express = require('express')

// Create Express app
const app = express()

// A sample route
app.get('/', (req, res) => res.send('Hello Eric'))

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!')) 