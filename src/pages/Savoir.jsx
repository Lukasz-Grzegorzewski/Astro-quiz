import { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import KnowledgeCards from "../components/savoir/KnowledgeCards";
import KnowledgeImage from "../components/savoir/KnowledgeImage";
import planetsData from "../mock/planets";

function KnowledgePage() {
	const [informations, setInformations] = useState([]);

	useEffect(() => {
		setInformations(planetsData);
		// axios
		// .get("/api/planets")
		// .then((res) => {
		//   setInformations(res.data);
		// })
		// .catch((err) => {
		// console.error(err);
		// });
	}, []);

	const [current, setCurrent] = useState("");
	const [currentImage, setCurrentImage] = useState("");

	const randomize = () => {
		const randomIndex = Math.floor(Math.random() * informations.length);
		const path =
			informations[randomIndex].curiosites["long-description"].length;
		const imagePath = informations[randomIndex].url;
		const randomTitle = Math.floor(Math.random() * path);
		setCurrentImage(imagePath);
		setCurrent(
			informations[randomIndex].curiosites["long-description"][randomTitle],
		);
	};

	const { scroller } = Scroll;

	function scrollTo() {
		scroller.scrollTo("knowledge-title", {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -100,
		});
	}

	return (
		<div className="knowledge-page">
			{informations.length > 0 && (
				<div>
					<KnowledgeImage
						clickEvent={() => randomize()}
						scrollTo={() => scrollTo()}
					/>
					{current && (
						<KnowledgeCards
							title={current.title}
							answer={current.answer}
							url={currentImage}
						/>
					)}
				</div>
			)}
		</div>
	);
}

export default KnowledgePage;
