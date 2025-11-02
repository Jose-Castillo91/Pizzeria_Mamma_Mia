import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [contraseña, setcontraseña] = useState("");



  const onClickHandle = (event) => {
    event.preventDefault();
    console.log({ email, contraseña });
    if (contraseña.length <= 5) {
      alert("La contraseña debe ser mayor a 5 caracteres");
    }
  };

  function onEmailChange({ target }) {
    setEmail(target.value);
  }

  function onPasswordChange({ target }) {
    setcontraseña(target.value);
  }

  return (
    <>
      <h1>Inicio De Sesión</h1>
      <form action="" className="contenedorInput" onSubmit={onClickHandle}>
        <label htmlFor="inputEmail">Email</label>
        <input
          id="inputEmail"
          type="text"
          placeholder="Ingresatumail@gmail.com"
          value={email}
          onChange={onEmailChange}
          required
        />

        <label htmlFor="inputContraseña">Contraseña</label>
        <input
          id="inputContraseña"
          type="text"
          placeholder="Ingresa tu contraseña"
          value={contraseña}
          onChange={onPasswordChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Login;
