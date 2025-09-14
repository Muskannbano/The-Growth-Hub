import React from "react";
import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";
import { useAuth } from "../store/auth";

const About = () => {
  const {user} = useAuth()
  return (
    <>
      <main>
        <section className="about-section-hero">
          <div className="about-container">
            <div className="about-hero-content">
              <p>Hii User, {user.username}</p>
              <h1>Why Choose Us?</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
                culpa doloribus, officia id ipsam optio assumenda voluptatibus
                fuga magnam distinctio repudiandae aut est quis quod nam autem a
                eaque laborum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
                culpa doloribus, officia id ipsam optio assumenda voluptatibus
                fuga magnam distinctio repudiandae aut est quis quod nam autem a
                eaque laborum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
                culpa doloribus, officia id ipsam optio assumenda voluptatibus
                fuga magnam distinctio repudiandae aut est quis quod nam autem a
                eaque laborum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel
                aliquam ipsam illo molestiae laudantium, quasi amet quibusdam
                libero ducimus.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">Contact Now</button>
                </NavLink>
                <button className="btn secondary-btn">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-image-about">
              <img src="/images/about.png" alt=""
              width="600" height="600" />
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  );
};

export default About;
