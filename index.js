const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Eric'))

// Start the Express server
app.listen(process.env.PORT || port, () => console.log('Server running on port 3000!')) 