import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import "./Register.css";
import { UserContext } from "../../UserContext.jsx";

function Register() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const onClickHandle = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    if (contraseña.length <= 5) {
      setError("La contraseña debe ser mayor a 5 caracteres");
      setLoading(false);
      return;
    }

    if (contraseña !== confirmar) {
      setError("Las contraseñas deben ser iguales");
      setLoading(false);
      return;
    }

    const result = await register(email, contraseña);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error || "Error al registrar usuario");
    }

    setLoading(false);
  };

  return (
    <>
      <h1>Registro</h1>
      <form action="" className="contenedorInput" onSubmit={onClickHandle}>
        {error && <div className="error-message">{error}</div>}
        <label htmlFor="inputEmail">Email</label>
        <input
          id="inputEmail"
          type="email"
          placeholder="Ingresatumail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="inputContraseña">Contraseña</label>
        <input
          id="inputContraseña"
          type="password"
          placeholder="Ingresa tu contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        <label htmlFor="inputConfirmarContraseña">Confirmar contraseña</label>
        <input
          id="inputConfirmarContraseña"
          type="password"
          placeholder="Ingresa tu contraseña"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Enviar"}
        </button>
      </form>
    </>
  );
}

export default Register;
