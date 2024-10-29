// src/components/HeroList.jsx
import React from 'react';
import HeroCard from './HeroCard';

function HeroList({ heroes }) {
  if (!heroes || heroes.length === 0) {
    return <p className="text-center">No heroes found.</p>;
  }

  return (
    <div className="row">
      {heroes.map((hero, index) => (
        hero ? (
          <HeroCard key={hero.id || index} hero={hero} />
        ) : null // Skip rendering if hero is null
      ))}
    </div>
  );
}

export default HeroList;
