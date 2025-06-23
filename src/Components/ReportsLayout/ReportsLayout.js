import { useEffect, useState } from "react";
import "./ReportsLayout.css";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";

const INITIAL_FORM_DATA = { name: "", review: "", rating: 0 };

const ReportsLayout = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [reviewDoctorId, setReviewDoctorId] = useState([]);

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const [submitedReviews, setSubmitedReviews] = useState({});

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitedReviews((x) => ({ ...x, [reviewDoctorId]: formData }));
    setFormData(INITIAL_FORM_DATA);
    setReviewDoctorId();
  };

  return (
    <div className="review-form-container">
      <h3 className="review-form__page-title">Reports</h3>
      <table className="review-form__table">
        <thead className="review-form__table-header">
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download report</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.speciality}</td>
              <td>
                <button
                  onClick={() => setReviewDoctorId(doctor.name)}
                  disabled={!!submitedReviews[doctor.name]}
                >
                  View Report
                </button>
              </td>
              <td>
                <button
                  onClick={() => setReviewDoctorId(doctor.name)}
                  disabled={!!submitedReviews[doctor.name]}
                >
                  Download Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Popup
        style={{ backgroundColor: "#FFFFFF" }}
        modal
        open={!!reviewDoctorId}
        onClose={() => setReviewDoctorId()}
        className="review-form__popup"
      >
        <h3>Give Your Review</h3>

        <form onSubmit={handleFormSubmit} className="appointment-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((x) => ({ ...x, name: e.target.value }))
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              value={formData.review}
              onChange={(e) =>
                setFormData((x) => ({ ...x, review: e.target.value }))
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="review">Rating:</label>
            <div className="review-form__rating">
              <span
                onClick={() => setFormData((x) => ({ ...x, rating: 1 }))}
                class={`fa fa-star ${formData.rating > 0 ? "checked" : ""}`}
              ></span>
              <span
                onClick={() => setFormData((x) => ({ ...x, rating: 2 }))}
                class={`fa fa-star ${formData.rating > 1 ? "checked" : ""}`}
              ></span>
              <span
                onClick={() => setFormData((x) => ({ ...x, rating: 3 }))}
                class={`fa fa-star ${formData.rating > 2 ? "checked" : ""}`}
              ></span>
              <span
                onClick={() => setFormData((x) => ({ ...x, rating: 4 }))}
                class={`fa fa-star ${formData.rating > 3 ? "checked" : ""}`}
              ></span>
              <span
                onClick={() => setFormData((x) => ({ ...x, rating: 5 }))}
                class={`fa fa-star ${formData.rating > 4 ? "checked" : ""}`}
              ></span>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </Popup>
    </div>
  );
};

export default ReportsLayout;
