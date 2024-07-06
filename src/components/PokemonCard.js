import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [isClicked, setClicked] = useState(false)
  function handleClick(){
    setClicked(!isClicked)
  }
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          {!isClicked ? (
          <img alt="oh no!" src={pokemon.sprites.front} />
          ) : (
            <img alt="oh no!" src={pokemon.sprites.back}/>
          )}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
