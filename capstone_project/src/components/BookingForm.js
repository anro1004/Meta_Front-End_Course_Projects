import React, { useState } from 'react';

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Otro',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    onSubmit(formData); // Llama a la función submitForm con los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fecha:
        <input type="date" name="date" value={formData.date} onChange={(e) => {
          handleChange(e);
          onDateChange(e); // Actualiza los horarios disponibles
        }} />
      </label>
      <label>
        Hora:
        <select name="time" value={formData.time} onChange={handleChange}>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <label>
        Número de Invitados:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          min="1"
          max="6"
          onChange={handleChange}
        />
      </label>
      <label>
        Ocasión:
        <select name="occasion" value={formData.occasion} onChange={handleChange}>
          <option value="Cumpleaños">Cumpleaños</option>
          <option value="Aniversario">Aniversario</option>
          <option value="Otro">Otro</option>
        </select>
      </label>
      <button type="submit">Reservar</button>
    </form>
  );
};

export default BookingForm;