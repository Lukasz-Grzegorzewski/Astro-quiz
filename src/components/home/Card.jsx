import TypeWriter from "@components/TypeWriter";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import planetsData from "../../mock/planets";

function Card({ clickedPlanet }) {
	const [api, setApi] = useState([]);

	useEffect(() => {
		setApi(planetsData);
		// axios
		// 	.get("/api/planets")
		// 	.then((result) => setApi(result.data))
		// 	.catch((err) => console.error(err));
	}, []);

	function generateDescription(planet) {
		let description = "";

		if (clickedPlanet === "Terre") return `${planet.discoveredBy}`;

		if (planet.discoveryDate !== "" || planet.discoveredBy !== "")
			description += "Découvert";

		if (planet.discoveryDate !== "")
			description += ` en ${planet.discoveryDate}`;

		if (planet.discoveredBy !== "")
			description += ` par : ${planet.discoveredBy}`;

		return description;
	}

	return (
		<div className={`card card-${clickedPlanet}`}>
			{api.length > 0 && (
				<div className="card-content">
					<TypeWriter text={clickedPlanet} />
					{api
						.filter((item) => item.name === clickedPlanet)
						.map((el) => (
							<div className="gravity" key={`gravity-${clickedPlanet}`}>
								<TypeWriter text={`Gravité : ${el.gravity}`} />
								<TypeWriter text={generateDescription(el)} />
							</div>
						))}
				</div>
			)}
		</div>
	);
}

export default Card;

Card.propTypes = {
	clickedPlanet: PropTypes.string.isRequired,
};
