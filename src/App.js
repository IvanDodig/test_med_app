import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/LandingPage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/SignUp";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation/BookingConsultation";
import Notification from "./Components/Notification/Notification";

function App() {
  return (
    <>
      <BrowserRouter>
        <Notification>
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
              element={<BookingConsultation />}
            />
          </Routes>
        </Notification>
      </BrowserRouter>
    </>
  );
}

export default App;
