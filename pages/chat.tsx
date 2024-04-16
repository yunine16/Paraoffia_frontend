import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";

const Chat: NextPage = () => {
  let websocketUrl: string;
  if (typeof process.env.NEXT_PUBLIC_WEBSOCKET_URL === "string") {
    websocketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL;
  } else {
    throw new Error("Invalid WebSocket URL");
  }

  const socketRef = useRef<WebSocket>();
  const [isConnected, setIsConnected] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");

  const sendData = (event: any) => {
    event.preventDefault();
    setFormMessage(event.target[0].value);
    socketRef.current?.send(event.target[0].value);
  };

  useEffect(() => {
    socketRef.current = new WebSocket(websocketUrl);
    socketRef.current.onopen = function () {
      setIsConnected(true);
      console.log("Connected");
    };

    socketRef.current.onclose = function () {
      setIsConnected(false);
      console.log("Closed");
    };

    socketRef.current.onmessage = function (event) {
      setSentMessage(event.data);
    };

    return () => {
      if (socketRef.current == null) {
        return;
      }
      socketRef.current.close();
    };
  }, []);

  return (
    <>
      <h1>WebSocket Test</h1>
      <p>WebSocket Connection : {`${isConnected}`}</p>
      <form onSubmit={sendData}>
        <input type="text" name="socketData" />
        <button type="submit">データを送信</button>
      </form>
      <p>form message: {formMessage}</p>
      <p>sent message: {sentMessage}</p>
    </>
  );
};

export default Chat;
