import React, { useState } from "react";

const ChatInput = (props: any) => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    const isUserProvided = user && user !== "";
    const isMessageProvided = message && message !== "";

    if (isUserProvided && isMessageProvided) {
      props.sendMessage(user, message);
    } else {
      alert("Please insert an user and a message.");
    }
  };

  const onUserUpdate = (e: any) => {
    setUser(e.target.value);
  };

  const onMessageUpdate = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="user">User:</label>
      <br />
      <input
        className="w-full border pl-1 focus:outline-none focus:ring
        focus:border-cashfer-purple focus-within:text-cashfer-purple mt-2 h-9 dark:focus-within:text-white"
        type="text"
        placeholder=""
        id="user"
        name="user"
        value={user}
        onChange={onUserUpdate}
      />
      <br />
      <label htmlFor="message">Message:</label>
      <br />
      <input
        className="w-full border pl-1 focus:outline-none focus:ring
         focus:border-cashfer-purple focus-within:text-cashfer-purple mt-2 h-9 dark:focus-within:text-white"
        type="text"
        placeholder=""
        id="message"
        name="message"
        value={message}
        onChange={onMessageUpdate}
      />
      <br />
      <br />
      <button className="mr-6 text-sm bg-cashfer-purple text-white px-4 py-2 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default ChatInput;
