const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const fetch = require('node-fetch');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}\public`));

app.get('/', (req, res) => {
  res.send('Hello Express template');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
