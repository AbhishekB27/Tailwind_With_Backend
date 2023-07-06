const express = require('express')
const chokidar = require('chokidar');
const nodemon = require('nodemon');
const path = require('path')
const app = express()
app.use(express.json())

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

const fs = require('fs');

// Read the content of the external CSS file
const cssContent = fs.readFileSync('./public/style.css', 'utf8');
// console.log(cssContent)
const watcher = chokidar.watch('./views/*.ejs'); // Adjust the path to your EJS files

watcher.on('change', () => {
  console.log('EJS file changed. Restarting server...');
  nodemon.restart();
});

app.get('/', (req, res) => {
    res.render('Home',{cssContent})
})

app.listen(8080,()=>{
    console.log('listening on port 8080')
})