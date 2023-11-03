require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

//Ports
const backend_port = process.env.BACKEND_PORT || 4003;
const frontend_port = process.env.FRONTEND_PORT || 4002;

// accept json payloads
app.use(express.json());

// enable cors
app.use(
  cors({
    origin: `http://localhost:${frontend_port}`,
  })
);

//Routes
const projectSpecificationRoutes = require("./routes/projectSpecifications");

// Route Middlewares
app.use("/project_specifications", projectSpecificationRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(backend_port, (err) => {
  if (err) throw console.log(err);
  console.log(`Server is running on port ${backend_port}`);
});
