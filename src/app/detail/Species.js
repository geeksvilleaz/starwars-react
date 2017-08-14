import React from 'react';
import Collection from '../Collection';

const Species = ({species, displayItem}) => (
  <div className="detail">
    <h2>{species.name}</h2>

    <div>
      <span className="label">Average Height</span>
      <span className="value">{species.average_height}</span>
    </div>

    <div>
      <span className="label">Average Lifespan</span>
      <span className="value">{species.average_lifespan}</span>
    </div>

    <div>
      <span className="label">classNameification</span>
      <span className="value">{species.classNameification}</span>
    </div>

    <div>
      <span className="label">Designation</span>
      <span className="value">{species.designation}</span>
    </div>

    <div>
      <span className="label">Eye Colors</span>
      <span className="value">{species.eye_colors}</span>
    </div>

    <div>
      <span className="label">Films</span>
      <span className="value">
        <Collection items={species.films} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Hair Colors</span>
      <span className="value">{species.hair_colors}</span>
    </div>

    <div>
      <span className="label">Homeworld</span>
      <span className="value">
        <Collection items={[species.homeworld]} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Language</span>
      <span className="value">{species.language}</span>
    </div>

    <div>
      <span className="label">Name</span>
      <span className="value">{species.name}</span>
    </div>

    <div>
      <span className="label">People</span>
      <span className="value">
        <Collection items={species.people} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Skin Colors</span>
      <span className="value">{species.skin_colors}</span>
    </div>
  </div>
);

export default Species;
