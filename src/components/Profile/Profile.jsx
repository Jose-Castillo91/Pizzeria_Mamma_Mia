import { useContext } from "react";
import { useNavigate } from "react-router";
import "./Profile.css";
import { UserContext } from "../../UserContext.jsx";

function Profile() {
  const { email, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Perfil de Usuario</h2>

      <p className="profile-email">
        <strong>Email:</strong> {email}
      </p>

      <button className="profile-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Profile;
