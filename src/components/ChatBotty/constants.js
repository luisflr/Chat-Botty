import io from "socket.io-client";

export const initialMessages = {
  bot: "Hi! Im Botty.",
};

export const config = {
  BOT_SERVER_ENDPOINT: "https://botty.alexgurr.com",
  SEND_AUDIO_URL: "https://puu.sh/GSHJ0/25fae22f76.mp3",
  RECEIVE_AUDIO_URL: "https://puu.sh/GSHIU/df806a9cb8.mp3",
};

export const newSocket = io(config.BOT_SERVER_ENDPOINT, {
  transports: ["websocket", "polling", "flashsocket"],
});
