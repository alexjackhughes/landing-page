import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Large title</h1>
            <h2 className="subtitle">Large subtitle</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
