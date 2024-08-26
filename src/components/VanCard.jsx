import { Link } from "react-router-dom";

export default function VanCard({ van }) {
  return (
    <article className="van-card">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
      >
        <img
          src={van.imageUrl}
          className="van-card__img"
          alt={`Image of ${van.name} van.`}
        />
        <div className="van-card__info-wrapper">
          <h2 className="van-card__title">{van.name}</h2>
          <div>
            <p className="van-card__price">${van.price}</p>
            <span className="van-card__rate-day">/day</span>
          </div>
        </div>
        <p className={`van-card__type ${van.type}`}>{van.type}</p>
      </Link>
    </article>
  );
}
