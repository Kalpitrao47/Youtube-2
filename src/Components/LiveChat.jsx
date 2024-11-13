import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/ChatSlice";
import {
  generateRandomName,
  generateRandomMessage,
  makeRandomMessage,
} from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  // console.log(chatMessages)

  useEffect(() => {
    const i = setInterval(() => {
      //Api POLLING
      //real data fetch in useEffect and dispatch an action
      console.log("ApI POlling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {/* <h1 className='font-bold'>Live Chat</h1> */}
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
          {/* <ChatMessage name="Kalpit Raorane" message="Flex React"/> */}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black items-start rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Kalpit Raorane",
              message: liveMessage,
            })
          );
          setLiveMessage("")
          console.log("On form submit", liveMessage);
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mt-2 mx-2 bg-green-100 rounded-lg">
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;