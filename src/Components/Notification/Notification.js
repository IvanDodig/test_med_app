import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Notification.css";

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState({});

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("email");
    const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));
    const storedAppointmentData = JSON.parse(
      localStorage.getItem(storedDoctorData?.name)
    );

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      {children}
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorData?.name}
              </p>
              <p className="appointment-card__message">
                <strong>speciality:</strong> {doctorData?.name}
              </p>
              <p className="appointment-card__message">
                <strong>Name:</strong> {doctorData?.name}
              </p>
              <p className="appointment-card__message">
                <strong>Phone Number:</strong> {doctorData?.phone}
              </p>
              <p className="appointment-card__message">
                <strong>Date of Appointment:</strong> {appointmentData?.date}
              </p>
              <p className="appointment-card__message">
                <strong>Time slot:</strong> {doctorData?.name}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;
