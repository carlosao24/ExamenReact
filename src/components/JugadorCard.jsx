import { useState } from "react";
import "./JugadorCard.css";

export default function JugadorCard({ jugador }) {
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div className="jugador-card">
      <div className="card-img-container">
        <img 
          src={imgError ? "https://via.placeholder.com/150" : jugador.photoUrl} 
          alt={`Foto de ${jugador.name}`} 
          onError={handleImageError}
        />
      </div>
      <div className="card-info">
        <h3>{jugador.name}</h3>
        <p><strong>Posición:</strong> {jugador.position}</p>
        <p><strong>Número:</strong> {jugador.number}</p>
        <p><strong>Club:</strong> {jugador.currentClub}</p>
        <p><strong>Selección:</strong> {jugador.nationalTeam}</p>
        <p><strong>Edad:</strong> {jugador.age} años</p>
      </div>
    </div>
  );
}