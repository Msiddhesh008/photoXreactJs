import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, [])

  return (
    <section id="banner">
      <div className="text-light text-md-end text-center  banner">
        <h1 className="display-4 banner-heading " data-aos="fade-left">
          Welcome to <span className="text-uppercase">Photo</span>
          <span className="display-2 x fw-normal">X</span>
          <p className="lead banner-par ">
            Lorem ipsum dolor sit amet consector adipicing.
          </p>
        </h1>
      </div>
    </section>
  );
};

export default Banner;
