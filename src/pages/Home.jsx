import TypeWriter from "@components/TypeWriter";
import { useEffect, useState } from "react";
import Planet from "../components/home/Planet";
import planetsData from "../mock/planets";
import "../css/home/Home.css";

function Home() {
	const [api, setApi] = useState([]);
	const [info, setInfo] = useState("Bienvenue AstroQuizz!");
	const [card, setCard] = useState(false);

	function handleClick(planetName) {
		setCard(true);
		setInfo(planetName);
	}

	useEffect(() => {
		setApi(planetsData);
		// axios
		// 	.get("/api/planets")
		// 	.then((result) => setApi(result.data))
		// 	.catch((err) => console.error(err));
	}, []);

	return (
		<div className="Home">
			{api.length > 0 &&
				api
					.filter((el) => el.isPlanet === true)
					.map((item) => {
						return (
							<Planet
								key={item.id}
								name={item.name}
								cardOn={card}
								clickedPlanet={info}
								handle={(a) => handleClick(a)}
							/>
						);
					})}
			<div className="astronaut-container">
				<img
					className="cloud"
					src="/assets/images/bulle-rectangle.png"
					alt="cloud"
				/>
				<img
					className="astronaut"
					src="/assets/images/astronauts/astronaut_4.png"
					alt="astronaut"
				/>
				<div className="info">
					<TypeWriter text={info} />
				</div>
			</div>
		</div>
	);
}

export default Home;
