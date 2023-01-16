import React from "react";
import CollectionCard from "./Subcomponents/CollectionCard";
import Title from "./Subcomponents/Title";

export const Collections = () => {
  return (
    <section id="collections" className="bg-secondary py-4">
      <div className="container-fluid">
    <div className="row  text-center">
        <Title
          title="Collection"
          para="
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen"
          text="lead fw-normal"
          TitleColor="text-dark"
          underlineColor="border-dark"
        />
        <div className="row m-auto">
          <CollectionCard
            imgLink="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            collectionCardTitle="Nature Photography"
          />
          <CollectionCard
            imgLink="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            collectionCardTitle="Wedding Photography"
          />
          <CollectionCard
            imgLink="https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            collectionCardTitle="Family Photography"
          />
          <CollectionCard
            imgLink="https://images.unsplash.com/photo-1599920609546-63c1b2422f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            collectionCardTitle="Baby Photography"
          />
          <CollectionCard
            imgLink="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            collectionCardTitle="Party Photography"
          />
          <CollectionCard
            imgLink="https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            collectionCardTitle="Fassion Photography"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
