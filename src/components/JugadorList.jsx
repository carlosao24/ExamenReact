import { useState, useEffect } from "react";
import JugadorCard from "./JugadorCard";
import "./JugadorList.css";

export default function JugadorList({ onTotalChange }) {
  const [jugadores, setJugadores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJugadores = async () => {
      try {
        const response = await fetch("https://jugadores.up.railway.app/players");
        if (!response.ok) throw new Error("Error al conectar con la API");
        
        const dataJson = await response.json();
        
        setJugadores(dataJson.data);
        
        onTotalChange(dataJson.data.length);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchJugadores();
  }, [onTotalChange]);

  // Estados de la UI
  if (cargando) return <div className="estado-msg">Cargando jugadores...</div>;
  if (error) return <div className="estado-msg error">Error: {error}</div>;
  if (jugadores.length === 0) return <div className="estado-msg">No se encontraron jugadores.</div>;

  return (
    <div className="jugador-list">
      {jugadores.map((jugador) => (
        <JugadorCard key={jugador.id} jugador={jugador} />
      ))}
    </div>
  );
}