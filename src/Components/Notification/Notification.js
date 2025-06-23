import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Notification.css";

const Notification = ({ children, updateNotifications }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState({});

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("email");
    const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));
    const storedAppointmentData = JSON.parse(
      localStorage.getItem("appointmentData")
    );

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
    setDoctorData(storedDoctorData || null);
    setAppointmentData(storedAppointmentData || null);
  }, [updateNotifications]);

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
                <strong>Speciality:</strong> {doctorData?.speciality}
              </p>
              <p className="appointment-card__message">
                <strong>Name:</strong> {appointmentData?.name}
              </p>
              <p className="appointment-card__message">
                <strong>Phone Number:</strong> {appointmentData?.phoneNumber}
              </p>
              <p className="appointment-card__message">
                <strong>Date of Appointment:</strong> {appointmentData?.date}
              </p>
              <p className="appointment-card__message">
                <strong>Time slot:</strong> {appointmentData?.timeSlot}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;
