import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const activeRooms = new Map();

io.on("connection", (socket) => {
  console.log(`👤 User connected: ${socket.id}`);

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    console.log(`🚪 User ${socket.id} joined room: ${roomId}`);

    if (!activeRooms.has(roomId)) {
      activeRooms.set(roomId, ""); // Initial empty code string
    }

    // Naye user ko latest code state bhejo
    socket.emit("init-state", activeRooms.get(roomId));
  });

  socket.on("code-update", ({ roomId, change }) => {
    // Memory me latest code save karo
    activeRooms.set(roomId, change);

    // io.to() se room ke saare members (including current user) ko data broadcast karo
    // Isse sync miss hone ka chance zero ho jata hai
    io.to(roomId).emit("code-receive", change);
  });

  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "DevSync Engine running", success: true });
});

httpServer.listen(3000, () => {
  console.log("🚀 DevSync Pure Socket Server running on port 3000");
});
