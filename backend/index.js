const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
connectToMongo();


const app = express();
app.use(cors());
const port = 5000;


//Available Routes

app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

 app.get('/', (req, res) => {
  res.send('Hello Megha!')
 })

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})