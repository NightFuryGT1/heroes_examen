// src/components/HeroCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HeroCard({ hero }) {
  if (!hero || !hero.id) {
    return null; // Skip rendering if hero or hero.id is missing
  }

  const { id, name, image, biography } = hero;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        {image && image.url ? (
          <img
            src={image.url}
            className="card-img-top"
            alt={name}
          />
        ) : (
          <div
            className="card-img-top bg-secondary text-white d-flex align-items-center justify-content-center"
            style={{ height: '250px' }}
          >
            No Image Available
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title">{name || 'No Name Available'}</h5>
          <p className="card-text">
            <strong>Full Name:</strong> {biography?.['full-name'] || 'N/A'}
          </p>
          <Link to={`/hero/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

HeroCard.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.string, // Make it optional for now
    name: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    biography: PropTypes.shape({
      'full-name': PropTypes.string,
    }),
  }),
};

export default HeroCard;
