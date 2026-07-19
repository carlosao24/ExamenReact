import "./Navbar.css";

export default function Navbar({ totalJugadores }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Catálogo FIFA</div>
      <div className="navbar-counter">
        Jugadores cargados: <strong>{totalJugadores}</strong>
      </div>
    </nav>
  );
}