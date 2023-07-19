import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    transports: ["websocket"],
  };
  return io("http://localhost:8000", options);
};
