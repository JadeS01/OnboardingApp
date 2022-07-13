const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db')


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {res.send('landing')})

// Form Routes
app.use('/forms', require('./routes/formRoutes'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})