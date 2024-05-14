import React, { useState, useRef, useEffect } from "react";
import userAvatar from "../assets/profile-template.png";
import assistantAvatar from "../assets/assistant-avatar.png";

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    {
      text: "Puedes que cursos llevar para el 2024-2 si solo quiero llevar 4 cursos y que tenga el mayor número de créditos posibles.",
      sender: "user",
    },
    {
      text: "Los cursos que te recomiendo siendo de Ciencias de la Computación para tu segundo ciclo serían Programación 2, Cálculo Vectorial, Laboratorio de Computación 2 y Proyecto Interdisciplinario 2. Con estos cursos tendrías un total de 16 créditos y no te atrasarías mucho.",
      sender: "assistant",
    },
    {
      text: "Puedes que cursos llevar para el 2024-2 si.",
      sender: "user",
    },
    {
      text: "Los cursos de Computación 2 y Proyecto mucho.",
      sender: "assistant",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      //aqui se puede obtener la respuesta del asistente
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-assistant flex h-full flex-col py-8">
      <div className="chat-messages mb-4 grow overflow-auto px-4 py-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "user justify-end" : "assistant justify-start"} mb-6 flex`}
          >
            {message.sender === "assistant" && (
              <img
                src={assistantAvatar}
                alt="Assistant Avatar"
                className="avatar assistant-avatar mr-3 size-10"
              />
            )}
            <div
              className={`message-text ${message.sender === "user" ? "user-message" : "assistant-message"} 
                          max-w-[60%] ${message.sender === "assistant" ? "ml-2.5" : ""} text-sm
                          ${
                            message.sender === "assistant"
                              ? "rounded-2xl bg-cach-l3 px-5 py-3  text-cach-l1 focus:outline-none"
                              : "rounded-xl border border-solid border-cach-l3 px-6 py-3 text-cach-l3 dark:border-cach-l2 dark:text-cach-l2"
                          }`}
            >
              {message.text}
            </div>
            {message.sender === "user" && (
              <img
                src={userAvatar}
                alt="User Avatar"
                className="avatar user-avatar ml-2.5 size-10"
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input flex bg-transparent p-2.5">
        <input
          type="text"
          placeholder="Escriba su mensaje ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          className="mr-4 w-full rounded-2xl border border-cach-l3 bg-transparent px-5 py-2 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:bg-transparent dark:text-cach-l2 dark:placeholder-cach-l2/40"
          ref={inputRef}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 rounded-2xl bg-cach-l3 px-5 py-1 text-sm text-cach-l1 focus:outline-none"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;
