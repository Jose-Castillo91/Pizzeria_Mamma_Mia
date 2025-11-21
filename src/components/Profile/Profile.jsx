import "./Profile.css";

function Profile() {
  const email = "usuario@ejemplo.com";

  const handleLogout = () => {
    console.log("Cerrar sesión sin funcionalidad por ahora)");
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