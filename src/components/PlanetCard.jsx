import PropTypes from "prop-types";
import React from "react";

function PlanetCard({ name, description, facts }) {
	return (
		<div className="planetDescriptionCard">
			<figure>
				<img src="/assets/images/description.svg" alt="bg img" />
			</figure>
			<div className="planetDescription">
				<h2>{name}</h2>
				<p>{description}</p>
				<ul>
					<h3>Faits :</h3>
					{facts?.map((fact) => {
						return <li key={fact}>{fact}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

PlanetCard.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	facts: PropTypes.node.isRequired,
};

export default PlanetCard;
