import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h1 className="home__primary-heading">
        You got the travel plans, we got the travel vans.
      </h1>
      <h2 className="home__sub-heading">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </h2>
      <Link to="/vans" className="home__link">
        <p className="home__link">Find your van</p>
      </Link>
    </section>
  );
}
