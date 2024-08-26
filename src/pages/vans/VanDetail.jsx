import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getVanData() {
      const response = await fetch(`/api/vans/${id}`);
      const data = await response.json();
      setVan(data.vans);
    }

    getVanData();
  }, [id]);

  return (
    <article>
      {van ? (
        <div>
          <img src={van.imageUrl} />
          <h2>{van.name}</h2>
          <p className="">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button>Rent this van</button>
        </div>
      ) : (
        <p>Loading van info...</p>
      )}
    </article>
  );
}
