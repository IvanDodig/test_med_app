import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FindDoctorSearch.css";

const initSpeciality = [
  "Dentist",
  "Gynecologist/obstetrician",
  "General Physician",
  "Dermatologist",
  "Ear-nose-throat (ent) Specialist",
  "Homeopath",
  "Ayurveda",
];

const FindDoctorSearch = () => {
  const navigate = useNavigate();
  const [doctorResultHidden, setDoctorResultHidden] = useState(true);
  const [searchDoctor, setSearchDoctor] = useState("");
  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);
    setDoctorResultHidden(true);
    navigate(`/booking-consultation?speciality=${speciality}`);
    window.location.reload();
  };
  return (
    <div className="finddoctor">
      <center>
        <div
          className="home-search-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="doctor-search-box">
            {/* <p>Perform a search to see the results.</p> */}

            <input
              type="text"
              className="search-doctor-input-box"
              placeholder="Search doctors, clinics, hospitals, etc."
              onFocus={() => setDoctorResultHidden(false)}
              onBlur={() => setDoctorResultHidden(true)}
              value={searchDoctor}
              onChange={(e) => setSearchDoctor(e.target.value)}
            />

            <div className="findiconimg">
              <img
                className="findIcon"
                src={process.env.PUBLIC_URL + "/images/search.svg"}
                alt=""
              />
            </div>
            <div
              className="search-doctor-input-results"
              hidden={doctorResultHidden}
            >
              {initSpeciality.map((speciality) => (
                <div
                  className="search-doctor-result-item"
                  key={speciality}
                  onMouseDown={() => handleDoctorSelect(speciality)}
                >
                  <span>
                    <img
                      src={process.env.PUBLIC_URL + "/images/search.svg"}
                      alt=""
                      style={{ height: "10px", width: "10px" }}
                      width="12"
                    />
                  </span>
                  <span>{speciality}</span>
                  <span>SPECIALITY</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default FindDoctorSearch;
