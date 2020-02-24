import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Message from "../components/Message";

import About from "../components/About";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Section
        title="Product Manager at xibo"
        description={`Our goal was to disrupt the event industry with innovative marketing services that 10x our client’s engagement and reach. My role was to develop these products; creating mockups and leading our dev team in figuring out how we could scale and automate.`}
        counter={{ start: 2013, end: 2015 }}
        icons={[
          {
            icon: "fa-sack-dollar",
            heading: "in revenue",
            title: "1mil",
            color: "has-text-success"
          },
          {
            icon: "fa-users-cog",
            heading: "dev team",
            title: "3+",
            color: "has-text-info"
          },
          {
            icon: "fa-layer-plus",
            heading: "new services",
            title: "2",
            color: "has-text-danger"
          }
        ]}
      />

      <Message />
      <Footer />
    </>
  );
}

export default Home;
