import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";

const timesReducer = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.times;
    default:
      return state;
  }
};

const Booking = () => {

  /*const [apiData, setApiData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
        );

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);*/

  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await fetchAPI(new Date());
      dispatch({ type: "SET_TIMES", times });
    };
    fetchInitialTimes();
  }, []);

  const updateTimes = async (selectedDate) => {
    const newTimes = await fetchAPI(new Date(selectedDate));
    dispatch({ type: "SET_TIMES", times: newTimes });
  };

  // Función para manejar el envío del formulario
  const submitForm = async (formData) => {
    const isSuccessful = await submitAPI(formData);
    if (isSuccessful) {
      navigate("/confirmed"); // Navega a la página de confirmación
    }
  };

  return (
    <BookingForm
      availableTimes={availableTimes}
      onDateChange={(e) => updateTimes(e.target.value)}
      onSubmit={submitForm} // Pasa la función submitForm como prop
    />
  );
};

export default Booking;
