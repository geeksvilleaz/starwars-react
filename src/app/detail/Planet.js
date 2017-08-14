import React from 'react';
import Collection from '../Collection';

const Planet = ({planet, displayItem}) => (
  <div className="detail">
    <h2>{planet.name}</h2>

    <div>
      <span className="label">Climate</span>
      <span className="value">{planet.climate}</span>
    </div>

    <div>
      <span className="label">Diameter</span>
      <span className="value">{planet.diameter}</span>
    </div>

    <div>
      <span className="label">Films</span>
      <span className="value">
         <Collection items={planet.films} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Gravity</span>
      <span className="value">{planet.gravity}</span>
    </div>

    <div>
      <span className="label">Orbital Period</span>
      <span className="value">{planet.orbital_period}</span>
    </div>

    <div>
      <span className="label">Population</span>
      <span className="value">{planet.population}</span>
    </div>

    <div>
      <span className="label">Residence</span>
      <span className="value">
         <Collection items={planet.residence} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Rotation Period</span>
      <span className="value">{planet.rotation_period}</span>
    </div>

    <div>
      <span className="label">Service Water</span>
      <span className="value">{planet.service_water}</span>
    </div>

    <div>
      <span className="label">Terrain</span>
      <span className="value">{planet.terrain}</span>
    </div>
  </div>
);

export default Planet;
