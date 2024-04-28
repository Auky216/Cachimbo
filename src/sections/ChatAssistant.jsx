import React, { useState } from "react";
import sendIcon from "../assets/send.svg";
import person from "../assets/person.svg";
import bot from "../assets/bot.svg";

const ChatAssistant = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState(true);
  const [userMessages, setUserMessages] = useState([]);
  const [tempMessage, setTempMessage] = useState(null);

  const sendMessage = () => {
    setType(false);
    const textToSend = text;
    setText("");
    setTempMessage(textToSend); //impresion temporal
    //========================
    setTimeout(() => {
      setTempMessage(null);
      setUserMessages([
        ...userMessages,
        {
          question: textToSend,
          response: "respuesta de la api",
        },
      ]);

      setType(true);
    }, 3000);
    //enviar pregunta a la api.... axios.post ...
    //obtner respuesta de la api... response=...
    //setar respuesta en userMessages...
    //===========================
  };

  const textUpdate = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (text.trim() !== "") {
        sendMessage();
        setText("");
      }
      e.preventDefault();
    } else if (e.key === "Enter" && e.shiftKey) {
      if (text.trim() !== "") {
        setText(text + "\n");
      }
      e.preventDefault();
    }
  };

  const onClickSend = (e) => {
    if (text != "") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="h-[89%] overflow-y-auto">
        {userMessages.length != 0 &&
          userMessages.map((message) => (
            <div className="flex w-full flex-col p-4">
              <div className="flex flex-row pb-4 pt-4">
                <div className="flex w-[40px] flex-col items-start pt-1">
                  <img src={person} alt="Person" />
                </div>
                <div className="">
                  <div
                    className=" justify-left ml-2 flex  rounded-2xl border-[1px] border-[#7f6afc] p-3 text-[#7f6afc]"
                    type="text"
                  >
                    {message.question}
                  </div>
                </div>
              </div>

              <div className="m-auto-0 flex w-[100%] flex-row justify-end pb-4 pt-4">
                <div className="">
                  <div className="justify-left mr-2 flex  rounded-2xl border-[1px] border-[#7f6afc] bg-[#7f6afc] p-3 text-[white]">
                    {message.response}
                  </div>
                </div>
                <div className="flex  w-[40px] flex-col items-end pt-1">
                  <img src={bot} alt="bot" />
                </div>
              </div>
            </div>
          ))}
        {tempMessage && (
          <div className="m-w-[100%] flex flex-col p-4">
            <div className="flex flex-row pb-4 pt-4">
              <div className="flex w-[40px] flex-col items-start pt-1">
                <img src={person} alt="Person" />
              </div>
              <div className="">
                <div
                  className="justify-left ml-2 flex  rounded-2xl border-[1px] border-[#7f6afc] p-3 text-[#7f6afc]"
                  type="text"
                >
                  {tempMessage}
                </div>
              </div>
            </div>

            <div className="m-auto-0 flex w-[100%] flex-row justify-end pb-4 pt-4">
              <div className="">
                <div className="justify-left mr-2 flex rounded-2xl border-[1px] border-[#7f6afc] bg-[#7f6afc] p-3 text-[white]">
                  {/*loader*/}

                  <div class="flex  h-[24px] flex-row items-center justify-center dark:invert">
                    <div class="mr-1 h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
                    <div class="mr-1 h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:-0.15s]"></div>
                    <div class="h-2 w-2 animate-bounce rounded-full bg-white"></div>
                  </div>
                  {/*loader*/}
                </div>
              </div>
              <div className="flex  w-[40px] flex-col items-end pt-1">
                <img src={bot} alt="bot" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex h-[100px] w-full flex-row  ">
        <div className=" h-full w-[93%] p-4 pr-1">
          <div className="flex h-full max-w-[100%] rounded-2xl border-[1px] border-[#7f6afc] p-3">
            <textarea
              disabled={!type}
              style={{
                resize: "none",
                outline: "none",
                backgroundColor: "transparent",
                color: "#7f6afc",
              }}
              className="flex w-full "
              type="text"
              placeholder="Ingresa tu consulta..."
              value={text}
              onChange={textUpdate}
              onKeyDown={keyPress}
            ></textarea>
          </div>
        </div>
        <div className="flex h-full w-[7%] justify-center pt-4">
          <div
            disabled={!type}
            className="h-[50px] w-[50px] rounded-2xl bg-[#7f6afc]"
            type="button"
            onClick={onClickSend}
          >
            <img
              src={sendIcon}
              style={{ filter: "invert(100%)", scale: "55%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
