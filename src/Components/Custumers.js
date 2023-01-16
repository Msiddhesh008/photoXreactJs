import React from "react";
import Title from "./Subcomponents/Title";

const Custumers = () => {
  return (
    <section className="p-5 customers">
      <div className="container-fluid">
    <div className="row  text-center">
        {/* --- title -- */}
        <Title
          title="Happy Customers"
          para="
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen"
          text="text-secondary"
          TitleColor="text-white"
        />
        {/* -- end of title -- */}

        <div
          id="carouselExampleCaptions"
          className="carousel slide w-100 m-auto"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <img
                src={
                  "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                }
                className="img-fluid rounded-circle m-5"
                width={150}
                alt="..."
              />
              <blockquote className="blockquote text-white">
                <p className="mb-5 fs-6 w-75 m-auto">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen
                </p>
              </blockquote>
              <h6 className="text-light text-uppercase fw-bold">
                Jesica Kevin
              </h6>
              <h2 className="mb-5 text-warning">★★★★★</h2>
            </div>

            <div className="carousel-item text-center">
              <img
                src={
                  "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                }
                className="img-fluid rounded-circle m-5"
                width={150}
                alt="..."
              />
              <blockquote className="blockquote text-white">
                <p className="mb-5 fs-6 w-75 m-auto">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen
                </p>
              </blockquote>
              <h5 className="text-light text-uppercase fw-bold ">John smith</h5>
              <h2 className="mb-5 text-warning">★★★★★</h2>
            </div>

            <div className="carousel-item text-center">
              <img
                src={
                  "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                }
                className="img-fluid rounded-circle m-5"
                width={150}
                alt="..."
              />
              <blockquote className="blockquote text-white">
                <p className="mb-5 fs-6 w-75 m-auto">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen
                </p>
              </blockquote>
              <h5 className="text-light text-uppercase fw-bold">Jake lorens</h5>
              <h2 className="mb-5 text-warning">★★★★★</h2>
            </div>
          </div>
          <button
            className="carousel-control-prev d-none"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next d-none"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custumers;
