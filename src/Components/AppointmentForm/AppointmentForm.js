import { useState } from "react";

const AppointmentForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState();
  const [timeSlot, setTimeSlot] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phoneNumber, date, timeSlot });
    setName("");
    setPhoneNumber("");
    setDate();
    setTimeSlot("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date of Appointment:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="timeSlot">Book Time Slot:</label>
        <select
          name="timeSlot"
          id="timeSlot"
          required
          className="form-control"
          placeholder="Select time slot"
          ariaDescribedby="helpId"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        >
          <option value="8">8:00</option>
          <option value="9">9:00</option>
          <option value="10">10:00</option>
        </select>
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default AppointmentForm;
