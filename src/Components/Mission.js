import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import MissionCards from "./Subcomponents/MissionCards";
import Title from "./Subcomponents/Title";
import cam from "../Images/cam.png";

const Mission = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  return (
    <section className="p-5 mission">
      <div className="container-fluid">
        <div className="row  text-center">
          {/* --- title -- */}
          <Title
            title="Our Mission"
            para="
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen"
            text="text-secondary"
            TitleColor="text-white" 
            data-aos="zoom-in"
          />
          {/* -- end of title -- */}

          <div className="row my-5">
            <MissionCards
              iconName="fas fa-cogs fa-5x mb-4 iconStyle "
              title="Creativity"
              para="
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen"
            />

            <MissionCards
              iconName="fas fa-handshake fa-5x mb-4 iconStyle"
              title="Experience"
              para="
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen"
            />

            <MissionCards
              iconName="fas fa-thumbs-up fa-5x mb-4 iconStyle"
              title="Quality"
              para="
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen"
            />
          </div>
        </div>

        <div className="container">
          <div className="row align-align-items-center">
            <div className="col-lg-5 text-center">
              <img
                src={cam}
                alt="Logo"
                width={"350"}
                className="img-fluid camera-img"
                data-aos="slide-right"
              />
            </div>
            <div className="col-lg-7 text-lg-end text-center mission-text text-light">
              <h1>We know what we do</h1>
              <p className="text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
