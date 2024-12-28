import { io } from "socket.io-client";

const URL = process.env.NEXT_PUBLIC_API_URL;

export const socket = io(URL, {
  withCredentials: true,
  autoConnect: true,
  reconnection: true,
});
