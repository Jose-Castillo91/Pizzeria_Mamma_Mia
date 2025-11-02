import { useState } from "react";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const [confirmar, setconfirmar] = useState("");

  const onClickHandle = (event) => {
    event.preventDefault();
    console.log({ email, contraseña, confirmar });
    if (contraseña.length <= 5) {
      alert("La contraseña debe ser mayor a 5 caracteres");
    }
    if (contraseña !== confirmar) {
      alert("Las contraseñas deben ser iguales");
    }
  };

  function onEmailChange({ target }) {
    setEmail(target.value);
  }

  function onPasswordChange({ target }) {
    setcontraseña(target.value);
  }

  function onConfirmPassword({ event }) {
    setconfirmar(event.target.value);
  }

  return (
    <>
      <h1>Registro</h1>
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
        <label htmlFor="inputConfirmarContraseña">Confirmar contraseña</label>
        <input
          id="inputConfirmarContraseña"
          type="text"
          placeholder="Ingresa tu contraseña"
          value={confirmar}
          onChange={onConfirmPassword}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Register;
