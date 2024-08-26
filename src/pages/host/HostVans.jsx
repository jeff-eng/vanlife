import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    async function getHostVans() {
      try {
        const response = await fetch('/api/host/vans');
        const data = await response.json();
        setHostVans(data.vans);
      } catch (err) {
        console.error(err);
      }
    }

    getHostVans();
  });

  const hostVanElements = hostVans.map(hostVan => {
    return (
      <Link
        to={`/host/vans/${hostVan.id}`}
        key={hostVan.id}
        className="host-van-link"
      >
        <article className="host-van">
          <img className="host-van__img" src={hostVan.imageUrl} />
          <h2 className="host-van__heading">{hostVan.name}</h2>
          <p className="host-van__rate">${hostVan.price}/day</p>
        </article>
      </Link>
    );
  });

  return (
    <section class="host-vans-section">
      <h1 className="host-vans-heading">Your listed vans</h1>
      <div class="host-vans-wrapper">
        {hostVans.length ? hostVanElements : 'Loading vans...'}
      </div>
    </section>
  );
}
