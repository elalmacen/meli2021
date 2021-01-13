require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// #### ROOT ####//
app.get('/', (req, res) => {
  res.json({ message: 'Hello MELI', code: 200, success: true });
});

app.use('/api', router);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`
      🚀 ... MELI API listening at ${process.env.BACKEND_URL}
  `);
});
