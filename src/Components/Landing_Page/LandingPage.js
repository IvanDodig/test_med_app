import DoctorCard from "../DoctorCard/DoctorCard";
import FindDoctorSearch from "../FindDoctorSearch/FindDoctorSearch";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <section className="hero-section">
        <div>
          <div data-aos="fade-up" className="flex-hero">
            <h1>
              Your Health 2<br />
              <span className="text-gradient">Our Responsibility</span>
            </h1>
            <div className="blob-cont">
              <div className="blue blob"></div>
            </div>
            <div className="blob-cont">
              <div className="blue1 blob"></div>
            </div>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at
              quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
            </h4>
            <a href="#services">
              <button className="button">Get Started</button>
            </a>
          </div>
        </div>
      </section>
      <FindDoctorSearch />
      <DoctorCard
        name="Dr. Jiao Yang"
        speciality={"Dentist"}
        experience={9}
        ratings={5}
      />
      <DoctorCard
        name="Dr. Denis Raj"
        speciality={"Dentist"}
        experience={24}
        ratings={4}
      />
      <DoctorCard
        name="Dr. Lyn Christie"
        speciality={"Dentist"}
        experience={11}
        ratings={3}
      />
    </>
  );
};

export default LandingPage;
