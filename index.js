
const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express Application
const path = require('path'); // NodeJS Package for file paths

// Provide static directory for frontend
app.use(express.static(__dirname + '/Todo-List-app/dist/'));




// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/Todo-List-app/dist/index.html'));
});



// Start Server: Listen on port 8080
app.listen(8080, () => {
  console.log('Listening on port 8080');
});
