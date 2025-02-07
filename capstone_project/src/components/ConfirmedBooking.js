import React from "react";
import { useNavigate } from "react-router-dom"; // Para la navegación
import "./ConfirmedBooking.css"; // Importa los estilos

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmed-booking">
      <h1>Reserva Confirmada</h1>
      <p>¡Gracias por reservar en Little Lemon! Tu mesa ha sido confirmada.</p>
      <button onClick={() => navigate("/")}>Volver al Inicio</button>
    </div>
  );
};

export default ConfirmedBooking;