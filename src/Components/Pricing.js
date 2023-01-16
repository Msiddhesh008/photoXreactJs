import React from "react";
import PricingCard from "./Subcomponents/PricingCard";
import Title from "./Subcomponents/Title";

const Pricing = () => {
  return (
    <section className="bg-light text-center p-5">
      <div className="container-fluid">
    <div className="row  text-center">
        {/* --- title -- */}
        <Title
          title="Join Us"
          para="
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen"
          text="lead fw-normal"
          TitleColor="text-dark"
          underlineColor="border-dark"
        />
        {/* -- end of title -- */}

        <div className="row align-items-center  m-auto">

          <PricingCard membership="Monthly Membership" pricing=" 19" />

          <PricingCard
            membership="Unlimited Access"
            pricing=" 499"
            ht="py-5"
          />

          <PricingCard membership="Annual Membership" pricing=" 199" />
        </div>

        <div className="my-5">
          <h2 className="text-muted mb-4">Thanks for being with us!</h2>
          <i className="fas fa-coffee fa-3x iconStyle" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
