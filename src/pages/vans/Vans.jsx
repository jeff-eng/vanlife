import { useEffect, useState } from 'react';
import VanCard from '../../components/VanCard';

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    async function getVans() {
      try {
        const response = await fetch('/api/vans');
        const data = await response.json();
        setVans(data.vans);
      } catch (err) {
        console.error(err);
      }
    }

    getVans();
  }, []);

  const vanElements = vans.map(van => {
    return <VanCard key={van.id} van={van} />;
  });

  return (
    <section className="vans">
      <h1>Explore our van options</h1>
      <div className="vans-grid">{vanElements}</div>
    </section>
  );
}
