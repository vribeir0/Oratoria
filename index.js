
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Base route')
})
app.use("/user", require("./routes/user/User"));

app.listen(config.port, () => console.log('App listening url http://localhost:' + config.port));
