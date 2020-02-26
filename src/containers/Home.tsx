import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Message from "../components/Message";

import About from "../components/About";

import { ReactComponent as LightCurve } from "../images/curves/light.svg";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Section
        title="Product Manager"
        company="xibo"
        color="is-white"
        description={`Our goal was to disrupt the event industry with innovative marketing services that 10x our client’s engagement and reach. My role was to develop these products; creating UI mockups and leading our dev team in figuring out how we could scale and automate.`}
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
      <LightCurve className="curve is-marginless is-paddingless" />
      <Section
        title="Freelance Web Designer"
        company="alexhughes.io"
        description={`Founding my own web design studio, I built beautiful, mobile-first websites focused around the user. I built everything from tiny hairdressing blogs to the web app for one of the most downloaded plugins on WordPress. That’s probably why I was consistently in the top 1% of freelancers on PeoplePerHour.com.`}
        counter={{ start: 2015, end: 2018 }}
        icons={[
          {
            icon: "fa-browser",
            heading: "websites built",
            title: "80+",
            color: "has-text-info"
          },
          {
            icon: "fa-chart-line",
            heading: "of freelancers",
            title: "1%",
            color: "has-text-success"
          },
          {
            icon: "fa-download",
            heading: "downloads",
            title: "3mil",
            color: "has-text-danger"
          }
        ]}
      />
      <LightCurve className="curve flip-vertical is-marginless is-paddingless" />
      <Section
        title="Software Engineer"
        color="is-white"
        company="Huckletree"
        description={`As the #2 technical hire at Huckletree we were focused on iterating fast, and building systems that could scale across our five locations around Europe, working mainly in TypeScript (Node + React).`}
        counter={{ start: 2017, end: 2019 }}
        icons={[
          {
            icon: "fa-map-marked-alt",
            heading: "locations",
            title: "5+",
            color: "has-text-info"
          },
          {
            icon: "fa-user-friends",
            heading: "dev hire",
            title: "2nd",
            color: "has-text-danger"
          },
          {
            icon: "fa-coffee-togo",
            heading: "coffees consumed",
            title: "100+",
            color: "has-text-success"
          }
        ]}
      />
      <LightCurve className="curve is-marginless is-paddingless" />
      <Section
        title="Software Engineer"
        company="Tumelo"
        description={`The platform we’re building at Tumelo helps people see exactly which companies they own in their investment funds and enables them to take action. Recently, I've been working on a number of TypeScript-based projects, including the project arcitecture, data fetching, and state management.`}
        counter={{ start: 2019, end: 2020 }}
        icons={[
          {
            icon: "fa-tasks-alt",
            heading: "projects managed",
            title: "3+",
            color: "has-text-info"
          },
          {
            icon: "fa-funnel-dollar",
            heading: "funds analysed",
            title: "1K",
            color: "has-text-success"
          },
          {
            icon: "fa-vial",
            heading: "libraries tested",
            title: "15+",
            color: "has-text-danger"
          }
        ]}
      />
      <LightCurve className="curve flip-vertical is-marginless is-paddingless" />
      <Message />
      <Footer />
    </>
  );
}

export default Home;
