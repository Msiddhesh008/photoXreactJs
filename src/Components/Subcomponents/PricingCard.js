import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const PricingCard = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  return (
    <div className="col-lg-4" data-aos="zoom-in">
      <div className={"card card-1 text-light my-4 mx-auto "+props.ht}>
        <div className="card-body">
          <h5 className="text-uppercase fw-bold mb-5">{props.membership}</h5>
          <h1 className="display-4">
            <i className="fas fa-dollar-sign iconStyle" />
            {props.pricing}
          </h1>
          <ul className="list-unstyled">
            <li className="fw-bold py-3 card-list-item">Photoshop</li>
            <li className="fw-bold py-3 card-list-item">After Effects</li>
            <li className="fw-bold py-3 card-list-item">Graphic Design</li>
            <li className="fw-bold py-3 card-list-item">Video Montage</li>
          </ul>
          <a
            href="#"
            className="btn rounded-2 tw-bold text-white signup" style={{background:"#F40009"}}
          >
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
