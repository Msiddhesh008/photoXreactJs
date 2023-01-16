import React from "react";
import Title from "./Subcomponents/Title";
import drone from "./../Images/drone2.png";

const Contact = () => {
  return (
    <section className="contact p-5 bg-dark">
      <div className="container-fluid">
        <div className="row">
          {/* --- title -- */}
          <Title
            title="Get In Touch"
            underlineColor="border-white"
            TitleColor="text-white"
          />
          {/* -- end of title -- */}
          <div className="row">
            <form className="col-lg-6 text-start p-3 text-white d-flex flex-column align-items-center">
              <div className="form-group w-100 p-3 mb-2">
                <label for="name">Name</label>
                <input
                  type="email"
                  className="form-control input"
                  id="name"
                  aria-describedby="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group w-100 p-3 mb-2">
                <label for="exampleInputPassword1">Email</label>
                <input
                  type="email"
                  className="form-control input"
                  id="exampleInputPassword1"
                  placeholder="Email"
                />
              </div>
              <div className="form-check p-3 ps-4 mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Announcement
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-form tw-bold text-white w-75"
              >
                Subscribe
              </button>
            </form>

            <div className="text-white col-lg-6">
              <img
                src={drone}
                className="img-fluid drone"
                width={450}
                alt="drone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
