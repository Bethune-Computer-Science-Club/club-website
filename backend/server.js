const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database established successfully");
})

const announcementsRouter = require('./routes/announcements');
const projectsRouter = require('./routes/projects');
const execsRouter = require('./routes/execs');

app.use('/announcements', announcementsRouter)
app.use('/projects', projectsRouter)
app.use('/execs', execsRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});