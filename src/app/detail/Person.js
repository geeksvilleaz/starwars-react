import React from 'react';
import Collection from '../Collection';

const Person = ({ person, displayItem }) => (
  <div className="detail">
    <h2>{person.name}</h2>

    <div>
      <span className="label">Birth Year</span>
      <span className="value">{person.birth_year}</span>
    </div>

    <div>
      <span className="label">Eye Color</span>
      <span className="value">{person.eye_color}</span>
    </div>

    <div>
      <span className="label">Films</span>
      <span className="value">
        <Collection
            items={person.films}
            displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Gender</span>
      <span className="value">{person.gender}</span>
    </div>

    <div>
      <span className="label">Hair Color</span>
      <span className="value">{person.hair_color}</span>
    </div>

    <div>
      <span className="label">Height</span>
      <span className="value">{person.height}</span>
    </div>

    <div>
      <span className="label">Homeworld</span>
      <span className="value">
        <Collection items={[person.homeworld]} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Mass</span>
      <span className="value">{person.mass}</span>
    </div>

    <div>
      <span className="label">Name</span>
      <span className="value">{person.name}</span>
    </div>

    <div>
      <span className="label">Skin Color</span>
      <span className="value">{person.skin_color}</span>
    </div>

    <div>
      <span className="label">Species</span>
      <span className="value">
        <Collection items={[person.species]} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Starships</span>
      <span className="value">
        <Collection items={person.starships} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Vehicles</span>
      <span className="value">
        <Collection items={person.vehicles} displayItem={displayItem} />
      </span>
    </div>
  </div>
);

export default Person;
