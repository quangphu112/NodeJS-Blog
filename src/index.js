import path from 'path';
import { engine } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000

// Template Engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources\\views'))


// HTTP Logger
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/new', (req, res) => {
  res.render('new');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})