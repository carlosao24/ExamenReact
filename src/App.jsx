import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JugadorList from "./components/JugadorList";
import Footer from "./components/Footer";

function App() {
  // Estado para el contador del Navbar
  const [totalJugadores, setTotalJugadores] = useState(0);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar totalJugadores={totalJugadores} />
      <Header />
      <main style={{ flex: 1 }}>
        <JugadorList onTotalChange={setTotalJugadores} />
      </main>
      <Footer />
    </div>
  );
}

export default App;