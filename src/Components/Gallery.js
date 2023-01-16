import React from "react";
import Title from "./Subcomponents/Title";
import GalleryCard from "./Subcomponents/GalleryCard";

const Gallery = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
    <div className="row  text-center">
        {/* --- title -- */}
        <Title
          title="Gallery"
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
        <ul className="list-inline text-center text-uppercase fw-bold my-4">
          <li
            className="list-inline-item gallery-list-item active-item"
            data-filter="all"
          >
            All<span className="mx-md-5 mx-3 text-muted">/</span>
          </li>
          <li className="list-inline-item gallery-list-item" data-filter="all">
            Wild Life<span className="mx-md-5 mx-3 text-muted">/</span>
          </li>
          <li className="list-inline-item gallery-list-item" data-filter="all">
            Nature<span className="mx-md-5 mx-3 text-muted">/</span>
          </li>
          <li className="list-inline-item gallery-list-item" data-filter="all">
            City
          </li>
        </ul>

        <div className="container-fluid">
          <div className="d-flex flex-wrap justify-content-center">
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1585426007948-fbc4076728f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              classNAme="nature"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1545&q=80"
              classNAme="nature"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1664516918198-e7ddd1bade3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
              classNAme="nature"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1656860444750-dd91d7fecfc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="nature"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1669220929620-0525acdc2e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              classNAme="wildLife"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1669281151275-1d430c0a3496?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80"
              classNAme="wildLife"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="wildLife"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1504715329877-f69f5258f4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              classNAme="wildLife"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="wildLife"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1575532777978-623355a90473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              classNAme="wildLife"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1502051897604-58025075ce54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              classNAme="wildLife"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              classNAme="wildLife"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="city"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1625895197185-efcec01cffe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="city"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1626155399229-a59970db8478?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="city"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1435536822168-639c33ca2eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="city"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1626155399627-86488538895d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="city"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1672250164293-904288338586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="city"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1669472386738-06ad234905ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="city"
            />
            <GalleryCard
              imgLink="https://images.unsplash.com/photo-1670644009691-7e57accee1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              classNAme="city"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
