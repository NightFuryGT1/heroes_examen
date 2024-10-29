// src/pages/HeroDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE_URL = 'https://superheroapi.com/api/3b1f895a25597e0d8a0306f843a1e830';

function HeroDetail() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHeroDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        const data = await response.json();
        setHero(data);
      } catch (error) {
        console.error('Error fetching hero details:', error);
      }
    };
    fetchHeroDetails();
  }, [id]);

  if (!hero) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{hero.name}</h1>
      <img src={hero.image.url} alt={hero.name} className="img-fluid mb-4" />
      <p><strong>Full Name:</strong> {hero.biography['full-name']}</p>
      {/* Add other hero details here */}
    </div>
  );
}

export default HeroDetail;
