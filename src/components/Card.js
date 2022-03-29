import { useState } from "react";

function Card(props) {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    // console.log("div clicked");
    setClicked(true);
  };

  return (
    <div className="starshipDiv" onClick={handleOnClick}>
      {clicked === true ? (
        <div>
          <p>
            <span id="insideSpan">Name </span>
            {props.name}
          </p>
          <p>
            <span id="insideSpan">Model </span>
            {props.model}
          </p>
          <p>
            <span id="insideSpan">Starship class </span>
            {props.shipClass}
          </p>

          <p>
            <span id="insideSpan">Hyperdrive Rating </span>
            {props.hyperdrive}
          </p>
          <p>
            <span id="insideSpan">Cargo capacity </span>
            {props.cargoCap}
          </p>
        </div>
      ) : (
        <div className="div-simple">{props.name}</div>
      )}
    </div>
  );
}
export default Card;

//    <p>
// <span id="insideSpan">URL </span>
// {props.url}
// </p>
