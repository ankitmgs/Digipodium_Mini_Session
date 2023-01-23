const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const cors = require("cors");

const port = 5000;

// to allow your frontend
app.use(cors({ origin: ["http://localhost:3000"] }));

// for reading data from client
app.use(express.json());

// to connect routers
app.use("/user", userRouter);

app.listen(port, () => {
  console.log("server started");
});
