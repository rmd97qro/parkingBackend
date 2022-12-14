const express = require('express');
const routerApi = require('../routes');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello word');
});


routerApi(app);

app.listen(port, () => {
  console.log(`Corriendo en puerto ${port}`);
});


