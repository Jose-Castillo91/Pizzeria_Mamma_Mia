
import { Link } from "react-router";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <main className="nf-root" role="main">
        <div className="nf-card">
          <div className="nf-illustration" aria-hidden>
            <svg
              viewBox="0 0 120 120"
              width="120"
              height="120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="60" cy="60" r="50" />
              </g>
            </svg>
          </div>

          <h1 className="nf-title">404 — Página no encontrada</h1>
          <p className="nf-text">
            La página que buscas no existe o se ha movido.
          </p>
           <div className="nf-actions">
          <Link to={"/"} className="nf-btn nf-btn--primary">Volver al home</Link>
        </div>

          <small className="nf-foot">
            Si crees que esto es un error, contacta con soporte.
          </small>
        </div>
      </main>

    </div>
  );
}

export default NotFound;
