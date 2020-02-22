import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Message from "../components/Message";

function Home() {
  return (
    <>
      <Hero />
      <Section
        title="#2 Developer at xibo"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        counter={{ start: 2015, end: 2018 }}
      />
      <Message />
      <Footer />
    </>
  );
}

export default Home;
