const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('API Is Running')
});

app.listen(port, () => {
    console.log('Akadimia Server running on port', port)
})