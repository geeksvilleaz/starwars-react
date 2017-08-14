import React from 'react';
import Collection from '../Collection';

const Film = ({film, displayItem}) => (
  <div className="detail">
    <h2>{film.title}</h2>

    <div>
      <span className="label">Characters</span>
      <span className="value">
        <Collection items={film.characters} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Director</span>
      <span className="value">{film.director}</span>
    </div>

    <div>
      <span className="label">Episode Id</span>
      <span className="value">{film.episode_id}</span>
    </div>

    <div>
      <span className="label">Opening Crawl</span>
      <span className="value">{film.opening_crawl}</span>
    </div>

    <div>
      <span className="label">Director</span>
      <span className="value">{film.director}</span>
    </div>

    <div>
      <span className="label">Planets</span>
      <span className="value">
        <Collection items={film.planets} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Producer</span>
      <span className="value">{film.producer}</span>
    </div>

    <div>
      <span className="label">Release Date</span>
      <span className="value">{film.release_date}</span>
    </div>

    <div>
      <span className="label">Species</span>
      <span className="value">
        <Collection items={film.species} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Starships</span>
      <span className="value">
        <Collection items={film.starships} displayItem={displayItem} />
      </span>
    </div>

    <div>
      <span className="label">Title</span>
      <span className="value">{film.title}</span>
    </div>

    <div>
      <span className="label">Vehicles</span>
      <span className="value">
        <Collection items={film.vehicles} displayItem={displayItem} />
      </span>
    </div>
  </div>
);

export default Film;
