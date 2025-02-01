import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
  // Obtener la fecha actual en formato YYYY-MM-DD para validación
  const today = new Date().toISOString().split("T")[0];

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    date: Yup.date()
      .min(today, "La fecha no puede ser en el pasado")
      .required("La fecha es obligatoria"),
    time: Yup.string().required("Selecciona un horario"),
    guests: Yup.number()
      .min(1, "Mínimo 1 invitado")
      .max(6, "Máximo 6 invitados")
      .required("Indica el número de invitados"),
    occasion: Yup.string().required("Selecciona una ocasión"),
  });

  return (
    <Formik
      initialValues={{
        date: today,
        time: "",
        guests: 1,
        occasion: "Otro",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values); // Llama a la función submitForm con los datos del formulario
        resetForm(); // Reiniciar el formulario después de enviar
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className="booking-form">
          <label>Fecha:</label>
          <Field
            type="date"
            name="date"
            min={today}
            onChange={(e) => {
              setFieldValue("date", e.target.value);
              onDateChange(e); // Actualiza los horarios disponibles
            }}
          />
          <ErrorMessage name="date" component="div" className="error-message" />

          <label>Hora:</label>
          <Field as="select" name="time">
            <option value="">Selecciona una hora</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </Field>
          <ErrorMessage name="time" component="div" className="error-message" />

          <label>Número de Invitados:</label>
          <Field type="number" name="guests" min="1" max="6" />
          <ErrorMessage name="guests" component="div" className="error-message" />

          <label>Ocasión:</label>
          <Field as="select" name="occasion">
            <option value="Cumpleaños">Cumpleaños</option>
            <option value="Aniversario">Aniversario</option>
            <option value="Otro">Otro</option>
          </Field>
          <ErrorMessage name="occasion" component="div" className="error-message" />

          <button type="submit" aria-label="Reservar" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Reservar"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;











/*import React, { useState } from 'react';
import "./BookingForm.css";

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: new Date(),
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

export default BookingForm;*/