require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');
const trackRoutes = require('./routes/trackRoutes')


const app = express();


app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://Vintu2005:magicword@cluster0.4nyx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',  () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err)
});

app.get('/', requireAuth ,(req,res) => {
    res.send(`Your Email is: ${req.user.email}`);
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}` )
})