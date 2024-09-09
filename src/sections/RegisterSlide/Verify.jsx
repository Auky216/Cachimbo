import { useState, useEffect } from "react";
import { useUserStore } from "../../store/utils";
import { SecurityCodeInput } from "../../components/CustomInput";

//import { fetchDataCustom } from "../../components/fetchingData"; 
// pronto lo eliminaré, es mejor crear un fetch especifico y añadirlo a services.js

// septimo slide del registro: confirmacion de la cuenta desde el correo institucional
const Verify = ({ next, id }) => {
  //const [dataCode, setData] = useState("1234");
  const userEmail = useUserStore(state => state.user.email); // datos de la peticion
  
  /* const [inputs, setInputs] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  }); */
  const [error, setError] = useState(""); // mensaje de error
  const [code, setCode] = useState(""); // codigo de verificacion
  const [newMessage, setNewMessage] = useState(false);
  const [isSended, setIsSeded] = useState(false);

  const getVerifCode = async () => {
    const res = await fetch("/api/test/api/auth/getCodeVerification", {
      method: "POST",
      body: JSON.stringify({ email: userEmail }),
    })
    const data = await res.json();
    //console.log(data);
    //setData(data.test.Item.code);
    /* let response = await fetchDataCustom(
      { id: 13, email: userEmail },
      "//auth//sendCodeVerification",
    );
    setData(response["test"]["items"][0]["code"]); */
  };

  const validate = async() => {
    /* let changeInput = { ...inputs };
    changeInput[`code${inputIndex}`] = digit;
    setInputs(changeInput);
    setCode(Object.values(changeInput).join(""));
    if (isNaN(digit)) setError("El código solo puede contener números");
    else setError(""); */

    const res = await fetch("/api/test/api/auth/sendCodeVerification", {
      method: "POST",
      body: JSON.stringify({ id, email: userEmail, code}),
    });
    //console.log({ id, email: userEmail, code})

    const data = await res.json();
    //console.log(data);
    if (data.statusCode === 200){
    } else setError("El código ingresado no coincide");
    

  };

  const matchCode = () => {
    validate().finally( ()=>next());
  };

  const newCodeGenerate = () => {
    getVerifCode();
    setIsSeded(true);
    setNewMessage(true);
  };


  // cuando se renderiza el componente se envia el correo con el codigo
  // getVerifCode();

  return (
    <section className="flex h-full w-full flex-col items-center rounded-[3.5rem]">
      <div className="mt-5 flex h-[80%] w-full flex-col items-center">
        <div className="mb-4 flex w-[50%] px-1 text-center text-[1.4rem] font-bold text-cach-l4 dark:text-cach-l1">
          Te hemos enviado un correo a tu cuenta institucional con el código de
          verificación
        </div>
        <div className="mb-4 text-center text-cach-l3 dark:text-cach-l2">
          Escribe tu {newMessage ? "nuevo código" : "código aqui"}
        </div>
        <div className="mb-16 flex h-[20%] w-[35%] flex-col pt-4">
          {/* Unos cuadraditos para ingresar cada digito del codigo */}
          {isSended ? <SecurityCodeInput value={code} setChange={setCode}/> : <div></div> }
          {/* <div className="flex flex-row justify-around pb-3">
            <input
              id="code-1"
              className="focus:shadow-outline h-14 w-14 rounded-xl border border-cach-l3 bg-transparent text-center text-xl text-gray-700 dark:text-cach-l1"
              type="text"
              onChange={e => validate(e.target.value, 1)}
              maxLength="1"
              value={inputs.code1}
            />
            <input
              id="code-2"
              className="focus:shadow-outline h-14 w-14 rounded-xl border border-cach-l3 bg-transparent text-center text-xl text-gray-700 dark:text-cach-l1"
              type="text"
              onChange={e => validate(e.target.value, 2)}
              maxLength="1"
              value={inputs.code2}
            />
            <input
              id="code-3"
              className="focus:shadow-outline h-14 w-14 rounded-xl border border-cach-l3 bg-transparent text-center text-xl text-gray-700 dark:text-cach-l1"
              type="text"
              onChange={e => validate(e.target.value, 3)}
              maxLength="1"
              value={inputs.code3}
            />
            <input
              id="code-4"
              className="focus:shadow-outline h-14 w-14 rounded-xl border border-cach-l3 bg-transparent text-center text-xl text-gray-700 dark:text-cach-l1"
              type="text"
              onChange={e => validate(e.target.value, 4)}
              maxLength="1"
              value={inputs.code4}
            />
            <input
              id="code-5"
              className="focus:shadow-outline h-14 w-14 rounded-xl border border-cach-l3 bg-transparent text-center text-xl text-gray-700 dark:text-cach-l1"
              type="text"
              onChange={e => validate(e.target.value, 5)}
              maxLength="1"
              value={inputs.code5}
            />
            <input
              id="code-6"
              className="focus:shadow-outline h-14 w-14 rounded-xl border border-cach-l3 bg-transparent text-center text-xl text-gray-700 dark:text-cach-l1"
              type="text"
              onChange={e => validate(e.target.value, 6)}
              maxLength="1"
              value={inputs.code6}
            />
          </div> */}
          {/* alink para solicitar un nuevo codigo */}
          <div className="mb-4 text-center text-cach-l3 dark:text-cach-l2">
            <a
              href="#"
              className="text-cach-l3 dark:text-cach-l2"
              onClick={newCodeGenerate}
            >
              {isSended ? "Reenviar código" : "Solicitar código"}
            </a>
          </div>
        </div>
        {/* Mensaje de error */}
        {error && (
          <div className="mb-4 text-center text-red-400  dark:text-red-700">
            {error}
          </div>
        )}
        
        <div className="flex h-[20%] w-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-around">
            <button
              className="mb-3 mt-2 flex h-10 min-h-8 w-[20%] items-center justify-center rounded-xl bg-cach-l3 text-cach-l1 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={matchCode}
              disabled={code.length < 4}
            >
              Siguiente
            </button>
          </div>
          <div className="pt-4 text-xl text-cach-l3 opacity-30 dark:text-cach-l2">
            <em>Muy pronto, mejoraremos nuestro diseño !!</em>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verify;
