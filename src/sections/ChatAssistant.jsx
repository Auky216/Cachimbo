import React, { useState, useRef, useEffect } from "react";
import userAvatar from "../assets/profile-template.png";
import assistantAvatar from "../assets/assistant-avatar.png";

const ChatAssistant = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      messages: [
        {
          text: "Puedes que cursos llevar para el 2024-2 si solo quiero llevar 4 cursos y que tenga el mayor número de créditos posibles.",
          sender: "user",
        },
        {
          text: "Los cursos que te recomiendo siendo de Ciencias de la Computación para tu segundo ciclo serían Programación 2, Cálculo Vectorial, Laboratorio de Computación 2 y Proyecto Interdisciplinario 2. Con estos cursos tendrías un total de 16 créditos y no te atrasarías mucho.",
          sender: "assistant",
        },
      ],
    },
    {
      id: 2,
      messages: [
        {
          text: "Puedes que cursos llevar para el 2024-2 si.",
          sender: "user",
        },
        {
          text: "Los cursos de Computación 2 y Proyecto mucho.",
          sender: "assistant",
        },
      ],
    },
    {
      id: 3,
      messages: [
        {
          text: "Escribeme un cuento para niños",
          sender: "user",
        },
        {
          text: "No",
          sender: "assistant",
        },
      ],
    },
  ]);
  const [currentConversationId, setCurrentConversationId] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const messageLimit = 4;
  const blockTime = 600000;

  const [messageCount, setMessageCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "" && !isBlocked) {
      const newMessage = { text: inputValue, sender: "user" };
      setConversations((prevConversations) =>
        prevConversations.map((conversation) =>
          conversation.id === currentConversationId
            ? {
                ...conversation,
                messages: [...conversation.messages, newMessage],
              }
            : conversation
        )
      );
      setInputValue("");
      setMessageCount((prevCount) => prevCount + 1);
      //aqui se puede obtener la respuesta del asistente
      setTimeout(() => {
        const assistantMessage = {
          text: "Sí, dejame ayudarte con eso ...",
          sender: "assistant",
        };
        setConversations((prevConversations) =>
          prevConversations.map((conversation) =>
            conversation.id === currentConversationId
              ? {
                  ...conversation,
                  messages: [...conversation.messages, assistantMessage],
                }
              : conversation
          )
        );
      }, 400);
    }
  };

  useEffect(() => {
    if (messageCount >= messageLimit) {
      setIsBlocked(true);
      setTimeLeft(blockTime / 1000);
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsBlocked(false);
            setMessageCount(0);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [messageCount]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations, currentConversationId]);

  const handleConversationSelect = (id) => {
    setCurrentConversationId(id);
  };

  const currentConversation = conversations.find(
    (conversation) => conversation.id === currentConversationId
  );

  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col bg-gray-100 bg-opacity-0 dark:bg-gray-900 dark:bg-opacity-0">
        <div className="chat-messages flex-1 overflow-auto p-4">
          {currentConversation.messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "assistant" && (
                <img
                  src={assistantAvatar}
                  alt="Assistant Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`p-3 rounded-lg max-w-[60%] ${
                  message.sender === "assistant"
                    ? "bg-cach-l3 text-cach-l1"
                    : "bg-transparent border border-cach-l3 text-cach-l3 dark:border-cach-l2 dark:text-cach-l2"
                }`}
              >
                {message.text}
              </div>
              {message.sender === "user" && (
                <img
                  src={userAvatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input flex bg-transparent p-4">
          <input
            type="text"
            placeholder={isBlocked ? `Bloqueado por ${timeLeft}s` : "Escriba su mensaje ..."}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !isBlocked) {
                handleSendMessage();
              }
            }}
            className="flex-1 bg-transparent border border-cach-l3 rounded-full py-2 px-4 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:text-cach-l2 dark:placeholder-cach-l2/40"
            ref={inputRef}
            disabled={isBlocked}
          />
          <button
            onClick={handleSendMessage}
            className="ml-4 bg-cach-l3 text-cach-l1 py-2 px-4 rounded-full focus:outline-none"
            disabled={isBlocked}
          >
            Enviar
          </button>
        </div>
        <div className="text-center p-2">
          {isBlocked ? (
            <span className="text-red-500">
              Bloqueado por {timeLeft} segundos.
            </span>
          ) : (
            <span className="text-green-500">
              Mensajes restantes que te quedan: {messageLimit - messageCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
