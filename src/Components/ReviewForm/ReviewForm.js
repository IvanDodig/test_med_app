import { useEffect, useState } from "react";
import "./ReviewForm.css";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    }
    fetch("https://api.npoint.io/9a5543d36f1460da2f63")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleProvideFeedback = (doctorId) => {};

  return (
    <div className="review-form-container">
      <h3 className="review-form__page-title">Reviews</h3>
      <table className="review-form__table">
        <thead className="review-form__table-header">
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.speciality}</td>
              <td>
                <button onClick={() => handleProvideFeedback(doctor.id)}>
                  Click here
                </button>
              </td>
              <td>{doctor.review ? doctor.review : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;
