import React from 'react';
import Collection from '../Collection';

const Vehicle = ({vehicle, displayItem}) => (
  <div className="detail">
    <h2>{vehicle.name}</h2>
    <div>
      <span className="label">Cargo Capacity</span>
      <span className="value">{vehicle.cargo_capacity}</span>
    </div>

    <div>
      <span className="label">Consumables</span>
      <span className="value">{vehicle.consumables}</span>
    </div>

    <div>
      <span className="label">Cost In Credits</span>
      <span className="value">{vehicle.cost_in_credits}</span>
    </div>

    <div>
      <span className="label">Crew</span>
      <span className="value">{vehicle.crew}</span>
    </div>

    <div>
      <span className="label">Films</span>
      <span className="value">
        <Collection items={vehicle.films} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Length</span>
      <span className="value">{vehicle.length}</span>
    </div>

    <div>
      <span className="label">Manufacturer</span>
      <span className="value">{vehicle.manufacturer}</span>
    </div>

    <div>
      <span className="label">Max Atmosphering Speed</span>
      <span className="value">{vehicle.max_atmosphering_speed}</span>
    </div>

    <div>
      <span className="label">Model</span>
      <span className="value">{vehicle.model}</span>
    </div>

    <div>
      <span className="label">Name</span>
      <span className="value">{vehicle.name}</span>
    </div>

    <div>
      <span className="label">Passengers</span>
      <span className="value">{vehicle.passengers}</span>
    </div>

    <div>
      <span className="label">Pilots</span>
      <span className="value">
        <Collection items={vehicle.pilots} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Vehicle className</span>
      <span className="value">{vehicle.vehicle_className}</span>
    </div>
  </div>
);

export default Vehicle;
