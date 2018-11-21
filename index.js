const express = require('express');
const cors = require('cors');
const path = require('path');

const theme = require('./themes/1.json');

const app = express();
app.use(cors());

app.get('/api/theme/:id', (req, res) => {
  const themeId = req.params.id;
  console.log(themeId);
  console.log(theme);
  res.header('Content-Type','application/json');
  res.send(JSON.stringify(theme));
});

let root = path.join(__dirname, 'client', 'build/')
app.use(express.static(root))
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})
app.listen(5000);
console.log('Server is up on :5000');