import React, { useState, useRef, useEffect } from 'react';
import userAvatar from '../assets/profile-template.png';
import assistantAvatar from '../assets/assistant-avatar.png';

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    {
      text: 'Puedes que cursos llevar para el 2024-2 si solo quiero llevar 4 cursos y que tenga el mayor número de créditos posibles.',
      sender: 'user',
    },
    {
      text: 'Los cursos que te recomiendo siendo de Ciencias de la Computación para tu segundo ciclo serían Programación 2, Cálculo Vectorial, Laboratorio de Computación 2 y Proyecto Interdisciplinario 2. Con estos cursos tendrías un total de 16 créditos y no te atrasarías mucho.',
      sender: 'assistant',
    },
    {
      text: 'Puedes que cursos llevar para el 2024-2 si.',
      sender: 'user',
    },
    {
      text: 'Los cursos de Computación 2 y Proyecto mucho.',
      sender: 'assistant',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      //aqui se puede obtener la respuesta del asistente
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-assistant" style={{ display: 'flex', flexDirection: 'column', height: '530px' }}>
      <div className="chat-messages" style={{ overflowY: 'auto', flexGrow: 1, padding: '10px' }}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'assistant'}`}
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: '10px' }}
          >
            {message.sender === 'assistant' && (
              <img
                src={assistantAvatar}
                alt="Assistant Avatar"
                className="avatar assistant-avatar"
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
            )}
            <div
              className={`message-text ${message.sender === 'user' ? 'user-message' : 'assistant-message'} ${
                message.sender === 'assistant' ? 'rounded-2xl bg-cach-l3 px-5 py-3 text-sm text-cach-l1 focus:outline-none' : 'rounded-xl border border-solid border-cach-l3 px-6 py-3 text-cach-l3 dark:text-cach-l2 dark:border-cach-l2'
              }`}
              style={{ maxWidth: '80%', wordBreak: 'break-word', marginLeft: message.sender === 'assistant' ? '10px' : 0 }}
            >
              {message.text}
            </div>
            {message.sender === 'user' && (
              <img
                src={userAvatar}
                alt="User Avatar"
                className="avatar user-avatar"
                style={{ width: '40px', height: '40px', marginLeft: '10px' }}
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input" style={{ display: 'flex', padding: '10px', backgroundColor: 'transparent' }}>
        <input
          type="text"
          placeholder="Escriba su mensaje..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          className="w-full rounded-full border border-cach-l3 bg-transparent p-2 text-cach-l3 placeholder-cach-l3 focus:outline-none dark:border-cach-l2 dark:bg-transparent dark:text-cach-l2 dark:placeholder-cach-l2"
          ref={inputRef}
          style={{ backgroundColor: 'transparent' }}
        />
        <button onClick={handleSendMessage} className="rounded-full bg-cach-l3 px-5 py-1 text-sm text-cach-l1 focus:outline-none ml-2">
          Enviar
        </button>
      </div>

      {/* Estilo CSS para el scrollbar */}
      <style>
        {`
          .chat-messages::-webkit-scrollbar {
            width: 8px;
          }

          .chat-messages::-webkit-scrollbar-track {
            background-color: transparent;
          }

          .chat-messages::-webkit-scrollbar-thumb {
            background-color: rgba(136, 136, 136, 0.5);
            border-radius: 4px;
          }

          .chat-messages::-webkit-scrollbar-thumb:hover {
            background-color: rgba(85, 85, 85, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default ChatAssistant;