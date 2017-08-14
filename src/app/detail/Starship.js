import React from 'react';
import Collection from '../Collection';

const Starship = ({starship, displayItem}) => (
  <div className="detail">
    <h2>{starship.name}</h2>
    <div>
      <span className="label">MGLT</span>
      <span className="value">{starship.MGLT}</span>
    </div>

    <div>
      <span className="label">Cargo Capacity</span>
      <span className="value">{starship.cargo_capacity}</span>
    </div>

    <div>
      <span className="label">Consumables</span>
      <span className="value">{starship.consumables}</span>
    </div>

    <div>
      <span className="label">Cost In Credits</span>
      <span className="value">{starship.cost_in_credits}</span>
    </div>

    <div>
      <span className="label">Crew</span>
      <span className="value">{starship.crew}</span>
    </div>

    <div>
      <span className="label">Films</span>
      <span className="value">
        <Collection items={starship.films} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Hyperdrive Rating</span>
      <span className="value">{starship.hyperdrive_rating}</span>
    </div>

    <div>
      <span className="label">Length</span>
      <span className="value">{starship.length}</span>
    </div>

    <div>
      <span className="label">Manufacturer</span>
      <span className="value">{starship.manufacturer}</span>
    </div>

    <div>
      <span className="label">Max Atmosphering Speed</span>
      <span className="value">{starship.max_atmosphering_speed}</span>
    </div>

    <div>
      <span className="label">Model</span>
      <span className="value">{starship.model}</span>
    </div>

    <div>
      <span className="label">Name</span>
      <span className="value">{starship.name}</span>
    </div>

    <div>
      <span className="label">Passengers</span>
      <span className="value">{starship.passengers}</span>
    </div>

    <div>
      <span className="label">Pilots</span>
      <span className="value">
        <Collection items={starship.pilots} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Starship className</span>
      <span className="value">{starship.starship_className}</span>
    </div>
  </div>
);

export default Starship;
