const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({message: "Welcome to Trade Trading Backend"});
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})

