const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('TitanNotes V0.02')
})
app.listen(3000, () => console.log('Server running on port 3000'))
