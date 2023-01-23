const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const cors = require("cors");

const { createServer } = require("http");
const { Server } = require("socket.io");

// create a new server and connect it with express
const httpServer = createServer(app);

// create a socket.io instance and allow cors
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] },
});

const port = 5000;

// middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// receive the connection event sent by client
io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("sendmsg", (data) => {
    console.log(data);

    data.sent = false;
    socket.broadcast.emit("recmsg", data);
  });
});

app.use(express.json());

app.use("/user", userRouter);

// route
app.get("/", (req, res) => {
  res.send("You have requested on API");
  console.log("request at root");
});

// route
app.get("/home", (req, res) => {
  res.send("You have requested on Home");
  console.log("request at home");
});

httpServer.listen(port, () => {
  console.log("server started");
});
