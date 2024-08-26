import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

export default function HostVanDetail() {
  const [hostVan, setHostVan] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getHostVanData() {
      try {
        const response = await fetch(`/api/host/vans/${id}`);
        const data = await response.json();

        const [hostVanData] = data.vans;
        setHostVan(hostVanData);
      } catch (err) {
        console.error(err);
      }
    }

    getHostVanData();
  }, [hostVan]);

  return (
    <article>
      <Link to=".." relative="path">
        &larr; <span>Back to all vans</span>
      </Link>
      {hostVan ? (
        <div className="host-van-detail">
          <header className="host-van-detail__header">
            <img
              className="host-van-detail__img"
              src={hostVan.imageUrl}
              alt="van"
            />
            <p className="host-van-detail__label">{hostVan.type}</p>
            <h1 className="host-van-detail__heading">{hostVan.name}</h1>
            <p className="host-van-detail__price">
              <span className="host-van-detail__amt">${hostVan.price}</span>/day
            </p>
          </header>
          <nav>
            <NavLink to={`/host/vans/${id}`}>Details</NavLink>
            <NavLink to={`/host/vans/${id}/pricing`}>Pricing</NavLink>
            <NavLink to={`/host/vans/${id}/photos}`}>Photos</NavLink>
          </nav>
          <Outlet />
        </div>
      ) : (
        <p>loading</p>
      )}
    </article>
  );
}
