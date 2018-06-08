const express = require("express");
const bodyParser = require("body-parser");
const http = require ('http');
const mongoose = require("mongoose");
const morgan = require ('morgan');
//const routes = require("./routes");
const path = require("path");
const app = express();
const router = require ('./routes/router.js');
const cors = require ('cors');

// ===== db setup =====
mongoose.connect(
  process.envMONGODB_URI || 'mongodb://localhost/auth',
{
  useMongoClient: true
});

let connection = mongoose.connection;
connection.on('connected', function() {
  console.log('connected to db');
});

// ===== server setup =====
const PORT = process.env.PORT || 3090;
// const server = http.createServer(app);
// server.listen(PORT);
// console.log('Server listening on:', PORT);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ===== Send every request to the React app =====
// ===== Define any API routes before this runs =====
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


// ===== app setup =====
app.use(morgan('combined')); // logging requests
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);
