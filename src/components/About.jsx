import { Link } from "react-router-dom";
import heroImage from "../assets/about-hero.png";

export default function About() {
  return (
    <section className="about">
      <img
        src={heroImage}
        alt="Guy sitting on the roof of his camper van underneath the stars."
        className="about__hero-img"
      />
      <div className="about__content">
        <h1 className="about__heading">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <div className="about__text">
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="call-to-action__container">
          <div>
            <p className="call-to-action__text">Your destination is waiting.</p>
            <p className="call-to-action__text">Your van is ready.</p>
          </div>
          <Link to="/vans" className="call-to-action__link">
            <p>Explore our vans</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
