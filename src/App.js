import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Landing_Page/LandingPage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/SignUp";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation/BookingConsultation";
import Notification from "./Components/Notification/Notification";
import { useState } from "react";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ProfileForm from "./Components/ProfileCard/ProfileCard";
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout";

function App() {
  const [updateNotifications, setUpdateNotifications] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Notification updateNotifications={updateNotifications}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/instant-consultation"
              element={<InstantConsultation />}
            />
            <Route
              path="/booking-consultation"
              element={
                <BookingConsultation
                  setUpdateNotifications={setUpdateNotifications}
                />
              }
            />
            <Route path="/review-form" element={<ReviewForm />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/reports" element={<ReportsLayout />} />
          </Routes>
        </Notification>
      </BrowserRouter>
    </>
  );
}

export default App;
