import PropTypes from "prop-types";
import React from "react";
import "../../css/savoir/Savoir.css";

function KnowledgeImage({ clickEvent, scrollTo }) {
	const onClick = async () => {
		await clickEvent();
		return scrollTo();
	};

	return (
		<div className="astronaut-section">
			<div className="knowledge-bubble">
				<img src="/assets/images/bulle-rectangle.png" alt="Comic bubble" />
				<p>
					Clique sur l'étoile lumineuse pour découvrir une nouvelle connaissance
				</p>
			</div>
			<div className="knowledge-astronaut">
				<img
					src="/assets/images/astronauts/astronaut_2.png"
					alt="Astronaut that propose to learn new things"
				/>
				<button
					className="star-button"
					type="button"
					aria-label="Click"
					onClick={onClick}
				/>
			</div>
		</div>
	);
}

export default KnowledgeImage;

KnowledgeImage.propTypes = {
	clickEvent: PropTypes.func.isRequired,
	scrollTo: PropTypes.func.isRequired,
};
